
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

// IMG GSAP

gsap.registerPlugin(ScrollTrigger);

let masks = document.querySelectorAll('.mask');

masks.forEach (mask => {
    let image = mask.querySelector('img');

    let tl = gsap.timeline({
        scrollTrigger : {
            trigger : mask,
            toggleActions : "restart none none reset"
        }
    });

    tl.set (mask, {autoAlpha: 1});

    tl.from (mask, 5, {
        yPercent : -100,
        ease: Power2.out
    })

    
    tl.from (image, 5, {
        yPercent : 100,
        scale: 1.3,
        delay: -5,
        ease: Power2.out
    })
});


let tl = gsap.timeline();

tl.to ('.text-demo', { y:"0%" , duration:1 , delay :1, opacity:1},1);
tl.fromTo ('.img1', { y:40,opacity:0},{y:0, duration:1 , delay :1, opacity:1},1);
tl.fromTo ('.paragraph-demo', {opacity:0} , {opacity:1 , duration:.5},3);
tl.fromTo ('.img2', {opacity:0} , {opacity:1 , duration:.5},3);
tl.fromTo ('.about', {opacity:0} , {opacity:1 , duration:.5},3);

