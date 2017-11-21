var cards = ["queen","queen","king","king"];
var cardInPlay = [];

var checkForMatch = function(){
	if (cardInPlay[0] === cardInPlay[1]){
		alert("you found a match!");
	} else {
		alert("sorry,try again.");
	}
};

var flipCard =function(cardId){
	var flippedCard = cards[cardId];

	cardInPlay.push(flippedCard);

	console.log("User flipped " + flippedCard);
	checkForMatch();
};

flipCard(0);
flipCard(2);
