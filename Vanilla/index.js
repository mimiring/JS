console.log("I'm JS. I'm working. I'm Beautiful. I'm work it!");

const title = document.querySelector("#title");

function handleClick() {
    title.style.color = "green";
}

title.addEventListener("click", handleClick);