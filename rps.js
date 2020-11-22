
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


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
    const cpuWeapon = generateRandomSelection();
    if (userInput === 'rock' && cpuWeapon === 'paper') {
        win();
    // add a ternary in win() function outside of renderResults(). 
    // should say s/g like: IF userInput/Weapon === 'rock', display 'You win! Rock crushes Scissors!'
    // ELSE: 'You lose... Paper covers Rock :(' 
    } else if (userInput === 'rock' && cpuWeapon === 'scissors') {
        loss();
    } else if (userInput === 'paper' && cpuWeapon === 'scissors') {
        win();
    } else if (userInput === 'paper' && cpuWeapon === 'rock') {
        loss();
    } else if (userInput === 'scissors' && cpuWeapon === 'rock') {
        win();
    } else if (userInput === 'scissors' && cpuWeapon === 'paper') {
        loss();
    } else {
        tie();
    }
};

function generateRandomSelection()  {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const weaponsArray = ['rock', 'paper', 'scissors'];
    const cpuWeapon = weaponsArray[randomNumber - 1];




};










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

// STEP 6: Have score updated based on displayed outcome.

// STEP 7: If it's a tie, add 1 point to BOTH sides.

// STEP 8: On loading, nice pop-up explaining the history of the game.

// STEP 9: Add HTML such as "player", "computer", etc.

// STEP 10: Fix any loading delays.

// STEP 11: Fix up design.

// STEP 12: Tidy up code. Clean, refactor.

// STEP 13: Submit.