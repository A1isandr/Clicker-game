const navItems = document.querySelectorAll('.nav-scroller__item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Удаляем класс .active у всех пунктов меню
    navItems.forEach(item => item.classList.remove('active'));
    
    // Добавляем класс .active к текущему пункту меню
    item.classList.add('active');
  });
});