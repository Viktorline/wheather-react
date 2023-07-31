const openSidebarButton = document.getElementById('main-info__open-sidebar');
const closeSidebarButton = document.getElementById('sidebar__close-sidebar');
const sidebar = document.querySelector('.sidebar');

openSidebarButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar-active');
});

closeSidebarButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active');
});
