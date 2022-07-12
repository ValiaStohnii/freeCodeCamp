let player = {
    name: 'Valia',
    chips: 188
}
let cards = []
let sum = 0
let hasBlackJack = false
let isActive = true
let message = ' '

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
//let sumEl = document.querySelector('#sum-el') //for id
//let sumEl = document.querySelector('.sum-el') //for class
//let sumEl = document.querySelector('body') // for tag

playerEl.textContent = player.name +': $ ' + player.chips

function getRandomCard(){     // function declaration
    let random = Math.floor(Math.random() * 13) + 1
    if(random === 1){
        return 11
    } else if (random >10){
        return 10
    }
    return random
}

function startGame() {
    isActive = true;
    let firsrCrad = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firsrCrad, secondCard]
    sum = firsrCrad + secondCard
    renderGame()
}

function renderGame (){
    // cardsEl.textContent = 'Cards: ' + firsrCrad +' ' + secondCard
    // cardsEl.textContent = 'Cards: '+ cards
    cardsEl.textContent = 'Cards: '
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent= 'Sum: '+sum
    if (sum <= 20){
        message ='Do  you want to draw a new card?';
    } else if( sum === 21){
        message ="You've got Blackjack!";
        hasBlackJack = true
    } else {
        message ="You're out of the game!";
        isActive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isActive===true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame ()
    }
}

console.log(hasBlackJack);
console.log(isActive)

////////////////////////////////////////////////////////////////////

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

/////////////////////////////////////////////////////////////
// let age = 21

// if (age < 21){
//     console.log('You can not enter the club!');
// } else {
//     console.log("Welcome!");
// }

//////////////////////////////////////////////////////////

// let age1 = 100

// if( age1 < 100){
//     console.log('not eligible');
// } else if (age1 === 100){
//     console.log('Here is your birthday card from the King');
// } else{
//     console.log('not elegible, you have already gotten one');
// }

///////////////////////////////////////////////////////////

// Arrays - ordered lists of items

// let featuredPosts = [
//     "Check out my Netflix clone",         // index = 0
//     "Here's the code for my project",     // index = 1
//     "I've just relaunched my portfolio"   // index = 2
// ]

// // indexed 0 - ...

// let experience = [
//     "CEO at Scrimba", 
//     "Frontend developer at Xeneta", 
//     "People counter for Norstat"
// ]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let myself = [
//     'Stohnii Valia',
//     25,
//     true
// ]

// Adding and removing items from arrays

// let card =[7, 4]

// //card - object  push - method  (6)-path
// card.push(6)
// console.log(card);

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages);

// // To remove the last item
// messages.pop()
// console.log(messages);

/////////////////////////////////////////////////////////

//Counting in JavaScript

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10
// for ( let count = 10;  count < 21;  count += 2 )  {
    
//     console.log(count)

// }
// // 10
// // 12
// // 14
// // 16
// // 18
// // 20

// let cards1 = [7, 3, 9]

// // Create a for loop that logs out all the cards in the array
// // Use cards.length to specify how long the loop should ru
// for (let i=0; i<cards1.length; i++){
//     console.log(cards1[i]);
// }

// // 7
// // 3
// // 9

/////////////////////////////////////////////////////////////////////
//For loops, arrays, and DOM

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i=0; i<sentence.length; i++){
//     greetingEl.textContent = sentence[i]
// }
// Per

// for (let i=0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i]
// }
// Hello my name is Per
//?????????????????????????????????????????????????????
// let sentence1 = ["Hello", "my", "name", "is", "Per"] 
// for (let i=0; i<sentence1.length; i++){
//     greetingEl.textContent += sentence1[i] + ' '
// }
// Hello my name is Per

//////////////////////////////////////////////////////////////////////////////////
//Returning values in functions

// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out
// function getTotalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime);

///////////////////////////////////////////////////////////////////////////
//Math.random(), Math.floor()

//let randomNumber = Math.random()        // 0.0000 -> 0.9999
//let randomNumber1 = Math.random() * 6   // 0.0000 -> 5.9999

// let flooredNumber = Math.floor(3.45632)  // 3 is removes the decimals
// console.log(flooredNumber);

//let random = Math.floor(Math.random() * 6)  // 0,1,2,3,4,5 in random order
//let random1 = Math.floor(Math.random() * 6) + 1  // 1,2,3,4,5,6 in random order

// function rollDice(){
//     let random1 = Math.floor(Math.random() * 6) + 1
//     return random1
// }

//////////////////////////////////////////////////////////////////
//The logical AND operator

// let hasCompletedCourse = true
// let givesCertificate = true

// // if (hasCompletedCourse === true) {
// //     if (givesCertificate === true) {
// //         generateCertificate()
// //     }
// // }
// //                ampersant = and
// if (hasCompletedCourse && givesCertificate) {
//     generateCertificate()
// }
    
// function generateCertificate() {
//     console.log("Generating certificate....")
// }
//...............................................................
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// // Create an if statement that checks that both variables are false.
// // If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }
////////////////////////////////////////////////////////////////////////////
//The logical OR operator

// let hasCompletedCourse = false
// let givesCertificate = true

//
// //                    OR statement
// if (hasCompletedCourse || givesCertificate) {
//     generateCertificate()
// }
    
// function generateCertificate() {
//     console.log("Generating certificate....")
// }

////////////////////////////////////////////////////////////////////////////////////
//Intro to objects


// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
///     key          value 

//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }


// console.log( course.tags )