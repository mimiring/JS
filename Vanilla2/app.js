const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

ctx.fillstrokeStyle = "#2c2c2c";
ctx.lineWidth = 1;

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

function onMouseDown(event) {
    painting = true;
}



if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}