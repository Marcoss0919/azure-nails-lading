/* ==================================================
   MENU MOBILE
================================================== */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const isOpen = nav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Fechar menu ao clicar em um link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* ==================================================
   HEADER AO ROLAR A PÁGINA
================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==================================================
   LINK ATIVO DO MENU
================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==================================================
   MÁSCARA DE TELEFONE
================================================== */

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (event) => {

    let value = event.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 11) {

        value = value.substring(0, 11);

    }

    if (value.length <= 10) {

        value = value.replace(
            /^(\d{2})(\d{4})(\d)/,
            "($1) $2-$3"
        );

    } else {

        value = value.replace(
            /^(\d{2})(\d{5})(\d{4})/,
            "($1) $2-$3"
        );

    }

    event.target.value = value;

});


/* ==================================================
   VALIDAÇÃO DO FORMULÁRIO
================================================== */

const form = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name");

    const phone = document.getElementById("phone");

    const service = document.getElementById("service");


    let valid = true;


    /* Limpar mensagens */

    document.querySelectorAll(".error-message").forEach(error => {

        error.textContent = "";

    });


    /* Validar nome */

    if (name.value.trim().length < 3) {

        showError(
            name,
            "Digite seu nome completo."
        );

        valid = false;

    }


    /* Validar telefone */

    const phoneNumbers = phone.value.replace(/\D/g, "");

    if (phoneNumbers.length < 10) {

        showError(
            phone,
            "Digite um WhatsApp válido."
        );

        valid = false;

    }


    /* Validar serviço */

    if (service.value === "") {

        showError(
            service,
            "Selecione um serviço."
        );

        valid = false;

    }


    /* Resultado */

    if (valid) {

        formMessage.textContent =
            "Mensagem enviada com sucesso! Em um projeto real, aqui poderíamos enviar os dados para o WhatsApp.";

        formMessage.classList.add("success");

        form.reset();

    }

});


/* ==================================================
   FUNÇÃO DE ERRO
================================================== */

function showError(element, message) {

    const formGroup = element.closest(".form-group");

    const errorMessage =
        formGroup.querySelector(".error-message");

    errorMessage.textContent = message;

}


/* ==================================================
   ANIMAÇÃO AO ENTRAR NA TELA
================================================== */

const animatedElements = document.querySelectorAll(
    ".service-card, .gallery-item, .testimonial-card, .about-content"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* ==================================================
   GALERIA
================================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        console.log("Imagem da galeria clicada.");

    });

});


/* ==================================================
   CONSOLE
================================================== */

console.log(
    "Azure Nails - Landing Page carregada com sucesso!"
);