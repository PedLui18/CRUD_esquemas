const rutas = require('express').Router();
const { collection } = require('../esquemas/usuario');
const Usuario = require('../esquemas/usuario');

rutas.get('/mostrar', function(req, res){
     Usuario.find({})
         .then((list) => {res.send(list); console.log(list)})
         .catch( (error) => {console.log(error)});
})

rutas.post('/product', function(req, res){
    Usuario.create(req.body)
    .then((list) => {res.send(list); console.log(list)})
    .catch(error => console.error(error));
});


rutas.put('/actual/:id', function(req, res){
     Usuario.findOneAndUpdate(
         {nombre: req.params.id},
         {
            $set:{
                nombre:req.body.nombre,
                correo: req.body.correo,
                rol: req.body.rol,
                imagen: req.body.imagen
            }
         },
         {
            upsert: true
         }
     ).then((list) => {console.log(list); res.json(list)})
     .catch((error) => {console.log(error)})
})

rutas.delete('/delete/:id',function(req, res){
    Usuario.deleteOne({ id: req.params.id})
        .then((list) => {res.send(list); console.log("DELEted")})
        .catch( (error) => {console.log(error)});
})


module.exports = rutas