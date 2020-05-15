// We're coding a black jack game, we need a game plan
// 1. Win condition
// To win we a player has to either hit 21, 
// or have a higher number then the other player, 
// or hit a number higher then 22
// 2. Deck Generator
// Deck has values of 2-A
// 2a. How would we represent that? 
// Since there are many values from 2-A we would store all this data in an array
// We need to account for J,Q,K, and Aces.
// J,Q,K = 10, Aces = 11
// Each value has 4 different suits
// 2b. How would we represent the data?
// The data needs to be represented in an array ["spades","hearts","diamonds","clubs"]
// we also need to generate a deck array to contain all our cards.
// Our cards would be objects with the card value representing the card # and the weight representing the card's mathematical value so we can use arithmetic to add the points.
// 2c. How would our cards object look like?
// cards = {value: cardValue, weight: weight}
// we then need to push our cards into our deck
// 3. Shuffle function
// for loop and loop it by 1000
// create 2 variables to represent 2 locations. Shuffling is essentially taking 1 location and replacing it with the second location
// first variable should contain first location, and first location should be random based on array length.
// second variable should contain second location, and second location should be random based on array's length.
// third variable would be a place to store the location 1 variable
// Next we need to put the cards back in, I.E.swap locations => location1 = location2, put the card back => location 2 = temp
// 4. Player Creation function
// We need to set up global variables, we need an array because we have more then 1 player
// We're going to have to write a function that creates the players. Each player is represented as an object.
// Our function should take in an argument that represent the number of players to be generated
// In our function we first have to loop through our array based off the argument.
// Once we loop our array we create a player object to be pushed intot he players array.
// We need to think of our player object and what it contains.
// First attribute in our object would be player's name.
// Second attribute in our object should be their id, ie. player 1 has id of 1, player 2 has id of 2.
// Third attribute in our object should be the player's hand
// Our third attribute has to be an array, therefore we need to make an empty array first, and then manipulate it afterwards.
// Fourth attribute should be points


// Tomorrow's Goals
// 1. Create the deck shuffle function
// 2. Create the player Creation function
// 3. Function to deal hand to players

const inquirer = require("inquirer");

let cardValue = ["2","3","4","5","6","7","8","9","10","j","q","k","a"];
let cardSuit = ["spades", "hearts", "diamonds", "clubs"];
let deck = [];
let playersArrs = [];
let isAce = false;

const initDeck = () => {
    // deck = new Array();
    for (let i = 0; i <cardValue.length; i++) {
        for (let j = 0; j < cardSuit.length; j++) {
            let weight = parseInt(cardValue[i])
            if (cardValue[i] == "j" || cardValue[i] == "q" || cardValue[i] == "k") {
                weight = 10;
            }
            if (cardValue[i] == "a") {
                weight = 11;
                isAce = true;
            }

            let cards = {
                value: cardValue[i],
                weight: weight
            }
            deck.push(cards);
        }
    }
    // console.log(deck);
}

const shuffle = () => {
    for (let i = 0; i < 1000; i++) {
        let location1 = Math.floor(Math.random() * deck.length);
        let location2 = Math.floor(Math.random() * deck.length);
        let temp = deck[location1];
        deck[location1] = deck[location2]
        deck[location2] = temp
    }
}

const playerCreation = number => {
    for (let i = 1; i <= number; i++) {
        let newHand = new Array();
        let playerObj = {
            name: "Player " + i,
            id: i,
            points: 0,
            hand: newHand
        };
        playersArrs.push(playerObj);
    }
}

// initDeck();
// shuffle();
playerCreation(10);
console.log(playersArrs);

