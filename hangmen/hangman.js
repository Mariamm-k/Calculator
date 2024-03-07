const words = ["ველოსიპედი", "კარუსელი", "გვირილა", "ვარსკვლავი", "ჰარმონია"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = '';
let attemptsLeft = 10;
let guessedLetters = [];

function setupGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = '_'.repeat(selectedWord.length);
    attemptsLeft = 6;
    guessedLetters = [];

    updateDisplay();
}

function guessLetter() {
    const guessInput = document.getElementById('guessInput').value.toLowerCase();

    if (!/^[ა-ჰ]$/.test(guessInput)) {
        setMessage('გთხოვთ შეიყვანოთ ქართულად, მხოლოდ 1 ასო');
        return;
    }

    if (guessedLetters.includes(guessInput)) {
        setMessage('უკვე გამოიცანი ეს ასო');
        return;
    }

    guessedLetters.push(guessInput);

    if (selectedWord.includes(guessInput)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === guessInput) {
                guessedWord = guessedWord.substring(0, i) + guessInput + guessedWord.substring(i + 1);
            }
        }
    } else {
        attemptsLeft--;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('wordDisplay').textContent = guessedWord;
    document.getElementById('დარჩენილი ცდების რაოდენობა:').textContent = `დარჩენილი ცდების რაოდენობა: ${attemptsLeft}`;
    document.getElementById('message').textContent = '';

    if (guessedWord === selectedWord) {
        setMessage('გილოცავთ! სიტყვა სწორად გამოიცანით');
    } else if (attemptsLeft <= 0) {
        setMessage(`თქვენ ამოგეწურათ ცდების რაოდენობა. სწორი სიტყვა: ${selectedWord}`);
    }

    document.getElementById('guessInput').value = '';
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}

function resetGame() {
    setupGame();
}

setupGame();
