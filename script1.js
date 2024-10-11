const patternLock = document.getElementById('patternLock');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitPattern');

let currentPattern = [];
const patterns = {
    '1,0,2,3': 'content.html', // First correct pattern
    '8,1,2,4': 'yy.html' // Second correct pattern
};

function createGrid() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.innerText = i; // Display the index for clarity

        cell.addEventListener('click', () => addToPattern(i));

        patternLock.appendChild(cell);
    }
}

function addToPattern(index) {
    console.log(`Cell ${index} clicked`);
    const cell = patternLock.children[index];
    if (!currentPattern.includes(index)) {
        currentPattern.push(index);
        cell.classList.add('active');
        console.log(`Current pattern: ${currentPattern}`);
    } else {
        console.log(`Cell ${index} already included.`);
    }
}

function resetPattern() {
    console.log('Resetting pattern');
    currentPattern = [];
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.remove('active'));
}

submitButton.addEventListener('click', () => {
    const patternKey = currentPattern.join(',');
    console.log(`Submitted pattern: ${patternKey}`);
    
    if (patterns[patternKey]) {
        console.log('Pattern is correct, redirecting...');
        window.location.href = patterns[patternKey];
    } else {
        message.textContent = 'Pattern is incorrect. Try again.';
        message.style.color = 'red';
        resetPattern();
    }
});

// Initialize the grid
createGrid();
