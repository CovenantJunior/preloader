$(document).ready(() => {

    //The fadeOut() method gradually changes the opacity, for selected elements, from visible to hidden (fading effect).

    //Argument in between fadeOut(600) signify animation duration. It can be altered.

    //Note: Hidden elements will not be displayed at all (no longer affects the layout of the page).

    //Tip:
        //This method is often used together with the fadeIn() method.
        //And both can have a callback function after the animation duration

    //Instantly fades out preloader after document has been loaded
    //$('.preloader').fadeOut(600);

    //Fades out preloader after some seconds of load time (1000 = 1 second)
    setTimeout(() => {
        $('.preloader').fadeOut(1000);
    }, 5000);
})