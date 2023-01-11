// Achievements


let newbieUnlocked = false;
let gettingThereUnlocked = false;
let climbingUnlocked = false;
let gold = false;
let platinum = false;
let niceUnlocked = false;
let top1Unlocked = false;

function achievements() {
    score = sessionStorage.getItem("session");

    switch (true) {
        case score == 100 && !newbieUnlocked:
            alert("Achievement unlocked!\n\nNewbie");
            newbieUnlocked = true;
            document.getElementById("copper").style.visibility = "visible";
            break;
        case score == 500 && !gettingThereUnlocked:
            alert("Achievement unlocked!\n\nYou're getting there!");
            gettingThereUnlocked = true;
            document.getElementById("bronze").style.visibility = "visible";
            break;
        case score == 2000 && !climbingUnlocked:
            alert("Achievement unlocked!\n\nYou're climbing the leaderboards!");
            climbingUnlocked = true;
            document.getElementById("silver").style.visibility = "visible";
            break;
        case score == 5000 && !gold:
            alert("Achievement unlocked!\n\nGood job!");
            gold = true;
            document.getElementById("gold").style.visibility = "visible";
            break;
        case score == 15000 && !platinum:
            alert("Achievement unlocked!\n\nGood job!");
            platinum = true;
            document.getElementById("platinum").style.visibility = "visible";
            break;
        case score == 69420 && !niceUnlocked:
            alert("Achievement unlocked!\n\nNice!");
            document.getElementById("emerald").style.visibility = "visible";
            niceUnlocked = true;
            break;
        case score == 1000000 && !top1Unlocked:
            alert("Achievement unlocked!\n\nYou're in the top 1% (I think)!");
            document.getElementById("diamond").style.visibility = "visible";
            top1Unlocked = true;
            break;
    }
}

achievements();
setInterval(achievements, 20);