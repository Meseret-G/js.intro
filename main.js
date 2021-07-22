//const firstName = "Meseret"
//const lastName = "Gebre"
const favoriteFood = "steak";
//let favoriteNumber = 21;
//const likesToRead = true;
//console.log(typeof favoriteNumber);
//favoriteNumber = 25;
//favoriteNumber+= 3;
//favoriteNumber = favoriteNumber + 3;
//console.log(typeof favoriteFood);

if (favoriteFood === "hot dogs" || favoriteFood === "SUSHI") {
    console.log ("You like hot dogs!");

} else {
    console.log("You like something else");

}

const whatFoodDoIlike = () => {
    if (favoriteFood === "steak" || favoriteFood === "SUSHI") {
        console.log ("You like hot dogs!");
    
    } else {
        console.log("You like something else");
    
    }
}


    const myFunction = (number) => {
        console.log(`Your argument was: ${number + 1}`);
    }

    myFunction(33);