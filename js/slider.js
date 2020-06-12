const nextBtn = document.querySelector('.btn-next'); // Кнопка next
const prevBtn = document.querySelector('.btn-prev'); // Кнопка prev

const items = document.querySelectorAll('.slider__item'); // Коллекция item
let indexItem = 0;

const controllerSlider = () => {

    nextBtn.onclick = () => {
        items[indexItem].classList.remove('item-active');
        if(indexItem + 1 == items.length){
            indexItem = 0;
        }
        else{
            indexItem++;
        }
        items[indexItem].classList.add('item-active');
    }
    
    prevBtn.onclick = () => {
        items[indexItem].classList.remove('item-active');
        if(indexItem + 5 == items.length){
            indexItem = 4;
        }
        else{
            indexItem--;
        }
        items[indexItem].classList.add('item-active');
    }
}

controllerSlider();