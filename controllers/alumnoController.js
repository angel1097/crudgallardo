const Alumno = require('../model/Alumno');

// Mostrar todos los alumnos
exports.mostrar = (req, res) => {
    Alumno.find({}, (error, alumnos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            });
        }
        return res.render('index', { alumnos: alumnos });
    });
};

// Crear un nuevo alumno
exports.crear = (req, res) => {
    const { nombre, edad, matricula, telefono } = req.body;
    const nuevoAlumno = new Alumno({ nombre, edad, matricula, telefono });

    nuevoAlumno.save((error, alumnoGuardado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el Alumno'
            });
        }
        res.redirect('/');
    });
};

// Editar un alumno existente
// Editar un alumno existente
// Editar un alumno existente
exports.editar = (req, res) => {
    const { id, nombre, edad, matricula, telefono } = req.body;

    Alumno.findByIdAndUpdate(id, { nombre, edad, matricula, telefono }, (error, alumno) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            });
        }
        res.redirect('/');
    });
};



// Eliminar un alumno existente
exports.eliminar = (req, res) => {
    const id = req.params.id;

    Alumno.findByIdAndRemove(id, (error, alumno) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            });
        }
        res.redirect('/');
    });
};
