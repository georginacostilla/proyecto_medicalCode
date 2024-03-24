document.addEventListener("DOMContentLoaded", function () {
    // Acción al hacer clic en el botón de perfil
    document.getElementById("profileBtn").addEventListener("click", function () {
      // Aquí puedes redirigir a la página de perfil o realizar alguna acción relacionada
      console.log("Ir al perfil");
    });

    // Acción al hacer clic en el botón de cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", function () {
      // Aquí puedes realizar la acción de cerrar sesión, como limpiar la sesión actual y redirigir a la página de inicio de sesión
      console.log("Cerrar sesión");
    });
  });