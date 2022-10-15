const Genre = require('../model/Genre.model')

const genreCont = {
    postGenre: async (req, res) => {
        const {namegenre,genredescription} = req.body
        try{
            const data = await Genre.create({
                namegenre,
                genredescription
            })
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    deleteGenre: async (req, res) => {
        try{
            const data = await Genre
        }
        catch (err) {

        }
    },
    getGenre: async (req, res) => {
        try{
            const data = await Genre
        }
        catch (err) {

        }
    },
    
}

module.exports = genreCont
