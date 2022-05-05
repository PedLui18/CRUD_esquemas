require('./config/conexion');

const Usuario = require("./esquemas/usuario");
const Artista = require("./esquemas/artista");
const Cancion = require("./esquemas/cancion");
const Album = require("./esquemas/album");

const express = require('express');

const port = (process.env.port || 3000)

const app = express();

/*const user = new Usuario(
    { 
        nombre: 'Pablo',
        correo: 'pb@gmail.com',
        contrasenia: '12309',
        rol: 'ser',
        imagen: 'prueba1'
    }
);*/
//user.save();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', port);
app.use(express.json());

app.use('/usuario', require('./rutas/usuario'))
app.use('/album', require('./rutas/album'))
app.use('/artista', require('./rutas/artista'))
app.use('/cancion', require('./rutas/cancion'))

app.listen(app.get('port'),(error)=>{
    if(error)
    {
        console.log('Error en la conexion'+error)
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
})