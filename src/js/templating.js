import itemsMenu from '../templates/menu-items.hbs';
import menu from '../menu.json';

const markup = itemsMenu(menu);
console.log(markup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
