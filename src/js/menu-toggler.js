var menuBtn = document.querySelector('.js-menu-btn');
var telBtn = document.querySelector('.js-tel-btn');
var menu = document.querySelector('.js-menu');
var menuItems = menu.querySelectorAll('a');
var contactsBlock = document.querySelector('.js-contacts-block');
var contactsItems = contactsBlock.querySelectorAll('a');

document.addEventListener('DOMContentLoaded', () => {
  hideFocus(menuItems, -1);
  hideFocus(contactsItems, -1);
});

menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    hideFocus(menuItems, 0);
  } else {
    hideFocus(menuItems, -1);
  }
  if (contactsBlock.classList.contains('active')) {
    telBtn.classList.remove('active');
    contactsBlock.classList.remove('active');
      hideFocus(contactsItems, -1);
  }
});

telBtn.addEventListener('click', () => {
  if (contactsBlock.classList.contains('active')) {
    hideFocus(contactsItems, 0);
  } else {
    hideFocus(contactsItems, -1);
  }
  if (menu.classList.contains('active')) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    hideFocus(menuItems, -1);
  }

});

function hideFocus(element, value) {
  element.forEach((link) => {
    link.setAttribute('tabindex', value);
  });
}
