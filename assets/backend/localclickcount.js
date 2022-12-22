let totalClicked = localStorage.getItem("localpats");
if (totalClicked === null) {
    totalClicked = 0;
}
let click = false;

function session() {
    localStorage.getItem("localpats");

    let clickImage = document.getElementById("clicker");
    clickImage.addEventListener("click", debounce(function() {
        click = true;
        totalClicked += 1;
        localStorage.setItem("localpats", totalClicked);
    }, 200));

    if (click) {
        localStorage.setItem("localpats", totalClicked);
    }
}
session();

function setLocal() {
    let totalLocal = localStorage.getItem("localpats");
    document.getElementById("totalPats").innerHTML = totalLocal;
}
setInterval(setLocal, 250);
setLocal();

function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}