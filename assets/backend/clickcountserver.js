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