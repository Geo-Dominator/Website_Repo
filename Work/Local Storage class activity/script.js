let currentImageUrl = "";

async function getInspiration() {
    try{
        const response = await
        fetch("https://picsum.photos/v2/list?page=2&limit=100");
        const data = await response.json();

        const randomNum = Math.floor(Math.random() * data.length);
        currentImageUrl = data[randomNum].download_url;

        const container = document.getElementById("image-container");
        container.innerHTML = `<img src="${currentImageUrl}" alt="Inspiration">`;

        document.getElementById("save-btn").style.display = "inline-block";
    } catch(error){
        console.error("Fucky-Wucky Detected!", error);
    }
}

function saveImage(){
    let myBoard = JSON.parse(localStorage.getItem("moodBoard")) || [];

    if(!myBoard.includes(currentImageUrl)){
        myBoard.push(currentImageUrl);
    }

    localStorage.setItem("moodBoard",JSON.stringify(myBoard));

    renderBoard();
}

function renderBoard(){
    const saveditemsDiv = document.getElementById("saved-items");
    let myBoard = JSON.parse(localStorage.getItem("moodBoard")) || [];

    saveditemsDiv.innerHTML = myBoard.map(url => `<img src="${url}" class="saved-thumb">`).join("");
}

document.getElementById("fetch-btn").addEventListener("click", getInspiration);
document.getElementById("save-btn").addEventListener("click", saveImage);
document.getElementById("clear-btn").addEventListener("click", () => {
    localStorage.removeItem("moodBoard");
    renderBoard();
});

renderBoard();