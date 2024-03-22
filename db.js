//Mongoatlas
const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:12345678AP@cluster0.lsztjj4.mongodb.net/db_alumnos?retryWrites=true&w=majority';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'));
db.once('open', function callback() {
  console.log("¡Conectado a Mongo Atlas!");
});

module.exports = db;
