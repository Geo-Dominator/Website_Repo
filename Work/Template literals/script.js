// let artistName = "Logan"
// let favColor = "Hot Pink"
// let workYear = "2026"

// const intro = `I'm ${artistName}. In ${workYear}, I fell in love with the color ${favColor}`

// console.log(intro)



// const student = {
//     name: "Elena",
//     major: "Graphic Design",
//     year: "Senior"
// };

// const profileContainter = document.querySelector("#profile");

// document.body.innerHTML = `
// <div class="card">
//     <h3>${student.name}</h3>
//     <p>Major: ${student.major}</p>
//     <p>Class of: ${student.year}</p>
//     </div>`
    


// const featuredArt = {
//     title: "Abstract Flow",
//     price: 450,
//     avaliable: false
// };

// const display = `
// <section>
//     <h2>Featured: ${featuredArt.title}</h2>
//     <p>Price: $${featuredArt.price}</p>
//     <button>${featuredArt.avaliable ?"Buy Now":"Sold Out"}</button>
//     </section>
//     `;
//     document.body.innerHTML = display;




// const myFavBook = {
//     Title:"The Hobbit",
//     Author:"JRR Tolkien",
//     Pages:320,
// }

// const display = `
// <section>
//     <h1>My Favorite Book: ${myFavBook.Title}</h1>
//      <p>By: ${myFavBook.Author}</p>
//      <p>Pages: ${myFavBook.Pages}</p>
//      </section>
//      `;
//     document.body.innerHTML = display;



const paintings = [
    {title: "Red Sky", artist: "Maya"},
    {title: "Blue Sea", artist: "Julian"},
    {title: "Green Hills", artist: "Elena"}
];
const main = document.querySelector("main");
for(let i = 0; i < paintings.length; i++){
    const main = `
    <div class = "gallery-item">
        <h4>${paintings[i].title}</h4>
        <p>By ${paintings[i].artist}</p>
    </div>`;
}

document.body.innerHTML = main