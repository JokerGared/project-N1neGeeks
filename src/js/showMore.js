(() => {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('.catalog-btn');
    const hiddenItems = document.querySelectorAll('.mob-hidd');

    showButton.addEventListener('click', function () {
      hiddenItems.forEach(item => {
        item.style.display = 'block';
      });

      showButton.style.display = 'none'; // Hide the button after showing hidden items
    });
  });
})();
