const info = require('../model/user');

const print ={
    index:(req,res)=>{
        res.render('index');
    },
    display: (req,res)=>{
        info.getAllInformation((err, results)=>{
            if(err) throw err;
            res.render('display',{information: results});
        })
    },
    save: (req,res)=>{
        const data = req.body;
        info.save(data,(err)=>{
            if(err) throw err;
            res.redirect('/');
        })
    }
};

module.exports = print;