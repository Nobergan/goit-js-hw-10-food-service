const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

checkboxRef.addEventListener('change', handleCheckboxChange);

// bodyRef.classList.add('light-theme');
defaultTheme();

function handleCheckboxChange() {
  if (checkboxRef.checked) {
    handleCheckboxOn();
  } else {
    handleCheckboxOff();
  }
}

function handleCheckboxOff() {
  document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', 'light-theme');
}

function handleCheckboxOn() {
  document.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.setItem('theme', 'dark-theme');
}

function defaultTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (!savedTheme) {
    bodyRef.classList.add(Theme.LIGHT);
  } else {
    bodyRef.classList.add(savedTheme);
  }

  if (savedTheme === Theme.DARK) {
    checkboxRef.checked = true;
  }
}

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const checkboxRef = document.querySelector('#theme-switch-toggle');
// const bodyRef = document.querySelector('body');

// checkboxRef.addEventListener('change', handleCheckboxChange);

// bodyRef.classList.add('light-theme');
// defaultTheme();

// function handleCheckboxChange() {
//   if (checkboxRef.checked) {
//     bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
//     localStorage.setItem('theme', 'dark-theme');
//   } else {
//     bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
//     localStorage.setItem('theme', 'light-theme');
//   }
// }

// function defaultTheme() {
//   const savedTheme = localStorage.getItem('theme');

//   if (savedTheme === 'dark-theme') {
//     bodyRef.classList.add('dark-theme');
//     checkboxRef.checked = true;
//   }
// }
