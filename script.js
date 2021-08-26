document.addEventListener('DOMContentLoaded', () => {
    //cards
    const cards = [
        {
            name: 'red',
            img: 'images/red.svg'
        },
        {
            name: 'red',
            img: 'images/red.svg'
        },
        {
            name: 'orange',
            img: 'images/orange.svg'
        },
        {
            name: 'orange',
            img: 'images/orange.svg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.svg'
        },
        {
            name: 'yellow',
            img: 'images/yellow.svg'
        },
        {
            name: 'green',
            img: 'images/green.svg'
        },
        {
            name: 'green',
            img: 'images/green.svg'
        },
        {
            name: 'blue',
            img: 'images/blue.svg'
        },
        {
            name: 'blue',
            img: 'images/blue.svg'
        },
        {
            name: 'violet',
            img: 'images/violet.svg'
        },
        {
            name: 'violet',
            img: 'images/violet.svg'
        },
        {
            name: 'grey',
            img: 'images/grey.svg'
        },
        {
            name: 'grey',
            img: 'images/grey.svg'
        },
        {
            name: 'black',
            img: 'images/black.svg'
        },
        {
            name: 'black',
            img: 'images/black.svg'
        },
    ]

    cards.sort(() => 0.5 - Math.random());

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //board
    const grid = document.querySelector('.grid');

    //score
    const resultDisplay = document.querySelector('#result');

    //create board
    function createBoard() {
        for(let i = 0; i < cards.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.svg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        const closeAlertTimer = () => {
            if (document.querySelector('.match').style.display = 'flex') {
                document.querySelector('.match').style.display = 'none';
            }
            if (document.querySelector('.wrong').style.display = 'flex') {
                document.querySelector('.wrong').style.display = 'none'
            }
        }
        var matches = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            matches[optionOneId].style.visibility = 'hidden';
            matches[optionTwoId].style.visibility = 'hidden';
            document.querySelector('.match').style.display = 'flex';
            setTimeout(closeAlertTimer, 500);
            cardsWon.push(cardsChosen);
        } else if (cardsChosen[0] !== cardsChosen[1]) {
            matches[optionOneId].setAttribute('src', 'images/blank.svg');
            matches[optionTwoId].setAttribute('src', 'images/blank.svg');
            document.querySelector('.wrong').style.display = 'flex';
            setTimeout(closeAlertTimer, 500);
        }
        else {
            document.querySelector('.error').style.display = 'flex';
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cards.length/2) {
            resultDisplay.textContent = 'Congrats! You won!';
            document.querySelector('.match').style.display = 'none';
            document.querySelector('.refresh').style.display = 'flex';
        }
        //close alert
        const closeAlert = () => {
            document.querySelector('.wrong').style.display = 'none';
            document.querySelector('.match').style.display = 'none';
            document.querySelector('.error').style.display = 'none';
        }

        document.querySelectorAll('.close').forEach(close => close.addEventListener('click', closeAlert));

        //refresh to play again
        const refreshGame = () => {
            location.reload();   
        }
        document.querySelector('.refresh').addEventListener('click', refreshGame);
    }

    //flip the card
    function flipCard() {
        var cardId = this.getAttribute("data-id");
        if (cardsChosenId.includes(cardId) === false) {
            cardsChosen.push(cards[cardId].name);
            cardsChosenId.push(cardId);
        }
        this.setAttribute('src', cards[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
    }

    createBoard();

})
