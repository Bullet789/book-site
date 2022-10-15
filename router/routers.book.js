const {Router} = require('express');
const route = Router();
const bookCont = require('../controller/controllers.book');

route.post('/book',bookCont.postBook)
route.delete('/book/:id',bookCont.deleteBook)
route.patch('/book/:id',bookCont.patchBook)
route.get('/book/:id',bookCont.getBook)
route.get('/book/genre/:id',bookCont.getBookBygenre)


module.exports = route
