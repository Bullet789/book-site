const Bookreview = require('../model/Bookreview.model');

const bookrevcont = {
    postreviewBybook: async (req, res) => {
        try{
            const data = await Bookreview.create()

        }
        catch (err) {

        }
    },
    deletereview: async (req, res) => {
        try{
            const data = await Bookreview

        }
        catch (err) {

        }
    },
    getreviewBybook: async (req, res) => {
        try{
            const data = await Bookreview

        }
        catch (err) {

        }
    }
}

module.exports = bookrevcont