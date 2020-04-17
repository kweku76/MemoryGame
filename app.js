document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [{
      name: 'cake',
      img: 'images/cake.png'
    },
    {
      name: 'cake',
      img: 'images/cake.png'
    },
    {
      name: 'watermelon',
      img: 'images/watermelon.png'
    },
    {
      name: 'watermelon',
      img: 'images/watermelon.png'
    },
    {
      name: 'chicken',
      img: 'images/chicken.png'
    },
    {
      name: 'chicken',
      img: 'images/chicken.png'
    },
    {
      name: 'egg',
      img: 'images/egg.png'
    },
    {
      name: 'egg',
      img: 'images/egg.png'
    },
    {
      name: 'carrot',
      img: 'images/carrot.png'
    },
    {
      name: 'carrot',
      img: 'images/carrot.png'
    },
    {
      name: 'cherry',
      img: 'images/cherry.png'
    },
    {
      name: 'cherry',
      img: 'images/cherry.png'
    },
    {
      name: 'cupcake',
      img: 'images/cupcake.png'
    },
    {
      name: 'cupcake',
      img: 'images/cupcake.png'
    },
    {
      name: 'burger',
      img: 'images/burger.png'
    },
    {
      name: 'burger',
      img: 'images/burger.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];


  //create your board
  function createBoard() { //using a for loop we loop through each card array
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img'); //..creating an image element for each card
      card.setAttribute('src', 'images/blank.png'); //we set an image attribute 
      card.setAttribute('data-id', i); //giving each card a data id looping from 0 to 11
      card.addEventListener('click', flipCard); //we add an event listener to listen for click and invoke a flipcard function
      grid.appendChild(card);
    }
  }
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again!')

    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations dude! You found them ALL!';
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
})