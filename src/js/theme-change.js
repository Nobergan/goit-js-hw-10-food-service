// import themes from './theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');

checkboxRef.addEventListener('change', handleCheckboxChange);

defaultTheme();

function handleCheckboxChange() {
  if (checkboxRef.checked) {
    handleCheckboxOn();
  } else {
    handleCheckboxOff();
  }
}

function handleCheckboxOff() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function handleCheckboxOn() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  checkboxRef.checked = true;
}

function defaultTheme() {
  const savedTheme = localStorage.getItem('theme');
  const parsedTheme = JSON.parse(savedTheme);

  if (parsedTheme === Theme.LIGHT) {
    handleCheckboxOff();
  } else {
    handleCheckboxOn();
  }
}
