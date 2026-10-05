/* let temp = 30;
if (temp > 25){
    console.log ("It's a hot day today!");
}

let age = 16;
if (age >= 18){
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
}

let score = 85;
if(score >= 90){
    console.log("A Grade");
} else if(score >=80){
    console.log("B Grade");
} else if(score >=70){
    console.log("C Grade");
} else {
    console.log("F Grade: Student Failed");
}

let isHungry = true;
let hasMoney = false;
if(isHungry){
    console.log("You want to eat");
    if(hasMoney){("Go to a restaurat");
    } else {
        console.log("Shame you're a broke bitch")
    }
} */

let age = 25;
let hasParent = false;
let heightInInches = 52;
if (age < 3){
    console.log("Infants get a free stuffed animal");
}

if (age >= 18){
    console.log("Ticket Price $100 (ADULT)");
} else if (age >= 13){
    console.log("Ticket Price $75 (TEEN)");
} else {
    console.log("Ticket Price $50 (CHILD)");
}

if (heightInInches >=48){
    console.log("Height Check Passed");

    if(hasParent === true){
        console.log("Status: Ready for the Roller Coaster!")
    } else{
        console.log("Height is ok, but need parents to ride")
    }
}else {
    console.log("Status: Too short to ride")
}
