const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    nameauthor: String,
    authormyself: String,
})

const Author = mongoose.model('Author', mongooseSchema);

module.exports = Author