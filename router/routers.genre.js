const {Router} = require('express');
const route = Router();
const genreCont = require('../controller/controllers.genre');

route.post('/genre',genreCont.postGenre)
route.delete('/genre',genreCont.deleteGenre)
route.get('/genre',genreCont.getGenre)



module.exports = route
