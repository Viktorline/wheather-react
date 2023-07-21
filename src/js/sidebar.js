const openSidebarButton = document.getElementById('open-sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');
const sidebar = document.querySelector('.sidebar');

openSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar-active');
});

closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active');
});
