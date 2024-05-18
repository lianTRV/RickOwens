document.addEventListener("DOMContentLoaded", function () {
  const otherGender = document.getElementById("other");
  const otherGenderInput = document.getElementById("other-gender-container");

  document.querySelectorAll('input[name="sexo"]').forEach((input) => {
    input.addEventListener("change", function () {
      if (otherGender.checked) {
        otherGenderInput.style.display = "flex";
        otherGenderInput.style.flexDirection = "row";
        otherGenderInput.style.alignItems = "center";
      } else {
        otherGenderInput.style.display = "none";
      }
    });
  });

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      if (!formValidate()) {
        event.preventDefault(); // Evitar el envío del formulario
      }
    });
});

function formValidate() {
  let valid = true;

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const email = document.getElementById("email").value.trim();

  const errorNombre = document.getElementById("error-nombre");
  const errorApellido = document.getElementById("error-apellido");
  const errorMensaje = document.getElementById("error-msg");
  const errorEmail = document.getElementById("error-email");

  // Resetear mensajes de error
  errorNombre.style.display = "none";
  errorApellido.style.display = "none";
  errorMensaje.style.display = "none";
  errorEmail.style.display = "none";

  // Validar nombre
  if (nombre === "") {
    errorNombre.textContent = "Ingrese su nombre";
    errorNombre.style.display = "block";
    valid = false;
  }

  // Validar apellido
  if (apellido === "") {
    errorApellido.textContent = "Ingrese su apellido";
    errorApellido.style.display = "block";
    valid = false;
  }

  // Validar mensaje
  if (mensaje === "" || mensaje.length < 10) {
    errorMensaje.textContent = "Ingrese un mensaje de al menos 10 caracteres.";
    errorMensaje.style.display = "block";
    valid = false;
  }

  // Validar email
  if (email === "") {
    errorEmail.textContent = "Ingrese su email";
    errorEmail.style.display = "block";
    valid = false;
  } else {
    // Validar formato de email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorEmail.textContent = "Ingrese un email válido";
      errorEmail.style.display = "block";
      valid = false;
    }
  }

  return valid;
}
