const rutas = require('express').Router();
const { collection } = require('../esquemas/cancion');
const Cancion = require('../esquemas/cancion');

rutas.get('/mostrar', function(req, res){
     Cancion.find({})
         .then((list) => {res.send(list); console.log(list)})
         .catch( (error) => {console.log(error)});
})

rutas.post('/cancion', function(req, res){
    Cancion.create(req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch(error => console.error(error));
});


rutas.put('/actual/:id', function(req, res){
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
     ).then((list) => {res.json('updated')})
     .catch((error) => {console.log(error)})
})

rutas.delete('/delete/:id',function(req, res){
    Cancion.deleteOne({ id: req.params.id})
        .then((list) => {res.send(list); console.log("DELEted")})
        .catch( (error) => {console.log(error)});
})


module.exports = rutas