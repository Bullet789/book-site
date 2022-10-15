const {Router} = require('express');
const route = Router();
const bookrevcont = require('../controller/controllers.bookreview');

route.post('/book',bookrevcont.postreviewBybook)
route.delete('/book',bookrevcont.deletereview)
route.get('/book',bookrevcont.getreviewBybook)



module.exports = route