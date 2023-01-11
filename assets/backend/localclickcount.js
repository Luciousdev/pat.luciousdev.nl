let clickMultiplier = localStorage.getItem("clickMultiplier") || 1;
document.getElementById("clickMultiplier").innerHTML = clickMultiplier;

function multiplier() {
    let multi = parseInt(localStorage.getItem("localPats"));
    let message = "Congratulations, your click multiplier has been set to ";
    let prevClickMultiplier = clickMultiplier;
    switch (true) {
        case multi >= 50000:
            localStorage.setItem("clickMultiplier", 5);
            clickMultiplier = 5;
            break;
        case multi >= 10000:
            localStorage.setItem("clickMultiplier", 4);
            clickMultiplier = 4;
            break;
        case multi >= 3000:
            localStorage.setItem("clickMultiplier", 3);
            clickMultiplier = 3;
            break;
        case multi >= 750:
            localStorage.setItem("clickMultiplier", 2);
            clickMultiplier = 2;
            break;
        default:
            clickMultiplier = 1;
            localStorage.setItem("clickMultiplier", 1);
    }
    if (prevClickMultiplier !== clickMultiplier) {
        alert(message + clickMultiplier + "!");
    }
    document.getElementById("clickMultiplier").innerHTML = clickMultiplier;
}

multiplier();


function localPats() {
    let totalClicked = parseInt(localStorage.getItem("localPats")) || 0;
    let clickImage = document.getElementById("clicker");
    clickImage.addEventListener("click", function() {
        totalClicked += parseInt(localStorage.getItem("clickMultiplier"));
        localStorage.setItem("localPats", totalClicked);
        multiplier();
    });
}

localPats();

function setLocalPats() {
    let totalSession = parseInt(localStorage.getItem("localPats")) || 0;
    document.getElementById("totalPats").innerHTML = totalSession;
}

setInterval(setLocalPats, 250);
setLocalPats();