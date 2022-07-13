//1. Objects and functions

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person= {
    name: 'Valia',
    age: 25,
    country: 'Ukraine'
}

function logData(){
    console.log(person.name + ' is '+person.age+' years old and lives in '+person.country);
}

logData()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. if else else if
let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if( age < 6){
    console.log('free');
} else if (age <= 17){
    console.log('child discount');
} else if (age <= 26){
    console.log('student discount');
}else if (age <= 66){
    console.log('full price');
}else{
    console.log('senior citizen discount');
}

////////////////////////////////////////////////////////////////////////////////////////
// 3. Loops and arrays

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for (let i=0; i<largeCountries.length; i++){
    console.log(largeCountries[i]);
}
////////////////////////////////////////////////////////////////////////////////////
//4. push, pop, unshift, shift

let largeCountries1 = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries1.pop()
console.log(largeCountries1);
largeCountries1.push('Pakistan')
console.log(largeCountries1);

largeCountries1.shift()
console.log(largeCountries1);
largeCountries1.unshift('China')
console.log(largeCountries1);
//////////////////////////////////////////////////////////////////////////////////////////
//5. Logical operators

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 &&  weekday === "Friday" ){
    console.log('😱');
}

///////////////////////////////////////////////////////////////////////////////
//6. Rock papers scissors

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand (){
    let randonIndex = Math.floor( Math.random()*hands.length)
    return hands[randonIndex]
}

console.log(getHand());

/////////////////////////////////////////////////////////////////////////////////
//7. Sorting fruits
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i=0; i<fruit.length; i++){
        if (fruit[i]==="🍎"){
            appleShelf.textContent += "🍎"
        } else if (fruit[i]==="🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()