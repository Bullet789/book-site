const Book = require('../model/Book.model');

const bookCont = {
    postBook: async (req, res) => {
        const {name,author,genre} = req.body
        try{
            const data = await Book.create({
                name,
                author, 
                genre
            })
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    deleteBook: async (req, res) => {
        try{
            const data = await Book.findByIdAndDelete(req.params.id)
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    patchBook: async (req, res) => {
        const {name,author,genre} = req.body
        try{
            const data = await Book.findByIdAndUpdate(req.params.id,
                {name,},res.json(data))
        }
        catch (err) {
            res.json(err)
        }
    },
    getBook: async (req, res) => {
        try{
            const data = await Book.findById(req.params.id)
        res.json(data)}
        catch (err) {
            res.json(err)
        }
    },
    getBookBygenre: async (req, res) => {
        try{
            const data = await Book.find({genre:req.params.id}).populate('genre')
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    }
}


module.exports = bookCont
