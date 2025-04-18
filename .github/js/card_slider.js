document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

document.querySelectorAll('.swiper-slide').forEach((card) => {
    const button = card.querySelector('.button');
    const backButton = card.querySelector('.back-button');

    button.addEventListener('click', () => {
        card.classList.add('state-2');
        card.classList.remove('state-1');
        backButton.style.display = 'block';
        button.style.display = 'none';
    });

    backButton.addEventListener('click', () => {
        card.classList.add('state-1');
        card.classList.remove('state-2');
        backButton.style.display = 'none';
        button.style.display = 'block';
    });
});