const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    textreview: String,
    nameauthorreview: String,
    bookreviewed: {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Book'
    }
})

const Bookreview = mongoose.model('Bookreview', mongooseSchema);

module.exports = Bookreview