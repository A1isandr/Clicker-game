var balance = document.getElementById('balance');
var click_area = document.getElementsByClassName('click-area');
var upgrade_purchase_button = document.getElementById('purchase-button');
var upgrade_amount_span = document.getElementById('amount');

// Восстановление прогресса
if (!localStorage.getItem('money')) {
  var money = 0;
  balance.textContent = money + ' $';
} else {
  var money = parseInt(localStorage.getItem('money'));
  balance.textContent = money + ' $';
}

if (!localStorage.getItem('upgrade_amount')) {
  var upgrade_amount = 0;
  upgrade_amount_span.textContent = 'Количество: ' + upgrade_amount;
} else {
  var upgrade_amount = parseInt(localStorage.getItem('upgrade_amount'));
  upgrade_amount_span.textContent = 'Количество: ' + upgrade_amount;
}

// onclick-функции
click_area[0].onclick = function () {
  money++;
  balance.textContent = money + ' $';
  localStorage.setItem('money', money);
};

upgrade_purchase_button.onclick = function () {
  upgrade_amount++;
  upgrade_amount_span.textContent = 'Количество: ' + upgrade_amount;
  localStorage.setItem('upgrade_amount', upgrade_amount);
}