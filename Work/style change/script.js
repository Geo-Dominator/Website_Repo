const myQuote = document.getElementById('quote-text');
const myBtn = document.getElementById('curate-btn');

function styleArt(){
    myQuote.style.fontFamily = "cursive";
    myQuote.style.color = "darkred";
    myQuote.style.border = "4px solid black";
    myQuote.style.borderRadius = "4px";
    myQuote.style.padding = "20px";
}

myBtn.addEventListener('click', styleArt);