const { db } = require('../models/userModel');

const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
};

const getUserById = (req, res) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results[0]);
  });
};

const createUser = (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], err => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User created successfully' });
  });
};

const updateUser = (req, res) => {
  const { username, password } = req.body;
  const query = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
  db.query(query, [username, password, req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User updated successfully' });
  });
};

const deleteUser = (req, res) => {
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [req.params.id], err => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User deleted successfully' });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
