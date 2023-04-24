const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-buttons')
const downButton = document.querySelector('.down-buttons')
const slidesLength = slideRight.querySelectorAll('div').length  //we want the get all the query selector in the images on the right side.

let activeSlideIndex = 0    //knowing which index is in view.

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`  //we use negative bcos it is going to go up. the total no is 4, but using array it will be 3, to get the length we have to minus it by 1.

upButton.addEventListener('click', () => changeSlide('up')) //we want the up button to function.
downButton.addEventListener('click', () => changeSlide('down')) //we want the down button to function.

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {    //if the direction is = up
        activeSlideIndex++  //increment the active slide index by 1
        if(activeSlideIndex > slidesLength - 1) {   //if the activeslideindex is greater then the last slide
            activeSlideIndex = 0    //we set the activeslideindex to 0.
        }
    }
    else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    }


slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`  //we made this positive bcos we want it to go the other way.
}