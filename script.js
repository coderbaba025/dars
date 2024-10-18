const images = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src; // Tanlangan rasmni modaldagi rasmga o'rnatamiz
    });
});

// Modal tashqarisiga bosilganda rasmni yopish
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none'; // Modalni yashirish
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Dark mode qo'shish
    themeIcon.src = document.body.classList.contains('dark-mode') ? 'moon_icon.png' : 'sun_icon.png'; // Ikonkani o'zgartirish
});