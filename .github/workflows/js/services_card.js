document.querySelectorAll('.services-card').forEach(card => {
    const toggleBtn = card.querySelector('.services-card__toggle');
    const backBtn = card.querySelector('.services-card__back');
  
    toggleBtn.addEventListener('click', () => {
      card.classList.add('open');
    });
  
    backBtn.addEventListener('click', () => {
      card.classList.remove('open');
    });
  });