const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:Tlvbx74QwdAwIx4x@db.jhfzdtacfedbpktkfabm.supabase.co:5432/postgres',
});

async function setup() {
  try {
    await client.connect();
    
    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log("Database initialized successfully!");
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

setup();
