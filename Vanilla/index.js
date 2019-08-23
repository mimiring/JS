const title = document.querySelector("#title");

const BASE_COLOR = "rgb(50, 200, 50)";
const OTHER_COLOR = "lightblue";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline() {
    console.log("어? 와파 꺼짐");
}
function handleOnline() {
    console.log("와파는 짜릿해 무료는 최고야");
}


window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);