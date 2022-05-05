const mongoose = require('mongoose');

// const Album = mongoose.model('album');
const Album = require("./album");

const cancionSchema = new mongoose.Schema({
    numero: { type: String },
    nombre: { type: String },
    duracion: { type: String},
    archivo: { type: String},
    albumID: { type:  mongoose.ObjectId, ref: Album}
})

const Cancion = mongoose.model('cancion', cancionSchema);

module.exports = Cancion;

