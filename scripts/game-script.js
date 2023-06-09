var balance = document.getElementById('balance');
var click_area = document.getElementsByClassName('click-area');

if (!localStorage.getItem('money')) {
  var money = 0;
  balance.textContent = money + ' $';
} else {
  var money = parseInt(localStorage.getItem('money'));
  balance.textContent = money + ' $';
}

click_area[0].onclick = function () {
  money += 1;
  balance.textContent = money + ' $';
  localStorage.setItem('money', money);
};