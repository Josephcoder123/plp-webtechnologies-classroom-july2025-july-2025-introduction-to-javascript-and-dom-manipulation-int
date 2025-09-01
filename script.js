// Part 1: Variable declarations and conditionals
document.getElementById('generateFlashcards').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    let output = '';

    if (userInput) {
        output = `Flashcard generated for the number: ${userInput}`;
    } else {
        output = 'Please enter a number.';
    }

    document.getElementById('output').innerText = output;
});

// Part 2: Custom functions
function calculateTotal(a, b) {
    return a + b;
}

document.getElementById('calculateTotal').addEventListener('click', function() {
    const total = calculateTotal(5, 10);
    document.getElementById('totalOutput').innerText = `Total: ${total}`;
});

// Part 3: Loop examples
document.getElementById('countdownButton').addEventListener('click', function() {
    let countdown = 5;
    const countdownOutput = document.getElementById('countdownOutput');
    countdownOutput.innerText = '';

    const interval = setInterval(function() {
        if (countdown > 0) {
            countdownOutput.innerText += countdown + ' ';
            countdown--;
        } else {
            clearInterval(interval);
            countdownOutput.innerText += 'Blast off!';
        }
    }, 1000);
});

// Part 4: DOM manipulation
document.getElementById('toggleText').addEventListener('click', function() {
    const toggleDiv = document.getElementById('toggleDiv');
    toggleDiv.style.display = toggleDiv.style.display === 'none' ? 'block' : 'none';
});
