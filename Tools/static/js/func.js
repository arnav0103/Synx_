const parentCarousel = document.querySelector('.discover__carousel-parent');
const carousel = document.querySelector('.discover__carousel');
const navBtn1 = document.querySelector('.nav-1');
const navBtn2 = document.querySelector('.nav-2');
const navBtn3 = document.querySelector('.nav-3');

navBtn1.addEventListener('click', () => {
    navBtn1.classList.add('discover-nav-active');
    navBtn2.classList.remove('discover-nav-active');
    navBtn3.classList.remove('discover-nav-active');
    carousel.style.left = '0%';
})

navBtn2.addEventListener('click', () => {
    navBtn2.classList.add('discover-nav-active');
    navBtn1.classList.remove('discover-nav-active');
    navBtn3.classList.remove('discover-nav-active');
    carousel.style.left = '-50%';
})

navBtn3.addEventListener('click', () => {
    navBtn3.classList.add('discover-nav-active');
    navBtn1.classList.remove('discover-nav-active');
    navBtn2.classList.remove('discover-nav-active');
    carousel.style.left = '-100%';
})

$('.slide-1').hover(() => {
    $('.slide-1').addClass('active');
}, ()=> {
    $('.slide-1').removeClass('active');
}) 

$('.slide-2').hover(() => {
    $('.slide-2').addClass('active');
}, ()=> {
    $('.slide-2').removeClass('active');
})

$('.slide-3').hover(() => {
    $('.slide-3').addClass('active');
}, ()=> {
    $('.slide-3').removeClass('active');
})

$('.slide-4').hover(() => {
    $('.slide-4').addClass('active');
}, ()=> {
    $('.slide-4').removeClass('active');
})

$('.slide-5').hover(() => {
    $('.slide-5').addClass('active');
}, ()=> {
    $('.slide-5').removeClass('active');
})

$('.slide-6').hover(() => {
    $('.slide-6').addClass('active');
}, ()=> {
    $('.slide-6').removeClass('active');
})

$('.slide-7').hover(() => {
    $('.slide-7').addClass('active');
}, ()=> {
    $('.slide-7').removeClass('active');
})

//////////////////////////////////////////
// audioPlayer();
$('.slide-1 .play-btn').click(()=>{
    if ($('.song-1').get(0).paused) {
        $('.song-1').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
    }
})

$('.slide-2 .play-btn').click(()=>{
    if ($('.song-2').get(0).paused) {
        $('.song-2').get(0).play();
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
    }
})

$('.slide-3 .play-btn').click(()=>{
    if ($('.song-3').get(0).paused) {
        $('.song-3').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
    }
})

$('.slide-4 .play-btn').click(()=>{
    if ($('.song-4').get(0).paused) {
        $('.song-4').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
    }
})

$('.slide-5 .play-btn').click(()=>{
    if ($('.song-5').get(0).paused) {
        $('.song-5').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
    }
})

$('.slide-6 .play-btn').click(()=>{
    if ($('.song-6').get(0).paused) {
        $('.song-6').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }   
     else {
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
    }
})

$('.slide-7 .play-btn').click(()=>{
    if ($('.song-7').get(0).paused) {
        $('.song-7').get(0).play();
        $('.song-2').get(0).pause();
        $('.song-2').get(0).currentTime = 0;
        $('.song-3').get(0).pause();
        $('.song-3').get(0).currentTime = 0;
        $('.song-4').get(0).pause();
        $('.song-4').get(0).currentTime = 0;
        $('.song-5').get(0).pause();
        $('.song-5').get(0).currentTime = 0;
        $('.song-6').get(0).pause();
        $('.song-6').get(0).currentTime = 0;
        $('.song-1').get(0).pause();
        $('.song-1').get(0).currentTime = 0;
    }   
     else {
        $('.song-7').get(0).pause();
        $('.song-7').get(0).currentTime = 0;
    }
})