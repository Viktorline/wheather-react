const themeSwitcher = document.getElementById('main-info__switch-theme');
const themeStyle = document.getElementById('theme-style');

themeSwitcher.addEventListener('click', () => {
  themeSwitcher.classList.toggle('active');
  themeStyle.href =
    themeStyle.getAttribute('href') === 'src/css/themes/light-theme.css'
      ? 'src/css/themes/dark-theme.css'
      : 'src/css/themes/light-theme.css';
});
