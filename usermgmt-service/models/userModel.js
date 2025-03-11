const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1:3306',
  user: 'root',
  password: 'password',
  database: 'usermanagement'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = { db };
