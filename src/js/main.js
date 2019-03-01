import './uikit';
import './menu-toggler';
import './animations';
import counter from './counter';

//counters
const counterMinusBtn = document.querySelectorAll('.js-counter-minus');
const counterPlusBtn = document.querySelectorAll('.js-counter-plus');
const counterInput = document.querySelectorAll('.js-counter-input');

counter(counterMinusBtn, counterPlusBtn, counterInput);
