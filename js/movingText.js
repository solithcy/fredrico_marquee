var per = 0;
var sleep = 300;
var direction = false;

function moveTitle() {
    setTimeout(function() {
        document.getElementById('movingTitle').style.marginLeft = per + "%";
        if(!direction)
            per += 3;
        else
            per -= 3;

        if(per > 40)
            direction = true;
        if(per < -40)
            direction = false;

        moveTitle(); // Call the function again for the next step
    }, sleep);
}

function startup() {
    moveTitle(); // Start the animation
}
