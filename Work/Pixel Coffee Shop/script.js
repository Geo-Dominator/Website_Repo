const menuItems = [
    {id:1, name: "Java Chip", price: 5.50, type: "drink"},
    {id:2, name: "Python Pastry", price: 3.75, type: "food"},
    {id:3, name: "C++ Cappuccino", price: 4.5, type: "drink"},
    {id:4, name: "Binary Bagel", price: 4.0, type: "food"},
]
async function getDailySpecial(){
    try{
        const response = await
        fetch("https://www.boredapi.com/api/activity");
        if(!response.ok) throw new Error("NetworkFailed");

        const data = await response.json();
        const banner = document.querySelector("#api-banner");

        banner.innerHTML = `<span>FLASH DEAL: get a discount if you ${data.activity}!</span>`;
    }catch(err){
        console.error("Fetch Error: ", err);
        document.querySelector("#api-banner").innerHTML = "Welcome to the Pixel Perk!"
    }
}

function renderMenu(filter = "all"){
    const grid = document.querySelector("#menu-grid");
    grid.innerHTML = "";

    for(let i = 0; i<menuItems.length; i++){
        const item = menuItems[i];

        if(filter === "all" || item.type === filter){
            let categoryIcon = "";
            switch (item.type){
                case "drink": categoryIcon = "☕️"; break
                case "food": categoryIcon = "🥯"; break
                default: categoryIcon = "⁇";
            }
            grid.innerHTML += `
            <div class="menu-card">
                <h3>${categoryIcon} ${item.name}</h3>
                <p class="price-tag">$${item.price.toFixed(2)}<p>
                <button onclick="saveToFavs('${item.name}')">Save as Favorite</button>
            </div>
        `;
        }
    }
}

function savedToFavs(itemName){
    let currentFavs = JSON.parse(localStorage.getItem("coffeeFavs")) || [];

    if(!currentFavs.includes(itemName)){
        currentFavs.push(itemName)
    }
    localStorage.setItem("coffeeFavs", JSON.stringify(currentFavs));
    displayFavs();
}
function displayFavs(){
    const listDiv = document.querySelector("#fav-list");
    const saved = JSON.parse(localStorage.getItem("coffeeFavs")) || [];

    listDiv.innerHTML = saved.map((name) => `<span> [${name}]</span>`).join("");
}

document.querySelector("#clear-favs").addEventListener("click", () =>{
    localStorage.removeItem("coffeeFavs");
    displayFavs();
});

getDailySpecial();
renderMenu();
displayFavs();

window.filterMenu = renderMenu;