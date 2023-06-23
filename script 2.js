/////////////////////////////////////////////////////
// Fat Arrows
// TODO: Re-create the following function using the ES6 fat arrow syntax.

let powered2 = () => {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}
console.log(powered2());



/////////////////////////////////////////////////////
// Anonymous Functions
// TODO: Create an anonymous function that prints the square root of a number.
// Hint: Use the built-in JavaScript Math function, sqrt().

(function (x){
    console.log("Square Root of 4 is " + Math.sqrt(x))
})(4)


/////////////////////////////////////////////////////
// Default Parameters
// TODO: Create a function called player() and set up default parameters for the name, health, strength, and defense stats
// Hint: In the function, print out the player's name and stats.

function player(name = "Cheetah", health = 50, strength = 4, defense = 1){
    console.log("Welcome " + name + "!")
    console.log("Health: " + health)
    console.log("Strength: " + strength)
    console.log("Defense: " + defense)
}
player();

/////////////////////////////////////////////////////
// Destructuring Assignment
// TODO: Store the first 5 array values in separate variables and the remaining values in the "rest" variable.
function getCosine() {
    let values = []
    for (let i = 0; i < 10; i++) {
        let x = Math.cos(10);
        values.push(x);
    }

    // Add your code here
    let one, two, three, four, five, rest;
    [one, two, three, four, five, ...rest] = values;
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(five)
    console.log(rest)

}
getCosine();
