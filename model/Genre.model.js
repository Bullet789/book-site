const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    namegenre: String,
    genredescription: String,
})

const Genre = mongoose.model('Genre', mongooseSchema);

module.exports = Genre