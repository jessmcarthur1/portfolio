const stack = document.querySelector('.photo-stack');
if (stack) {
  const front = stack.querySelector('.photo-card.front');
  const back = stack.querySelector('.photo-card.back');

  stack.addEventListener('click', () => {
    front.classList.toggle('photo-card--behind');
    back.classList.toggle('photo-card--front');
  });
}