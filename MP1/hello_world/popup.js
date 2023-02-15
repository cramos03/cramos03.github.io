const Startbutton = document.getElementById("remind");
const userTime = document.getElementById("timer-count");
const Stopbutton = document.getElementById("stop");

Startbutton.addEventListener("click", myFunc);
function myFunc() {
    timer = setInterval(() => {
        alert("It's time to drink water");
    }, userTime.value * 60000);
}

Stopbutton.addEventListener("click", secFunc);
function secFunc() {
    clearInterval(timer)
}