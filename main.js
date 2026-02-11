const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.querySelector('.number-display');
const historyList = document.getElementById('history-list');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
};

const displayNumber = (numbers) => {
    const numberSpans = numberDisplay.querySelectorAll('.number');
    numberSpans.forEach((span, i) => {
        span.textContent = numbers[i];
    });
};

const updateHistory = (numbers) => {
    const li = document.createElement('li');
    li.textContent = numbers.join(', ');
    historyList.prepend(li);
};

generateBtn.addEventListener('click', () => {
    const newNumbers = generateNumbers();
    displayNumber(newNumbers);
    updateHistory(newNumbers);
});