
const burgerBtn = function()

{
    const burger = document.getElementById('burger');
    const headerMenu = document.getElementById('header__menu');
        
    burger.onclick = () => {    /// burger
        openMenu();
    }
        
    openMenu = () => {         /// Открывает меню burger
        headerMenu.classList.toggle('openBurger'); /// селектор 'openBurger'
    }
}

burgerBtn();






