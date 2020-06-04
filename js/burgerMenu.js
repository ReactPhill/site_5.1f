
// var burger = document.getElementById('burger');

// burger.onclick = function () {
//     openMenu();
// }

// function openMenu() {
//    document.getElementById('header__menu').classList.toggle('openBurger');
// }

const burger = document.getElementById('burger');
const headerMenu = document.getElementById('header__menu');

const burgerBtn = () => {
    
    burger.onclick = () => {    /// burger
        openMenu();
    }
    
    openMenu = () => {         /// Открывает меню burger
        headerMenu.classList.toggle('openBurger'); /// селектор 'openBurger'
    }
}

burgerBtn();
