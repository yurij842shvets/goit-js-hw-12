const startGameButton = document.querySelector('.start-game');
const textFieldSuggestedKey = document.querySelector('.suggested-key');
const textFiledResult = document.querySelector('.result');
const resetGameButton = document.querySelector('.reset-game')

const keys = ['q', '3', '9', 'n', '+', 'g', 't', 'v', 'w', 'c'];
let currentKeyIndex = 0;

function getRandomIndex(index) {
    return Math.floor(Math.random() * index)
}

function handleStartClick() {
    setInterval(() => {
    console.log('interval');
    currentKeyIndex = getRandomIndex(keys.length)
    console.log(keys[currentKeyIndex]);
    }, 1000)
    textFieldSuggestedKey.textContent = keys[currentKeyIndex]       // Дз                 
}

startGameButton.addEventListener('click', handleStartClick)
