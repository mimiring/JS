const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const mode = document.getElementById("jsMode");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange")
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#191914";
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
canvas.lineWidth = 1;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
ctx.fillstrokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

function preventDefault(event) {
    event.preventDefault();
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", preventDefault);
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors).forEach(item => item.addEventListener("click", handleColorClick));

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

function handleRangeClick(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(range) {
    range.addEventListener("input", handleRangeClick);
} 

function handleSaveClick(event) {
    const image = canvas.toDataURL();
    const link = document.createElement("a");

    link.href = image;
    link.download = "catchmind_img";
    link.click();
}

if(save) {
    save.addEventListener("click", handleSaveClick);
}