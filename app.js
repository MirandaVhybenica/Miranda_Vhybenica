const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded ({extended:true}));
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('sucessfully running on http://localhost:3000')
    
});