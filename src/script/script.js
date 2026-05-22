class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    animateLinks() {
    this.navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
}

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    closeMenu() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.navLinks.forEach(link => {
        link.style.animation = "";
    });
}

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener("click", this.closeMenu);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);


mobileNavbar.init();



function enviarWhatsApp(event) {
    event.preventDefault();
    const testeONLY = "5534997645824";

    alert("to usando meu número no periodo de testes, ao finalizar remover esse alert e colocar o número da academia");

    const name = document.querySelector('#name').value;
    const danceStyle = document.querySelector('#modalidade').value;

    console.log(name, danceStyle);

    const telefone = testeONLY;


    const mensagem = `Olá! Meu nome é ${name} e tenho interesse na aula de ${danceStyle}.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}

function contatoViaWpp(event) {
    event.preventDefault();
    const testeONLY = "5534997645824";

    alert("to usando meu número no periodo de testes, ao finalizar remover esse alert e colocar o número da academia");

    const name = document.querySelector('#name').value;
    let subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    const telefone = testeONLY;

    if (subject) {
        subject = 'e tenho uma ' + subject;
    }

    const mensagem = `Olá! Meu nome é ${name} ${subject}:\n${message}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}

let count = 1;

document.getElementById("radio1").checked = true;

const radios = document.querySelectorAll('input[name="radio-btn"]');

radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        count = index + 1;
    });
});


setInterval(function () {
    nextImage()
}, 5000)

function nextImage() {
    count++;
    if (count > radios.length) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

const currentImage = document.getElementById("current-image");

const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        thumbnails.forEach((img) => {
            img.classList.remove("active");
        });

        thumb.classList.add("active");

        currentImage.src = thumb.src;
    });
});