const {Router} = require('express');
const route = Router();
const authorCont = require('../controller/controllers.author');

route.post('/author',authorCont.postAuthor)
route.patch('/author/:id',authorCont.patchAuthor)




module.exports = route