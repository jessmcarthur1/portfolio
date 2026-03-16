document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll('.stats .fade-in'); 
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Optional: Animate stat number count-up
        if (entry.target.classList.contains('stat')) {
          const number = entry.target.querySelector('.stat-number');
          if (number) {
            const target = +number.dataset.target;
            let current = 0;
            const step = Math.ceil(target / 40);

            const updateCount = () => {
              current += step;
              if (current >= target) {
                number.textContent = target;
              } else {
                number.textContent = current;
                requestAnimationFrame(updateCount);
              }
            };
            updateCount();
          }
        }

        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 1.0
  });

  fadeIns.forEach(el => observer.observe(el));
});


window.addEventListener('DOMContentLoaded', () => {
  const topText = document.querySelector('.top-text');
  const bottomText = document.querySelector('.bottom-text');
  const image = document.querySelector('.heading-image');

  // Step 1: Animate top text
  setTimeout(() => {
    topText.classList.add('visible');
  }, 400);

  // Step 2: Animate bottom text
  setTimeout(() => {
    bottomText.classList.add('visible');
  }, 800);

  // Step 3: Animate image scale-in
  setTimeout(() => {
    image.classList.add('visible');
  }, 1300);
});

window.addEventListener('DOMContentLoaded', () => {
  const infoSection = document.querySelector('.info-columns');
  const body = document.body;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
        } else {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(infoSection);
});