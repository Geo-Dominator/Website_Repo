const btn = document.getElementById("color-btn");
function changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const newColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.backgroundColor = newColor;
}

btn.addEventListener("click", changeColor);