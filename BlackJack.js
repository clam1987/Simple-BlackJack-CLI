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


// Tomorrow's Goals
// 1. Create the deck shuffle function
// 2. Create the player Creation function
// 3. Function to deal hand to players

const inquirer = require("inquirer");

let cardValue = ["2","3","4","5","6","7","8","9","10","j","q","k","a"];
let cardSuit = ["spades", "hearts", "diamonds", "clubs"];
let deck = [];
let isAce = false;

const initDeck = () => {
    deck = new Array();
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
    console.log(deck);
}

initDeck();