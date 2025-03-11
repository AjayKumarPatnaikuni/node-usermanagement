const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'usermgmt.c3cw8amg6m22.ap-south-1.rds.amazonaws.com:3306',
  user: 'admin',
  password: 'password11',
  database: 'usermanagement'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

module.exports = { db };
