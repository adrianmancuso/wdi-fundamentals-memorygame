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



//function which logs cards in play to console
var flipCard = function () {
	
	var cardId = this.getAttribute('data-id');

	console.log("User flipped a " + cards[cardId].rank);
	console.log("The suit is " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch ();
	}
};

//function to create game board
var createBoard = function () {
	for (var i = 0; i <cards.length; i++){
		
		var cardElement = document.createElement('img');

		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement)[i];
	}
};

//function which checks for matching cards and alerts
//user if they were successful
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay [1]) {
			alert("You found a match! You win!");
		} else {
			alert("Sorry, try again :(");
		}
};

createBoard();

//function to display instructions
var toggleInstructions = function () {
	document.getElementsByTagName('p')[0].removeAttribute('class', 'hideInstructions');
	document.getElementsByTagName('h2')[0].removeAttribute('class', 'hideInstructions');
};

document.getElementById('displayInstructions').addEventListener('click', toggleInstructions);




