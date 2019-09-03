const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
//캔버스의 2D context 타입을 얻기 위해 선언
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");
const range = document.getElementById("jsRange");
const save = document.getElementById("jsSave")

const INITIAL_COLOR = "#191914";
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 500;


canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//canvas가 동작할 사이즈를 지정해줘야 함
ctx.fillStyle = "white"; 
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//지정해줘야 그림바탕이 투명하지 않음
ctx.fillstrokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 1; //canvas에 그려지는 선 굵기 지정

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        //마우스의 위치에서 패스 시작
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        //시작~종료 지점을 선으로 연결하고 획을 그음
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor; //누른 대상의 배경색을 가져옴
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function hadleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        //사각형모양으로 채움(x축시작, y축시작, 너비, 높이)
    }
}

function handleCM(event) {
    event.preventDefault();
}

if(canvas) { //canvas가 있으면 아래 내용 동작
    canvas.addEventListener("mousemove", onMouseMove); //마우스 포인터가 이동할 때 동작
    canvas.addEventListener("mousedown", startPainting); //마우스를 누를 때 동작
    canvas.addEventListener("mouseup", stopPainting); //마우스를 뗄 때 동작
    canvas.addEventListener("mouseleave", stopPainting); //마우스가 요소에서 떠날 때 동작
    canvas.addEventListener("click", hadleCanvasClick); 
    canvas.addEventListener("contextmenu", handleCM); //마우스 오른쪽 버튼 누를 때 동작
}

Array.from(colors).forEach(item => item.addEventListener("click", handleColorClick));
//각각의 color를 배열로 받아서 forEach로 이벤트를 각각 넣어줌

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = "채우기";
    } else {
        filling = true;
        mode.innerText = "그리기";
    }
    //토글동작
}

if(mode) {
    mode.addEventListener("click", handleModeClick);
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(range) {
    range.addEventListener("input", handleRangeChange);
}

function handleSaveBtn(event) {
    const image = canvas.toDataURL("image/png"); //현재 그려진 그림을 URL Data로 받음
    const link = document.createElement("a");
    link.href = image;
    link.download = "Michi_Mind_IMG"; //URL로 가는 대신 설정한 이름으로 download하게 함
    link.click(); //click해도 동작하지 않게 함. fake처리
}

if(save) {
    save.addEventListener("click", handleSaveBtn);
}
