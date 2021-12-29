//responsive navbar
$(".toggleNav").click(() => {
    $(".toggleNav").toggleClass("close");
    $(".navbar-responsive").toggleClass("open");
    $(".navbar-responsive__link").toggleClass("open__link");
})

///////////////////////////////////
//dropdown menu
$('.navbar__icon').click(()=> {
    $('.navbar__notifs').toggleClass('open');
    console.log('hello')
})