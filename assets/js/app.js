let nombres = [];
let totalAmigos = 0;

function limpiarJuego() {
    // limpia la lista de amigos
    listaAmigos.innerHTML = "";
    // limpia la caja de texto
    document.getElementById('amigo').value = "";
    // limpia el mensaje de error
    document.getElementById('amigoSecreto').textContent = "";
    // limpia el arreglo nombres
    nombres = [];
    // limpia el total de amigos
    totalAmigos = 0;
    return;
}

// obtiene el elemento con id agregarAmigo

function agregarAmigo() {

    // si la caja de texto esta vacia
    if (document.getElementById('amigo').value == "") {
        // muestra un mensaje de error
        document.getElementById('amigoSecreto').textContent = "Debe ingresar un nombre";
        return;
    }else{// agrega el nombre a la lista de nombres
        // elimina el mensaje de error sino hay nombre
        document.getElementById('amigoSecreto').textContent = "";
        // agrega el nombre a la lista de nombres
        nombres.push(document.getElementById('amigo').value);
        // llama a la funcion listarAmigos
        listarAmigos();
    return;
    }

}

// lista los amigos en la lista ul con clase listaAmigos

function listarAmigos() {
    // devuelve el ultimo elemento agregado al arreglo nombres
    nombre = nombres.at(-1);
    // crea el elemento li
    let li = document.createElement('li');
    // coloca el texto alamacenado en la variable nombre
    li.textContent = nombre;
    // coloca el elemento li en la lista ul con clase listaAmigos
    listaAmigos.appendChild(li);
    // limpia la caja de texto
    document.getElementById('amigo').value = "";
    return;
}

// sortea el amigo secreto

function sortearAmigo() {
    // obtiene el total de amigos
    totalAmigos = nombres.length;
    // obtiene un numero aleatorio entre 0 y el total de amigos
    let amigoSecreto = Math.floor(Math.random() * totalAmigos);
    // obtiene el nombre del amigo secreto
    let nombreAmigoSecreto = nombres[amigoSecreto];
    // muestra el nombre del amigo secreto
    document.getElementById('amigoSecreto').textContent = nombreAmigoSecreto;
    return;
}