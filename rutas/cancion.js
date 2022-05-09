const rutas = require('express').Router();
const { collection } = require('../esquemas/cancion');
const Cancion = require('../esquemas/cancion');

rutas.get('/show', function(req, res){
     Cancion.find({})
         .then((list) => {res.send(list); console.log(list)})
         .catch( (error) => {console.log(error)});
})

rutas.post('/register', function(req, res){
    Cancion.create(req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch(error => console.error(error));
});


rutas.put('/update/:id', function(req, res){
     Cancion.findOneAndUpdate(
         {nombre: req.params.id},
         {
            $set:{
                numero: req.body.numero,
                nombre:req.body.nombre,
                duracion: req.body.duracion,
                archivo: req.body.archivo,
                albumID: req.body.albumID
            }
         },
         {
            upsert: true
         }
     ).then((list) => {res.json('Successfully updated')})
     .catch((error) => {console.log(error)})
})

rutas.delete('/delete/:id',function(req, res){
    Cancion.deleteOne({ id: req.params.id})
        .then((list) => {res.send(list); console.log("Successfully deleted")})
        .catch( (error) => {console.log(error)});
})

rutas.post('/search', function(req, res){
    Cancion.find({ nombre: req.body.nombre })
        .then((list) => {res.send(list); console.log(list)})
        .catch((error) => {console.log(error)});
})


module.exports = rutas