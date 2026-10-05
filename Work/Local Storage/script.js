// localStorage.setItem("theme","dark-mode");
// let savedTheme = localStorage.getItem("theme");
// console.log("The saved theme is: " + savedTheme)

// const favorites = ["Midnight Sun", "Neon Rain"];
// localStorage.setItem("myFavorites",JSON.stringify(favorites));
// let data = localStorage.getItem("myFavorites");
// let parsedData = JSON.parse(data);

// console.log(parsedData[0]);

// fetch("https://bored-api.appbrewery.com/random")
//     .then((response) => response.json())
//     .then((data) => {console.log("Try this: " + data.activity);
//     });

async function loadArt() {
    try{
        let response = await
        fetch("https://api.artic.edu/api/v1/artwork/search?q=cats");
        let result = await response.json();

        result.data.forEach((item) => {
            console.log("Art Piece found: " + item.title)
        });
    } catch (error) {
        console.log("U done fucked up dumbass! Error: " + error)
    }
}
loadArt();