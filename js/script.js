
  // Seleccionamos el botón de hamburguesa y el menú móvil
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Añadimos el evento de clic para abrir/cerrar el menú
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Toggle la visibilidad del menú
  });
