var cards = [
	{rank:"queen", cardImage:"images/queen-of-diamonds.png",suit:"diamonds", },
	{rank:"queen",cardImage:"images/queen-of-hearts.png",suit:"hearts",},
	{rank:"king",cardImage:"images/king-of-diamonds.png",suit:"diamonds",},
	{rank:"king",cardImage:"images/king-of-hearts.png",suit:"hearts",}
];
var cardInPlay = [];

var checkForMatch = function(){
	if (cardInPlay[0] === cardInPlay[1]){
		alert("you found a match!");
	} else {
		alert("sorry,try again.");
	}
};

var flipCard =function(){
	var cardId = this.getAttribute('dataId');
	var flippedCard = cards[cardId];

	cardInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage) ;

	console.log(cards[cardId].suit);
	checkForMatch();
};

var createBoard = function() {
	for(i=0; i<4; i++){ 
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png") ;
		cardElement.setAttribute('dataId', i );
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click',  flipCard );
	}
}


createBoard();
