const artGallery = [
    {title:"Ocean Sunset", type: "Painting"},
    {title:"Neon City", type: "Digital"},
    {title:"Forest Mist", type: "Painting"},
    {title:"Cyberpunk", type: "Digital"},
    {title:"Monalisa", type: "Painting"},
    {title:"Dystopia", type: "Digital"},
    {title:"The Last Supper", type: "Painting"},
    {title:"Lost Arcade", type: "Digital"},
];

function filterArt(category){
    const display = document.getElementById('art-display');
    display.innerHTML = "";

    for(let i=0; i < artGallery.length; i++){
        let currentItem = artGallery[i];

        if(category === "all" || currentItem.type === category){
            let label = "";

            switch (currentItem.type){
                case "Painting":
                    label = "🎨 Traditional Canvas";
                    break;
                case "Digital":
                    label = "💻 Digital Illustrations";
                    break;
                default:
                    label = "✨ Medium Unknown";
            }
            display.innerHTML += `<div class="art-item"><strong>${currentItem.title}</strong> - ${label}</div>`;
        }
    }
}

filterArt("all");
