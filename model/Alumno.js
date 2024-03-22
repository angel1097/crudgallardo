const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const alumnoSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    matricula: String,
    telefono: String
});

module.exports = mongoose.model('Alumno', alumnoSchema);

