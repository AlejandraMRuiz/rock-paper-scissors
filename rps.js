
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resultsDisplay = document.getElementById('results-display');


rock.addEventListener('click', () => {
    renderResults('rock');
});

paper.addEventListener('click', () => {
    renderResults('paper');
});

scissors.addEventListener('click', () => {
    renderResults('scissors');
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







// window.addEventListener('DOMContentLoaded', () => {
//     const rock = document.getElementById('rock');
//     rock.addEventListener('click', function(event) {
//         event.stopPropagation();
//         renderResults('rock');
//     });
// });


// window.addEventListener('DOMContentLoaded', () => {
//     const paper = document.getElementById('paper');
//     paper.addEventListener('click', function(event) {
//         event.stopPropagation();
//         renderResults('paper');
//     });
// });


// window.addEventListener('DOMContentLoaded', () => {
//     const scissors = document.getElementById('scissors');
//     scissors.addEventListener('click', function(event) {
//         event.stopPropagation();
//         renderResults('scissors');
//     });
// });








// PROJECT PLAN:

// STEP 0: Add a background pic.
// DONE

// STEP 1: Add Home page text content.
// DONE

// STEP 2: Make Home page text readable.
// DONE

// STEP 3: Link to game page.
// DONE

// STEP 4: Add clickable 3 pics (R, P & S) that show hand on hover.
// DONE


// STEP 5: Have computer display outcome based on what was clicked (if statement).
// in progress...
// you should probably break this target down into its parts.


// STEP 6: Have score updated based on displayed outcome.

// STEP 7: If it's a tie, add 1 point to BOTH sides.

// STEP 8: On loading, nice pop-up explaining the history of the game.

// STEP 9: Add HTML such as "player", "computer", etc.

// STEP 10: Fix any loading delays.

// STEP 11: Fix up design.

// STEP 12: Tidy up code. Clean, refactor.

// STEP 13: Submit.