const btn = document.getElementById("color-btn");
const bodyElement = document.body;

btn.addEventListener("click", ()=>{
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')){
        btn.textContent.textContent = 'Toggle Light Mode';
    } else {
        btn.textContent.textContent = 'Toggle Dark Mode';
    }
});