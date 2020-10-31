document.addEventListener('DOMContentLoaded', () => {

	//card options
	const cardArray = [
		{
			name: 'icon-1',
			img: 'img/icon-1.png'
		},
		{
			name: 'icon-1',
			img: 'img/icon-1.png'
		},
		{
			name: 'icon-2',
			img: 'img/icon-2.png'
		},
		{
			name: 'icon-2',
			img: 'img/icon-2.png'
		},
		{
			name: 'icon-3',
			img: 'img/icon-3.png'
		},
		{
			name: 'icon-3',
			img: 'img/icon-3.png'
		},
		{
			name: 'icon-4',
			img: 'img/icon-4.png'
		},
		{
			name: 'icon-4',
			img: 'img/icon-4.png'
		},
		{
			name: 'icon-5',
			img: 'img/icon-5.png'
		},
		{
			name: 'icon-5',
			img: 'img/icon-5.png'
		},
		{
			name: 'icon-6',
			img: 'img/icon-6.png'
		},
		{
			name: 'icon-6',
			img: 'img/icon-6.png'
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	//create your board
	const grid = document.querySelector('.grid');
	var resultDisplay = document.querySelector('#result');
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];


	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'img/blank.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if(cardsChosen[0] === cardsChosen[1]) {
			alert('You found the match');
			cards[optionOneId].setAttribute('src', 'img/transparent.png');
			cards[optionTwoId].setAttribute('src', 'img/transparent.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'img/blank.png');
			cards[optionTwoId].setAttribute('src', 'img/blank.png');
			alert('Sorry try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = "Congratulations, you won!";
		}
	}
	//flip your card
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if(cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});