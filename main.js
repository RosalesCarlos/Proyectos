const nombre = document.querySelector ('.nombre')
const numero = document.querySelector ('.numero')
const direccion = document.querySelector ('.direccion')
const btnAgregarTarea = document.querySelector ('.btn-agregar-tarea')
const listadoContactos = document.querySelector ('listado-contactos')

//db: basede datos -- localstorage se almacena en window que es como un "superobjeto"
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto)
} 

cargarContacto(db,listadoTarea)