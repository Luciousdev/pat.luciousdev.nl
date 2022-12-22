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