function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function filterPrograms(category) {
    const cards = document.querySelectorAll('.program-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('category');
        card.style.display = (category === 'all' || cardCategory === category) ? 'block' : 'none';
    });

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-buttons button[onclick*="${category}"]`).classList.add('active');
}

