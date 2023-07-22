const menuMobile = document.querySelector('.mobile-menu');

function menuShow() {
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}