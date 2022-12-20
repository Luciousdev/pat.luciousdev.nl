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


// Global pats count update/set

let clicker = document.getElementById("clicker");
clicker.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "update_click_count.php", true);
    xhr.send();
});

let displayElement = document.getElementById("displayElement");

let temp = 0;

function updateClickCount() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            let clickCount = xhr.responseText;
            displayElement.innerHTML = clickCount;
        }
    };
    xhr.open("GET", "get_click_count.php", true);
    xhr.send();
    if (temp == 0) {
        temp += 1;
        const time = new Date();
        console.log("[" + time + "]:\nConnected to database.");
    } else if (temp >= 1) {
        const time = new Date();
        console.log("[" + time + "]:\nPat count successfully updated.");
    }
}
setInterval(updateClickCount, 10000);
updateClickCount();


// Achievements


let newbieUnlocked = false;
let gettingThereUnlocked = false;
let climbingUnlocked = false;
let niceUnlocked = false;
let top1Unlocked = false;

function achievements() {
    score = sessionStorage.getItem("session");

    if (score == 100 && !newbieUnlocked) {
        alert("Achievement unlocked!\n\nNewbie");
        newbieUnlocked = true;
    } else if (score == 500 && !gettingThereUnlocked) {
        alert("Achievement unlocked!\n\nYou're getting there!");
        gettingThereUnlocked = true;
    } else if (score == 10000 && !climbingUnlocked) {
        alert("Achievement unlocked!\n\nYou're climbing the leaderboards!");
        climbingUnlocked = true;
    } else if (score == 69420 && !niceUnlocked) {
        alert("Achievement unlocked!\n\nNice!");
        niceUnlocked = true;
    } else if (score == 1000000 && !top1Unlocked) {
        alert("Achievement unlocked!\n\nYou're in the top 1% (I think)!");
        top1Unlocked = true;
    }
}

achievements();
setInterval(achievements, 20);



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