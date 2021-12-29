// const parentCarousel = document.querySelector('.discover__carousel-parent');
// const carousel = document.querySelector('.discover__carousel');
// const navBtn1 = document.querySelector('.nav-1');
// const navBtn2 = document.querySelector('.nav-2');
// const navBtn3 = document.querySelector('.nav-3');

// navBtn1.addEventListener('click', () => {
//     navBtn1.classList.add('discover-nav-active');
//     navBtn2.classList.remove('discover-nav-active');
//     navBtn3.classList.remove('discover-nav-active');
//     carousel.style.left = '0%';
// })

// navBtn2.addEventListener('click', () => {
//     navBtn2.classList.add('discover-nav-active');
//     navBtn1.classList.remove('discover-nav-active');
//     navBtn3.classList.remove('discover-nav-active');
//     carousel.style.left = '-50%';
// })

// navBtn3.addEventListener('click', () => {
//     navBtn3.classList.add('discover-nav-active');
//     navBtn1.classList.remove('discover-nav-active');
//     navBtn2.classList.remove('discover-nav-active');
//     carousel.style.left = '-100%';
// })

$('#t1').click(() => {
    $('#Tcar').css('left', '-100%');
    $('#t1').css('opacity', '0');
    $('#t2').css('opacity', '1');
})

$('#t2').click(() => {
    $('#Tcar').css('left', '0%');
    $('#t2').css('opacity', '0');
    $('#t1').css('opacity', '1');
})

$('#n1').click(() => {
    $('#Ncar').css('left', '-100%');
    $('#n1').css('opacity', '0');
    $('#n2').css('opacity', '1');
})

$('#n2').click(() => {
    $('#Ncar').css('left', '0%');
    $('#n2').css('opacity', '0');
    $('#n1').css('opacity', '1');
})

$('#s1').click(() => {
    $('#Scar').css('left', '-100%');
    $('#s1').css('opacity', '0');
    $('#s2').css('opacity', '1');
})

$('#s2').click(() => {
    $('#Scar').css('left', '0%');
    $('#s2').css('opacity', '0');
    $('#s1').css('opacity', '1');
})