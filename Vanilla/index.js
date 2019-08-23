const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

let r = 0;
let g = 0;
let b = 0;

function handleClick() {
    title.style.color = `rgb(${r},${g},${b})`;
    r += 10;
    g += 10;
    b += 10;
}


title.addEventListener("click", handleClick);