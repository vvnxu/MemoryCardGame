var cards = [
	{name:"queen", rank:1,cardImage:"images/queen-of-diamonds.png",suit:"diamonds", },
	{name:"queen",rank:2,cardImage:"images/queen-of-hearts.png",suit:"hearts",},
	{name:"king",rank:3,cardImage:"images/king-of-diamonds.png",suit:"diamonds",},
	{name:"king",rank:4,cardImage:"images/king-of-hearts.png",suit:"hearts",}
];
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

	cardInPlay.push(cards[cardId].name);

	console.log("User flipped " + cards[cardId].name);
	console.log(cards[cardId].cardImage); console.log(cards[cardId].suit);
	checkForMatch();
};

flipCard(1);
flipCard(3);
