const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    edad_editar.value = fila.children[2].innerHTML
    modalAlumno.show()
})