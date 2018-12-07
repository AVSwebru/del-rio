var menuBtn = document.querySelector('.js-menu-btn');
var telBtn = document.querySelector('.js-tel-btn');
var menu = document.querySelector('.js-menu');
var contactsBlock = document.querySelector('.js-contacts-block');

menuBtn.addEventListener('click', () => {
  if (contactsBlock.classList.contains('active')) {
    telBtn.classList.remove('active');
    contactsBlock.classList.remove('active');
    // hideFocus(contactsBlock, 0);
  }
  // (menu.classList.contains('active')) ? hideFocus(menu, 0) : hideFocus(menu, -1);
  // menu.setAttribute('aria-hidden', !(menu.classList.contains('active')));
});

telBtn.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    // menu.setAttribute('aria-hidden', true);
    // hideFocus(menu, 0);
  }
  // (contactsBlock.classList.contains('active')) ? hideFocus(contactsBlock, 0) : hideFocus(contactsBlock, -1);
});

// function hideFocus(element, value) {
//   element.querySelectorAll('a').forEach((link) => {
//     link.setAttribute('tabindex', value);
//   });
// }
