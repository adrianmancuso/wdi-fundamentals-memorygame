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
//user if they were successful. Also publishes tally results to page
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay [1]) {
			var winPlay = confirm("You found a match! You win! Would you like to play again?");
			tally ++;
			document.getElementById('counter').textContent += tally;
		} else {
			var losePlay = confirm("Sorry, better luck next time. Would you like to play again?");
		}
		
		if (winPlay === true || losePlay === true) {
			playAgain();
		}
		
};

createBoard();

//function to toggle instructions
var toggleInstructions = function () {
	
	if ( document.getElementsByTagName('p')[0].classList.contains('instructions') )

		document.getElementsByTagName('p')[0].classList.toggle('hideInstructions');

	if ( document.getElementsByTagName('h2')[0].classList.contains('instructions') )

		document.getElementsByTagName('h2')[0].classList.toggle('hideInstructions');
};

document.getElementById('displayInstructions').addEventListener('click', toggleInstructions);

var tally = 0;

//reset images and play conditions if user opts to play again
var playAgain = function (){
	
	for (var i = 3; i >= 0; i--) {
	var board = document.getElementById('game-board');
	board.removeChild(board.childNodes[i]);
}
	createBoard();
};


//to implement: play again button, win counter (multiple games), timing of alert




