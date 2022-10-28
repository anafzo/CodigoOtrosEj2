const objForm = document.forms["registro"];//Se cambió para usar document.forms especificando el formulario con id: formulario

objForm.onsubmit = function (event) { //cambio de e por event para que no se repitan variables

  event.preventDefault(); //prevent default para limpiar registros incorrectos

  //Corrección de todos los tipos de variables de var por let
  let n = objForm.elements[0]; //Cambio de nombre de variable
  let e = objForm.elements[1]; //Cambio de nombre de variable
  let na = objForm.elements[2]; //Cambio de nombre de variable

  let nombre = n.value
  let edad = e.value

  let i = formNacionalidad.selectedIndex
  let nacionalidad = formNacionalidad.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
}

let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  let lista = document.getElementById("lista-de-invitados")

  let elementoLista = document.createElement("div")
  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)

  let spanNombre = document.createElement("span")
  let inputNombre = document.createElement("input")
  let espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    let spanNombre = document.createElement("span")
    let inputNombre = document.createElement("input")
    let espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  let botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  let corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}