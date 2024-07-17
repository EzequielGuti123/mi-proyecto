document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const slides = document.querySelector(".slides");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    prevButton.addEventListener("click", function() {
        if (currentIndex === 0) {
            currentIndex = slides.children.length - 1;
        } else {
            currentIndex--;
        }
        updateSlides();
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex === slides.children.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlides();
    });

    function updateSlides() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre_form").value;
        const telefono = document.getElementById("tel_form").value;
        const email = document.getElementById("email_form").value;

        const url = `https://api.whatsapp.com/send?phone=1234567890&text=Hola, mi nombre es ${nombre}. Mi número es ${telefono}. Mi correo es ${email}. Me gustaría contratar el servicio.`;
        window.open(url, "_blank");
    });
})