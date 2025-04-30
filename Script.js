// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple highlight effect on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});
