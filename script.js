const themeToggle = document.getElementById('theme-toggle');
const themeToggleSpan = document.getElementById('theme-toggle-front');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
const lightText = 'light';
const darkText = 'dark';

// Set the initial theme based on local storage or default to light theme
if (currentTheme) {
    themeToggleSpan.innerHTML = currentTheme === 'dark-theme' ? lightText : darkText;
    body.classList.add(currentTheme);
} else {
    themeToggleSpan.innerHTML = lightText;
    body.classList.add('light-theme');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        themeToggleSpan.innerHTML = lightText;
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        themeToggleSpan.innerHTML = darkText;
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
    console.log('themeToggleSpan', themeToggleSpan)
});


const decisionButton = document.querySelector('.decision-button');
const chosenOption = document.querySelector('.chosen-option');
const decisionDisplay = document.querySelector('.decision-display');
console.log(decisionDisplay)
decisionButton.addEventListener('click', () => {
    const choice1 = document.querySelector('input[placeholder="Choice 1"]').value;
    const choice2 = document.querySelector('input[placeholder="Choice 2"]').value;

    // Randomly select one of the choices
    const randomChoice = Math.random() < 0.5 ? choice1 : choice2;
    console.log(randomChoice)
    if(randomChoice.length > 0) {
        chosenOption.classList.add('show')
        decisionDisplay.style.display = 'block';    
        // Display the chosen option
        chosenOption.textContent = randomChoice;
    }

});


const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    const choice1 = document.querySelector('input[placeholder="Choice 1"]')
    choice1.innerHTML = "";
    choice1.value = "";
    const choice2 = document.querySelector('input[placeholder="Choice 2"]')
    choice2.innerHTML = "";
    choice2.value = "";
    document.querySelector('.chosen-option').innerHTML = "";
    decisionDisplay.style.display = 'none';
    chosenOption.classList.remove('show')
});