const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const countdownDisplay = document.getElementById('countDownDisplay');

function startTimer(){
    let valueInSeconds = parseInt(timeInput.value);

    if(isNaN(valueInSeconds)){
        countdownDisplay.textContent = 'Please enter a valid number';
        return;
    }

    if(valueInSeconds <= 0){
        countdownDisplay.textContent = 'Please enter a number greater than 0';
        return;
    }

    const timer = setInterval(function(){
        valueInSeconds--;
        countdownDisplay.textContent = `Time Remaining: ${valueInSeconds} Seconds`;
    
        if(valueInSeconds <= 0){
            clearInterval(timer);
            countdownDisplay.textContent = 'Time is up! ⏰';
        }

    }, 1 * 1000);

    
}

startButton.addEventListener('click', startTimer);

//Extra Features to Add

//Clear input field after starting contdown timer
//Add sound when timer is stopped
//Add beatifull images and text on the main page and clearly describe the project 
//Create pause and resume function while the coundown is running.
