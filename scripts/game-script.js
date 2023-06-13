var balance = document.getElementById('balance');
var click_area = document.querySelectorAll('.click-area');
const upgrade_amount_spans = document.querySelectorAll('.amount-span');
const upgrade_purchase_x1_buttons = document.querySelectorAll('.purchase-button-x1');
const upgrade_purchase_x10_buttons = document.querySelectorAll('.purchase-button-x1');


// Восстановление прогресcа
if (!localStorage.getItem('player_money')) {
	player_money = 0;
	balance.textContent = player_money + ' $';
} else {
	player_money = parseInt(localStorage.getItem('player_money'));
	balance.textContent = player_money + ' $';
}

if (!localStorage.getItem('upgrade_amount')) {
	upgrade_amount = [];
	
	for (let i = 0; i < 10; i++) {
		upgrade_amount.push(0);
		upgrade_amount_spans[i].textContent = 'Количество: ' + upgrade_amount[i];
	}
} 
else {
	upgrade_amount = JSON.parse(localStorage.getItem('upgrade_amount'));
	
	for (let i = 0; i < 10; i++) {
		upgrade_amount_spans[i].textContent = 'Количество: ' + upgrade_amount[i];
	}
}


// onclick-функции
click_area[0].onclick = function () {
	player_money++;
	balance.textContent = player_money + ' $';
	localStorage.setItem('player_money', player_money);
};

upgrade_purchase_x1_buttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		player_money
		upgrade_amount[index]++;
		upgrade_amount_spans[index].textContent = 'Количество: ' + upgrade_amount[index];
		localStorage.setItem('upgrade_amount', JSON.stringify(upgrade_amount));
	});
});