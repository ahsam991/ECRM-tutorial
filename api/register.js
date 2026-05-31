const { Client } = require('pg');
const bcrypt = require('bcryptjs');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password, role } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Use environment variable for database connection
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    console.error('DATABASE_URL is not set in environment variables');
    return res.status(500).json({ error: 'Database configuration error' });
  }

  const client = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false // Required for Supabase connections
    },
  });

  try {
    await client.connect();

    // Check if user exists
    const existing = await client.query('SELECT id FROM users WHERE username = $1', [username]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    
    // Assign role, default to 'user' if not provided. Prevent arbitrary role assignment if you want,
    // but for now we accept the role sent from the client or default to 'user'
    const userRole = role || 'user';

    // Insert user
    await client.query(
      'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3)',
      [username, passwordHash, userRole]
    );

    res.status(201).json({ message: 'User created successfully', role: userRole });
  } catch (error) {
    console.error('Registration error:', error);
    // Provide more specific error message for network issues
    if (error.code === 'ENETUNREACH' || error.message.includes('ENETUNREACH')) {
      return res.status(503).json({ error: 'Database connection unavailable. Please check your network configuration or contact support.' });
    }
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.end();
  }
}
