const rutas = require('express').Router();
const { collection } = require('../esquemas/album');
const Album = require('../esquemas/album');

rutas.get('/mostrar', function(req, res){
     Album.find({})
         .then((list) => {res.send(list); console.log(list)})
         .catch( (error) => {console.log(error)});
})

rutas.post('/album', function(req, res){
    Album.create(req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch(error => console.error(error));
});


rutas.put('/actual/:id', function(req, res){
     Album.findOneAndUpdate(
         {nombre: req.params.id},
         {
            $set:{
                Titulo:req.body.Titulo,
                descripcion: req.body.descripcion,
                anio: req.body.anio,
                imagen: req.body.imagen,
                artistaID: req.body.artistaID
            }
         },
         {
            upsert: true
         }
     ).then((list) => {res.json('updated')})
     .catch((error) => {console.log(error)})
})

rutas.delete('/delete/:id',function(req, res){
    Album.deleteOne({ id: req.params.id})
        .then((list) => {res.send(list); console.log("DELEted")})
        .catch( (error) => {console.log(error)});
})


module.exports = rutas