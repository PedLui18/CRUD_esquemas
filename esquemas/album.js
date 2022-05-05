const mongoose = require('mongoose');

const Artista = require("./artista");

const albumSchema = new mongoose.Schema({
    Titulo: { type: String },
    descripcion: { type: String},
    anio: { type: String},
    imagen: { type: String},
    artistaID: { type: mongoose.ObjectId, ref: Artista }
})

const Album = mongoose.model('album', albumSchema);

module.exports = Album;
