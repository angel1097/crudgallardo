const modalAlumno = new bootstrap.Modal(document.getElementById('modalEditar'));
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    nombre_editar.value = fila.children[1].innerHTML;
    edad_editar.value = fila.children[2].innerHTML;
    matricula_editar.value = fila.children[3].innerHTML; // Ajusta según la posición del campo de matrícula en tu tabla
    telefono_editar.value = fila.children[4].innerHTML; // Ajusta según la posición del campo de número de teléfono en tu tabla
    modalAlumno.show();
});
