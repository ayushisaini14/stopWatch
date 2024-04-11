let timerInterval;
let elapsedTime = 0;
let running = false;

//fetching elements
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//adding on click event listeners
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);


// reset button function
function startStopwatch() {
  if (!running) {
    running = true;

    //on start set interval
    timerInterval = setInterval(updateTimer, 1000);
  }
}

// reset button function
function stopStopwatch() {
  if (running) {
    running = false;

    //on stop clear interval
    clearInterval(timerInterval);
  }
}


// reset button function
function resetStopwatch() {
  stopStopwatch();
  elapsedTime = -1;
  updateTimer();
}

function updateTimer() {
  elapsedTime++;
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const formattedTime =
    formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  //setting timer inner text dynamically  
  document.getElementById("timer").innerText = formattedTime;
}


//function to format digits in desired format
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
