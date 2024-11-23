const db = require('../config/db');

exports.createUser = async (email, passwordHash) => {
  return db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, passwordHash]);
};

exports.findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

