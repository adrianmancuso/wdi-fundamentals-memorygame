//basic test for functionality
console.log("Up and running!");

//global variables
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//function which checks for matching cards and alerts
//user if they were successful
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay [1]) {
			alert("You found a match! You win!");
		} else {
			alert("Sorry, try again :(");
		}
}

//function which logs cards in play to console
var flipCard = function (cardId) {
	console.log("User flipped a " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch ();
	}
}

flipCard(0);
flipCard(2);
