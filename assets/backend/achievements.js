// Achievements

function achievements() {
    let score = parseInt(localStorage.getItem("localPats")) || 0; // get the score from LocalStorage, if not exists set it to 0
    let newbieUnlocked = localStorage.getItem("newbieUnlocked") === "true";
    let gettingThereUnlocked = localStorage.getItem("gettingThereUnlocked") === "true";
    let climbingUnlocked = localStorage.getItem("climbingUnlocked") === "true";
    let gold = localStorage.getItem("gold") === "true";
    let platinum = localStorage.getItem("platinum") === "true";
    let niceUnlocked = localStorage.getItem("niceUnlocked") === "true";
    let diamondUnlocked = localStorage.getItem("diamondUnlocked") === "true";
    let top1Unlocked = localStorage.getItem("top1Unlocked") === "true";

    switch (true) {
        case score >= 10 && !newbieUnlocked:
            alert("Achievement unlocked!\n\nNewbie");
            localStorage.setItem("newbieUnlocked", "true");
            document.getElementById("copper").style.visibility = "visible";
            break;
        case score >= 50 && !gettingThereUnlocked:
            alert("Achievement unlocked!\n\nYou're getting there!");
            localStorage.setItem("gettingThereUnlocked", "true");
            document.getElementById("bronze").style.visibility = "visible";
            break;
        case score >= 2000 && !climbingUnlocked:
            alert("Achievement unlocked!\n\nYou're climbing the leaderboards!");
            localStorage.setItem("climbingUnlocked", "true");
            document.getElementById("silver").style.visibility = "visible";
            break;
        case score >= 5000 && !gold:
            alert("Achievement unlocked!\n\nGood job!");
            localStorage.setItem("gold", "true");
            document.getElementById("gold").style.visibility = "visible";
            break;
        case score >= 15000 && !platinum:
            alert("Achievement unlocked!\n\nGood job!");
            localStorage.setItem("platinum", "true");
            document.getElementById("platinum").style.visibility = "visible";
            break;
        case score >= 69420 && !niceUnlocked:
            alert("Achievement unlocked!\n\nNice!");
            localStorage.setItem("niceUnlocked", "true");
            document.getElementById("emerald").style.visibility = "visible";
            break;
        case score >= 120000 && !diamondUnlocked:
            alert("Achievement unlocked!\n\nCongrats, you're almost max rank!");
            localStorage.setItem("diamonUnlocked", "true");
            document.getElementById("diamond").style.visibility = "visible";
            break;
        case score >= 1000000 && !top1Unlocked:
            alert("Achievement unlocked!\n\nYou're in the top 1% (I think)!");
            localStorage.setItem("top1Unlocked", "true");
            document.getElementById("champion").style.visibility = "visible";
            break;
    }
    if (localStorage.getItem("newbieUnlocked") === "true") {
        document.getElementById("copper").style.visibility = "visible";
    }
    if (localStorage.getItem("gettingThereUnlocked") === "true") {
        document.getElementById("bronze").style.visibility = "visible";
    }
    if (localStorage.getItem("climbingUnlocked") === "true") {
        document.getElementById("silver").style.visibility = "visible";
    }
    if (localStorage.getItem("gold") === "true") {
        document.getElementById("gold").style.visibility = "visible";
    }
    if (localStorage.getItem("platinum") === "true") {
        document.getElementById("platinum").style.visibility = "visible";
    }
    if (localStorage.getItem("niceUnlocked") === "true") {
        document.getElementById("emerald").style.visibility = "visible";
    }
    if (localStorage.getItem("diamondUnlocked") === "true") {
        document.getElementById("diamond").style.visibility = "visible";
    }
    if (localStorage.getItem("top1Unlocked") === "true") {
        document.getElementById("champion").style.visibility = "visible";
    }
}

achievements();
setInterval(achievements, 20);