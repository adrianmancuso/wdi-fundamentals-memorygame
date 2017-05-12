//basic test for functionality
console.log("Up and running!");

//global variables
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];
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
	console.log("User flipped a " + cards[cardId].rank);
	console.log("The suit is " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch ();
	}
}

flipCard(0);
flipCard(2);
