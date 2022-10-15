const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use (express.json());
app.use (require('./router/routers.book'));
app.use (require('./router/routers.bookreview'));
app.use (require('./router/routers.genre'));
app.use (require('./router/routers.authors'));


mongoose.connect('mongodb+srv://deni:admin@cluster0.7wdvqlq.mongodb.net/books?retryWrites=true&w=majority',
(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('подключено');
    }
});

app.listen(3000, console.log('http://:'))












