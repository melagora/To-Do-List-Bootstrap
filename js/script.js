function agregarTarea() {
    let tareaTexto = document.getElementById("nuevaTarea").value;

    if (tareaTexto === "") {
        alert("No se pueden agregar tareas vacias");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaTexto + " ";

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () { nuevaTarea.remove() }

    let botonRealizada = document.createElement("button");
    botonRealizada.textContent = "Realizada";
    botonRealizada.onclick = function () {
        // Obtener la lista de tareas realizadas
        let listaRealizadas = document.getElementById("tareasRealizadas");
    
        // Mover el elemento a la nueva lista
        listaRealizadas.appendChild(nuevaTarea);
    
        // Eliminar el botón "Realizada"
        botonRealizada.remove();
    };
    nuevaTarea.appendChild(botonRealizada);
    nuevaTarea.appendChild(botonEliminar);


    document.getElementById("tareasAgregadas").appendChild(nuevaTarea);

    document.getElementById("nuevaTarea").value = "";

    nuevaTarea.classList.add("tarea");
    botonRealizada.classList.add("btn-realizada");
    botonEliminar.classList.add("btn-eliminar");

}