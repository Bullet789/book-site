const Author = require('../model/Author.model');

const authorCont = {
    postAuthor: async (req, res) => {
        const {nameauthor,authormyself} = req.body
        try{
            const data = await Author.create({
                nameauthor,
                authormyself,
            })
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    patchAuthor: async (req, res) => {
        const {nameauthor,authorCont} = req.body
        try{
            const data = await Author.findByIdAndUpdate(
                req.params.id,
                {nameauthor,authorCont}
            )
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    }
}

module.exports = authorCont