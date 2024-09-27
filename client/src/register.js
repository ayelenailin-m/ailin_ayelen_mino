// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

// Obtener el formulario de inicio de sesión
const $form = document.getElementById("register-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Obtener los valores del formulario
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validación básica
  if (!username || !email || !password) {
    document.getElementById("message").innerText =
      "Por favor, completa todos los campos.";
    return;
  }

  // Realizar una solicitud POST a la API de registro
  fetch("http://localhost:4321/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    credentials: "include",
  }).then((response) => {
    if (response.ok) {
      // ! REDIRIGIR AL USUARIO A LA PÁGINA DE LOGIN
      window.location.href = "/pages/login.html";
    } else {
      // ! MOSTRAR UN MENSAJE DE ERROR AL USUARIO
      alert("Error al registrar usuario");
    }
  });
});
