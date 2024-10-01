const db = require('../config/db');
const information = {
    save: (data, callback)=>{
        const query = "INSERT INTO miranda (firstname,lastname,gender,address) VALUES (?,?,?,?)";
        db.query(query, [data.firstname, data.lastname, data.gender, data.address], callback);
    },
    update:(id,data,callback)=>{
        const query = "update miranda set firstname=?, lastname=?, gender=?, address=? where id=?";
        db.query(query,[data.firstname, data.lastname, data.gender, data.address, id], callback);
    },
    getInformation:(id,callback)=>{
        const query = "SELECT * FROM miranda where id=?";
        db.query(query, [id],callback);
    },
    getAllInformation:(callback)=>{
        const query = "SELECT * FROM miranda";
        db.query(query,callback);
    },
    delete:(id, callback)=>{
        const q = "delete from miranda where id=?";
        db.query(q, [id], callback);
    }
};
module.exports = information;