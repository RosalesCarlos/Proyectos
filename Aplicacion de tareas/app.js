document.getElementById('formTarea').addEventListener('submit', guardarTarea);

function guardarTarea (e){

    let title = document.getElementById('titulo').value;
    let description = document.getElementById('descripcion').value;
    // console.log(title, description);

    const task = {
         title,
         description
     };
        // Si localStorage esta vacio, crea un arreglo
     if (localStorage.getItem('tasks') === null){
         let tasks = [];
         tasks.push(task);
        //  Convertir a formato de cadena con JSON.stringify
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }  else {
        //  Acualiza los datos en caso de ya existir la variable task
        // JSON.parse() Analiza una cadena de texto JSON, opcionalmente transformando el valor producido y sus propiedades, retornando el valor.
         let tasks = JSON.parse(localStorage.getItem('tasks'));
         tasks.push(task);
         localStorage.setItem('tasks', JSON.stringify(tasks));
     }
    //  console.log(task)
    conseguirTarea();
    document.getElementById('formTarea').reset();
    e.preventDefault();
}

function conseguirTarea(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks)
    let tasksView = document.getElementById('tareas');

    // Antes de insertar datos, limpiar
    tasksView.innerHTML = '';

    for(let i = 0; i< tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;
        // console.log (tasks[i])
        // Cada vez que recorra un elemento del arreglo se va agregando
        tasksView.innerHTML += `<div class="card"> 
          <div class="card-body">
             <p>${title} - ${description}</p>
             <a class="btn btn-danger" onclick="borrarTarea('${title}')"> Borrar </a> 
          </div>
        </div>`
    }
}
conseguirTarea();

function borrarTarea(title){
    console.log(title)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
       if(tasks[i].title == title) {
       tasks.splice(i, 1);
       }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    conseguirTarea();
}

function doRequest (){
    const url = 'https://apis.datos.gob.ar/georef/api/provincias'
    const http = new XMLHttpRequest()

http.open('GET', url)
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
         resultado = JSON.parse(this.responseText)
        // console.log(resultado)
    }
}
http.send()
}