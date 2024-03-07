const minNumber = 1;
const maxNumber = 100;
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        setMessage('გთხოვთ გადაამოწმეთ, შეიყვანეთ რიცხვი 1-დან 100-მდე');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        setMessage(`გილოცავ! თქვენ სწორად გამოიცანით ${randomNumber} , ${attempts} ცდაში.`);
        setTimeout(resetGame, 3000);
    } else if (guess < randomNumber) {
        setMessage('კიდევ სცადეთ! ჩაფიქრებული რიცხვი უფრო მაღალია.');
    } else {
        setMessage('კიდევ სცადეთ! ჩაფიქრებული რიცხვი უფრო დაბალია.');
    }

    guessInput.value = '';
    guessInput.focus();
}

function setMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    setMessage('');
}
