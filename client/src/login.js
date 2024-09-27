import "./style.css";

// Obtener el formulario de inicio de sesión
const $form = document.getElementById("login-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
  console.log("funciona esto?");
  
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Obtener los valores del formulario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  console.log(email, password);
  
  // Validación basica
  if (!email || !password) {
    return alert("Por favor, completa todos los campos.");
  }

  // Realizar una solicitud POST a la API de inicio de sesión
  fetch("http://localhost:4321/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  }).then((response) => {
    console.log(response);
    
    if (response.ok) {
      
      // ! REDIRIGIR AL USUARIO A LA PÁGINA PRINCIPAL
      window.location.href = "/";
    } else {
      // ! MOSTRAR UN MENSAJE DE ERROR AL USUARIO
      console.log("no hay respuesta");
      
      alert("Error al iniciar sesión.");
    }
  });
});
