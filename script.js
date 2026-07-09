/**
 * Gestión de pestañas interactivas
 * Maneja el cambio de contenido entre las diferentes secciones
 */

function switchTab(event, tabId) {
  // Ocultar todas las pestañas
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Desactivar todos los botones
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Activar la pestaña seleccionada
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
    event.currentTarget.classList.add('active');

    // Scroll suave en dispositivos móviles
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }
}

/**
 * Inicialización al cargar el documento
 */
document.addEventListener('DOMContentLoaded', function () {
  // Verificar que los botones existan antes de agregar event listeners
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      const tabId = this.getAttribute('data-tab');
      if (tabId) {
        switchTab(e, tabId);
      }
    });
  });
});
