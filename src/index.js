document.getElementById('open-sidebar').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.add('sidebar-active');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.remove('sidebar-active');
});
