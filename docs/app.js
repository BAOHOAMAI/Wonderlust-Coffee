// Home Video  

let btn = document.querySelector('.play-btn');
let modal = document.querySelector('.overlay');
let video = document.querySelector('video');
let closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', () => {
    modal.classList.add('open');
    video.currentTime= 0;
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
})

// Home Space
var slides = document.querySelectorAll('.slider');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual) {
    slides.forEach((slide)=> {
        slide.classList.remove('active');
        btns.forEach((btn)=> {
            btn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active')
}
btns.forEach((btn , i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i =1;

    var repeater = () => {
        setTimeout(function () { 

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i ) {
                i=0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        },10000);
    }
    repeater();
}
repeat();