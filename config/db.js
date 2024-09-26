const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miranda_appdev'
});
db.connect ((err)=>{
    if(err) throw err;
    console.log('Connected to MySql');
    
});

module.exports = db;