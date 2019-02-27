var menuBtn = document.querySelector('.js-menu-btn');
var telBtn = document.querySelector('.js-tel-btn');
var menu = document.querySelector('.js-menu');
var contactsBlock = document.querySelector('.js-contacts-block');

menuBtn.addEventListener('click', () => {
  if (contactsBlock.classList.contains('active')) {
    telBtn.classList.remove('active');
    contactsBlock.classList.remove('active');
  }
});

telBtn.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  }

});

