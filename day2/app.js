const container = document.querySelector('.container');

container.addEventListener('click', () => {
  container.classList.toggle('active');
  let noAnimation = document.querySelectorAll('.no-animation');
  noAnimation.forEach(item => {
    item.classList.remove('no-animation');
  });
});
