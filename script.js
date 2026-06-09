const stack = document.querySelector('.photo-stack');
if (stack) {
  const front = stack.querySelector('.photo-card.front');
  const back = stack.querySelector('.photo-card.back');

  stack.addEventListener('mouseenter', () => {
    front.classList.add('photo-card--behind');
    back.classList.add('photo-card--front');
  });

  stack.addEventListener('mouseleave', () => {
    front.classList.remove('photo-card--behind');
    back.classList.remove('photo-card--front');
  });
}