const express = require ('express');
const miranda = require ('../controller/CController');
const routes = express.Router();

routes.get('/',miranda.index);
routes.post('/save', miranda.save);
routes.get('/display',miranda.display);


module.exports = routes;