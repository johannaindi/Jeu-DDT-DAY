document.addEventListener('DOMContentLoaded', () => {
    const wordGrid = document.getElementById('word-grid');
    const inputWord = document.getElementById('input-word');
    const submitWord = document.getElementById('submit-word');
    const message = document.getElementById('message');
    
    const targetWord = "INNOVATION"; // Mot cible à deviner

    function createRow(word, result) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let i = 0; i < word.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');
            cell.textContent = word[i];
            if (result[i] === 'correct') {
                cell.style.backgroundColor = 'green';
            } else if (result[i] === 'present') {
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = 'red';
            }
            row.appendChild(cell);
        }
        wordGrid.appendChild(row);
    }

    function checkWord() {
        const word = inputWord.value.toUpperCase();
        const result = [];

        for (let i = 0; i < word.length; i++) {
            if (i < targetWord.length && word[i] === targetWord[i]) {
                result.push('correct');
            } else if (targetWord.includes(word[i])) {
                result.push('present');
            } else {
                result.push('absent');
            }
        }

        createRow(word, result);

        if (word === targetWord) {
            message.textContent = "Félicitations ! Vous avez trouvé le mot.";
            submitWord.disabled = true;
        } else {
            message.textContent = "Essayez encore !";
        }

        inputWord.value = '';
    }

    submitWord.addEventListener('click', checkWord);
    inputWord.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            checkWord();
        }
    });
});
