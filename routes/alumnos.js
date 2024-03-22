const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

// Ruta para mostrar todos los alumnos (GET)
router.get('/', alumnoController.mostrar);

// Ruta para crear un nuevo alumno (POST)
router.post('/crear', alumnoController.crear);

// Ruta para editar un alumno (POST)
router.post('/editar', alumnoController.editar);


// Ruta para borrar un alumno (GET)
router.get('/borrar/:id', alumnoController.eliminar);

module.exports = router;
