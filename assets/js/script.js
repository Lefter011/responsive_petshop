const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// navbar

const navToggler = document.querySelector('[data-nav-toggler]'),
    navbar = document.querySelector('[data-navbar]'),
    navbarLinks = document.querySelectorAll('[data-nav-link]');

const toggleNavbar = function () {
    navbar.classList.toggle('active');
    navToggler.classList.toggle('active');
}

addEventOnElement(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove('active');
    navToggler.classList.remove('active');
}

addEventOnElement(navbarLinks, 'click', closeNavbar)

const header = document.querySelector('[data-header');

const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}

addEventOnElement(window, 'scroll', activeElementOnScroll);