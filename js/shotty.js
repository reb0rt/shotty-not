document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("maxValue");
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("start").click();
        }
    });
});

function start() {
    //create audio object here so it can buffer fast
    let snd = new Audio("audio/chime3.mp3"); // buffers automatically when created
    //hide all of the menu items
    document.getElementsByClassName("menu")[0].style.visibility = "hidden";
    let minValue = 10;
    //validate that this is a number later
    let maxValue = parseInt(document.getElementById("maxValue").value);

    //pick a random number between 10 and the user specified number to go at
    let timeout = getRandomArbitrary(minValue, maxValue);


    //console.log(timeout);

    //set background to red while we wait
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        //after the random time is reached
        //play sound, show the text, and set backgroudn to gree
        snd.play();
        document.getElementById("text").style.visibility = "visible";
        document.body.style.backgroundColor = "green";
        setTimeout(() => {
            //this keeps the green on the screen for 5 seconds before showing the menu once again
            document.getElementsByClassName("menu")[0].style.visibility = "visible";
            document.getElementById("text").style.visibility = "hidden";
            document.body.style.backgroundColor = "";
        }, 5000);
    }, timeout * 1000);
}
//i stole this but i forgot where from
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}