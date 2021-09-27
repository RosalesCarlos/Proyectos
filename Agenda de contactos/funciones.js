const guardarContacto = (db, contacto) =>{
    // setItem guarda -- JSON.stringify convierte el objeto a string
    db.setItem(contacto.id, JSON.stringify(contacto))
    // Redireccion forzada a que me cargue la pagina
    window.location.href = '/'
}

const cargarContacto = (db, parentNode) =>{
    let claves = Object.keys(db)
    for(claves of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) =>{
    let divContacto = document.createElement ('div')
    let nombreContacto = document.createElement ('h3')
    let numeroContacto = document.createElement ('p')
    let direccionContacto = document.createElement ('p')
    let iconoBorrar = document.createElement ('span')

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete_forever'

    divContacto.classList.add('tarea')
    iconoBorrar.classList.add('material-icons', 'icono')

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)
}
