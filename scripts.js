const carousel = document.querySelector('.carousel');
let index = 0;

function showTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 4000); // Mudar a cada 3 segundos

document.addEventListener('DOMContentLoaded');



