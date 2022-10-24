$(document).ready(() => {
    //hide() method is to add a css property "display: none".
    //Arguments in between hide(600) signify animation duration. It can be altered

    //Instantly hides preloader after dcument has been loaded
    //$('.preloader').hide(600);

    //Hides preloader after some seconds of load time (1000 = 1 second)
    setTimeout(() => {
        $('.preloader').hide(600);
    }, 5000);
})