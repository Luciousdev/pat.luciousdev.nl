// Mark git directories as safe: git config --global --add safe.directory '*'
// Logs the loading of the webpage with the time.

function logger() {
    const time = new Date();
    console.log("[" + time + "]:\nPage loading finished");
}


// Session set to 0 after page is reloaded

function sessionSetZero() {
    sessionStorage.getItem("session");
    sessionStorage.setItem("session", 0);
}
sessionSetZero();


// Calculates session pets and stores it in the sessionstorage

let clickCount = 0;
let clicked = false;

function session() {
    sessionStorage.getItem("session");

    let clickImage = document.getElementById("clicker");
    clickImage.addEventListener("click", function() {
        clicked = true;
        clickCount += 1;
        let test = clickCount;
        sessionStorage.setItem("session", test);
    });

    if (clicked) {
        let test = clickCount;
        sessionStorage.setItem("session", test);
    }
}
session();

function setSession() {
    let totalSession = sessionStorage.getItem("session");
    document.getElementById("totalSession").innerHTML = totalSession;
}
setInterval(setSession, 250);
setSession();


// Pat animation

function startAnimation() {
    document.getElementById('clicker').src = './assets/images/pat-animated.gif';
}

function stopAnimation() {
    document.getElementById('clicker').src = './assets/images/pet.jpg';
}



// TODO light/dark mode switcher

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});