function mostrarMensaje() {
  alert("Bienvenido a nuestro sitio web");
}

function cambiarTexto() {
  document.getElementById("mensaje").innerText = "El mensaje ha sido actualizado";
}

function cambiarColor() {
  document.getElementById("mensaje").style.color = "blue";
}

function validar(e) {
  e.preventDefault(); 

  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    alert("Debe escribir su nombre");
  } else {
    alert("Formulario enviado correctamente");
  }
}
