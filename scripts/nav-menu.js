const navItems = document.querySelectorAll('.nav-item');
const contentBlocks = document.querySelectorAll('.content');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    
    // Делаем активным
    navItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');

    const contentId = item.dataset.content;
    
    // Скрываем все блоки контента
    contentBlocks.forEach(block => {
      block.style.display = 'none';
    });
    
    // Отображаем выбранный блок контента
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
  });
});