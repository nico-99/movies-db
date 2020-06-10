// archivo database de model
const DB = require('../database/models') 
const OP = DB.Sequelize.Op

const homeController ={
    index: async (req, res)=>{
        try {
            const movies = await DB.Movie.findAll({
                // include:['genre', 'actores']
            })
            res.send(movies)
            res.render('index', {movies})
        } catch (error) {
            res.send(error)
        }
    },

    listar: (req,res)=>{
        DB.Movie.findAll()
        .then((resultado)=>{
            res.render('movies', {resultado: resultado})
        })
        .catch((error)=>{
            res.send(error)
        })
    },

    detail: (req, res)=>{
        DB.Movie.findByPk(req.params.id)
        .then((resultado)=>{
            res.render('detail', {resultado: resultado})
        })
        .catch((error)=>{
            res.send(error)
        })
    },

    guerra: (req, res)=>{
        DB.Movie.findAll({
            where: {
                title:{
                [OP.like]:'La Guerra%'
                }
            }
        })
        .then((resultado)=>{
            res.send(resultado)
        })
        .catch((error)=>{
            res.send(error)
        })
    },
// todavia no esta en funcionamiento
    new: (req, res)=>{
        DB.movie.findAll({
            where: {
                
            }
        })
    },
// ---------------------------------------------
    recommended: (req, res)=>{
        DB.Movie.findAll({
            where: {
                rating:{
                [OP.between]:[8, 10]
                }
            }
        })
        .then((resultado)=>{
            res.send(resultado)
        })
        .catch((error)=>{
            res.send(error)
        })
    },

    create: async (req, res)=>{
        try {
            const generos = await DB.Genre.findAll()
            res.render('createForm', {generos})
        } catch (error) {
            res.send(error)
        } 
    },

    store: async (req, res)=>{
       try {
           await DB.Movie.create(req.body)
           res.redirect('/movies')
       } catch (error) {
           res.send(error)
       } 
    },

    delete: (req, res)=>{
        DB.Movie.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/movies')
    },
}

module.exports = homeController





