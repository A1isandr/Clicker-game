/*let balance = document.getElementById('balance');
let save_button = document.getElementById('save');
let click_area = document.getElementsByClassName('click-area');

if (!localStorage.getItem('money')) {
  let money = 0;
  balance.textContent = money + ' $';
} else {
  let money = parseInt(localStorage.getItem('money'));
  balance.textContent = money + ' $';
}

click_area[0].onclick = function () {
  money += 1;
  balance.textContent = money + ' $';
  localStorage.setItem('money', money);
};

save_button.onclick = function () {
  localStorage.setItem('money', money);
};*/