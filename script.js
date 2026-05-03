'use strict';

let count = 0;

const valueEl = document.querySelector('#value');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

const updateUI = function () {
  valueEl.textContent = count;

  if (count > 0) valueEl.style.color = 'green';
  else if (count < 0) valueEl.style.color = 'red';
  else valueEl.style.color = 'black';
};

increaseBtn.addEventListener('click', function () {
  count++;
  updateUI();
});

decreaseBtn.addEventListener('click', function () {
  count--;
  updateUI();
});

resetBtn.addEventListener('click', function () {
  count = 0;
  updateUI();
});

// Initialize display
updateUI();
