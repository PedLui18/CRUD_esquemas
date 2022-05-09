const rutas = require('express').Router();
const { collection } = require('../esquemas/artista');
const Artista = require('../esquemas/artista');

rutas.get('/mostrar', function(req, res){
     Artista.find({})
         .then((list) => {res.send(list); console.log(list)})
         .catch( (error) => {console.log(error)});
})

rutas.post('/artist', function(req, res){
    Artista.create(req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch(error => console.error(error));
});


rutas.put('/actual/:id', function(req, res){
     Artista.findOneAndUpdate(
         {nombre: req.params.id},
         {
            $set:{
                nombre:req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen
            }
         },
         {
            upsert: true
         }
     ).then((list) => {res.json('updated')})
     .catch((error) => {console.log(error)})
})

rutas.delete('/delete/:id',function(req, res){
    Artista.deleteOne({ id: req.params.id})
        .then((list) => {res.send(list); console.log("DELEted")})
        .catch( (error) => {console.log(error)});
})

module.exports = rutas