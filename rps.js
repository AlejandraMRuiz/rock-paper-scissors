
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


window.addEventListener("DOMContentLoaded", () => {
    const timeFormatBtn = document.getElementById("button");
    timeFormatBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      is24HourTime = !is24HourTime;
    });  
  });


// commented code (rps.js:47-57) produces...
// 'Uncaught ReferenceError: results not defined at renderResults (rps.js:83)
// at HTMLImageElement.<annonymous> (rps.js:42)'


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


// rock.addEventListener('click', () => {
//     renderResults('rock');
// });

// paper.addEventListener('click', () => {
//     renderResults('paper');
// });

// scissors.addEventListener('click', () => {
//     renderResults('scissors');
// });


function renderResults(userWeapon) {
    const userInput = userWeapon;
    const cpuWeapon = generateRandomWeapon();

    if (userInput === 'rock' && cpuWeapon === 'paper') {
        results-display.textContent === 'You lose :( Paper covers Rock...';

    } else if (userInput === 'rock' && cpuWeapon === 'scissors') {
        results-display.textContent === 'You win! Rock crushes Scissors!';

    } else if (userInput === 'paper' && cpuWeapon === 'scissors') {
        results-display.textContent === 'You lose :( Scissors cuts Paper...';

    } else if (userInput === 'paper' && cpuWeapon === 'rock') {
        results-display.textContent === 'You win! Paper covers Rock!';

    } else if (userInput === 'scissors' && cpuWeapon === 'rock') {
        results-display.textContent === 'You lose :( Rock crushes Scissors...';

    } else if (userInput === 'scissors' && cpuWeapon === 'paper') {
        results-display.textContent === 'You win! Scissors cuts Paper!';

    } else {
        results-display.textContent === 'You tied! One point for each side :)';
    }
};


function generateRandomWeapon()  {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const weaponsArray = ['rock', 'paper', 'scissors'];
    const cpuWeapon = weaponsArray[randomNumber - 1];
    return cpuWeapon;
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
// you should probably break this target down into its parts.


// STEP 6: Have score updated based on displayed outcome.

// STEP 7: If it's a tie, add 1 point to BOTH sides.

// STEP 8: On loading, nice pop-up explaining the history of the game.

// STEP 9: Add HTML such as "player", "computer", etc.

// STEP 10: Fix any loading delays.

// STEP 11: Fix up design.

// STEP 12: Tidy up code. Clean, refactor.

// STEP 13: Submit.