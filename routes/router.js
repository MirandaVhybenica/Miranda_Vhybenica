const express = require ('express');
const miranda = require ('../controller/CController');
const routes = express.Router();

routes.get('/',miranda.index);
routes.post('/save', miranda.save);
routes.get('/display',miranda.display);
routes.get('/delete/:id',miranda.delete);
routes.get('/edit/:id',miranda.edit);
routes.post('/edit/:id',miranda.update);

module.exports = routes;