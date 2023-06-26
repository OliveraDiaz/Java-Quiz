var dash = document.querySelector("#dash");
var instructions = document.querySelector("#instructions");
var timeEl = document.querySelector("#timer");
var secondsLeft = 5;
// var quiz = document.querySelector("quiz")
// Instructions
document.getElementById('quest1').style.display = 'none';
document.getElementById('quest2').style.display = 'none';
document.getElementById('quest3').style.display = 'none';
document.getElementById('quest4').style.display = 'none';
document.getElementById('quest5').style.display = 'none';

// front page

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = ":" + secondsLeft + " remaining.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image+
        sendMessage();
      }
  
    }, 1000);
  }

// start quiz
start.addEventListener("click" , ()=>{
    instructions.style.display = "none"; 
    document.getElementById('quest1').style.display = 'block';
   setTime();
});


  