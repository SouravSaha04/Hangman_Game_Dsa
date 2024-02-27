document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll('.key');
    const inputField = document.getElementById('inputField');
    const backspaceKey = document.getElementById('backspace');
    const incorrectGuessDisplay = document.querySelector('.incorrect');
    const hangmanImage = document.querySelector('.hangman img');
    const enterButton = document.getElementById('Enter');

    let incorrectGuesses = 0;

    // Function to update the hangman image
    function updateHangmanImage() {
        hangmanImage.src = `hangman/${incorrectGuesses + 1}.png`;
    }

    // Function to reload the page with a new random question
    function reloadPage() {
        window.location.reload();
    }

    // Function to generate a random question
    function generateRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        questionDisplay.textContent = questions[randomIndex].question;
        inputField.dataset.answer = questions[randomIndex].answer.toLowerCase();
    }

    // Call the function to generate a random question when the page loads
    generateRandomQuestion();

    // Event listener for keyboard keys
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.textContent;
            inputField.value += keyValue;
        });
    });

    // Event listener for the backspace key
    backspaceKey.addEventListener('click', () => {
        if (inputField.value.length > 0) {
            inputField.value = inputField.value.slice(0, -1);
        }
    });

    // Event listener for the Enter button
    enterButton.addEventListener('click', function() {
        const inputAnswer = inputField.value.trim().toLowerCase();
        const correctAnswer = inputField.dataset.answer;

        if (inputAnswer === correctAnswer) {
            alert("You are correct!");
            reloadPage();
        } else {
            incorrectGuesses++;
            incorrectGuessDisplay.textContent = `${incorrectGuesses}/7`;
            updateHangmanImage();
            if (incorrectGuesses === 7) {
                alert("You lost!");
                reloadPage();
            }
        }
    });
});


