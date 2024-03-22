// Crear una instancia del modal de Bootstrap
const modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));

// Función para manejar eventos de clic en elementos
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

// Escuchar clics en botones de clase .btnEditar
on(document, 'click', '.btnEditar', e => {
    console.log('Botón de editar clicado'); 

    // Obtener la fila del alumno desde el botón de edición
    const fila = e.target.closest('tr');

    // Obtener los valores de los atributos data-* de la fila
    const id = fila.dataset.id; // Obtener el ID del alumno desde data-id
    const nombre = fila.dataset.nombre;
    const edad = fila.dataset.edad;
    const matricula = fila.dataset.matricula;
    const telefono = fila.dataset.telefono;

    // Asignar los valores a los campos del formulario de edición
    document.getElementById('id_editar').value = id; // Asignar el ID al campo oculto
    document.getElementById('nombre_editar').value = nombre;
    document.getElementById('edad_editar').value = edad;
    document.getElementById('matricula_editar').value = matricula;
    document.getElementById('telefono_editar').value = telefono;

    // Mostrar el modal de edición
    modalEditar.show();
});
