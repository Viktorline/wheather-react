document.getElementById('open-sidebar').addEventListener('click', function () {
  document.getElementById('sidebar-search').classList.add('sidebar-active');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
  document.getElementById('sidebar-search').classList.remove('sidebar-active');
});
