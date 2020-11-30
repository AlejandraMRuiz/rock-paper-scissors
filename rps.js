
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resultsDisplay = document.getElementById('results-display');


window.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    rock.addEventListener('click', function(event) {
        event.stopPropagation();
        renderResults('rock');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const paper = document.getElementById('paper');
    paper.addEventListener('click', function(event) {
        event.stopPropagation();
        renderResults('paper');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function(event) {
        event.stopPropagation();
        renderResults('scissors');
    });
});


function renderResults(userWeapon) {
    const userInput = userWeapon;
    const cpuWeapon = generateRandomWeapon();

    if (userInput === 'rock' && cpuWeapon === 'paper') {
        resultsDisplay.textContent = 'You lose :( Paper covers Rock...';

    } else if (userInput === 'rock' && cpuWeapon === 'scissors') {
        resultsDisplay.textContent = 'You win! Rock crushes Scissors!';

    } else if (userInput === 'paper' && cpuWeapon === 'scissors') {
        resultsDisplay.textContent = 'You lose :( Scissors cuts Paper...';

    } else if (userInput === 'paper' && cpuWeapon === 'rock') {
        resultsDisplay.textContent = 'You win! Paper covers Rock!';

    } else if (userInput === 'scissors' && cpuWeapon === 'rock') {
        resultsDisplay.textContent = 'You lose :( Rock crushes Scissors...';

    } else if (userInput === 'scissors' && cpuWeapon === 'paper') {
        resultsDisplay.textContent = 'You win! Scissors cuts Paper!';

    } else {
        resultsDisplay.textContent = 'You tied! One point for each side :)';
    }
};


function generateRandomWeapon()  {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const weaponsArray = ['rock', 'paper', 'scissors'];
    const cpuWeapon = weaponsArray[randomNumber - 1];
    return cpuWeapon;
    console.log(cpuWeapon);
// why is my console.log shadowed out and saying 'unreachable code detected'??
};






// PROJECT PLAN:

// STEP 0: Add a background pic.
// DONE

// STEP 1: Add Home page text content (game history).
// DONE

// STEP 2: Make Home page text readable.
// DONE

// STEP 3: Link to game page.
// DONE

// STEP 4: Add clickable 3 pics (R, P & S) that show hand on hover.
// DONE

// STEP 5: Have computer display outcome based on what was clicked (if statement).
// DONE


// STEP 6: Have image selections of both sides appear below main images & above results-display text. 
// in progress...


// STEP 7: Address question: lines 68-69.

// STEP 8: Have a green border appear around the winning weapon; red border for the losing weapon.

// STEP 9: Have a scoreboard for "player" vs "computer" updated based on results-display text.

// STEP 10: If it's a tie, add 1 point to BOTH sides.

// STEP 11: Get "restart game" button working.

// STEP 12: Fix any loading delays.

// STEP 13: Fix up design.

// STEP 14: Tidy up code (includes global vars review, and if only used locally, convert). 
// Clean, refactor as needed.

// STEP 15: Submit.