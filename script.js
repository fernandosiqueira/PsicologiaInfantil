// Smooth scroll para links da navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Efeito de fade para cards de serviço
function revealOnScroll() {
    var cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        var cardTop = card.getBoundingClientRect().top;
        var triggerBottom = window.innerHeight * 0.8;

        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);