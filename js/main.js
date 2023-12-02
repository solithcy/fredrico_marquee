function startup() {
    moveTitle(); // Start the animation

    //Checks if the person on the site is a mobiles user and is so it alerts them that the site is not good on mobile
    if (navigator.userAgent.toLowerCase().match(/mobile/i)) { alert("This site was designed to be viewed from a computer, the experience on mobile isn't good"); }
}