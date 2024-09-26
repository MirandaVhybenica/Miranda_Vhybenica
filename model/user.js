const db = require('../config/db');
const information = {
    save: (data, callback)=>{
        const query = "INSERT INTO miranda (firstname,lastname,gender,address) VALUES (?,?,?,?)";
        db.query(query, [data.firstname, data.lastname, data.gender, data.address], callback);
    },
    getAllInformation:(callback)=>{
        const query = "SELECT * FROM miranda";
        db.query(query,callback);
    }
};
module.exports = information;