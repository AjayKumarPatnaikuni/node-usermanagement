const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password11',
  database: 'usermanagement'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = { db };
