# Stopwatch

This is a simple stopwatch project implemented using HTML and JavaScript. The stopwatch has the following functionalities:

1. Start Timer: Clicking the "Start" button starts the timer. If the timer is already running, clicking the "Start" button again will continue the timer from where it left off.

2. Stop Timer: Clicking the "Stop" button stops the timer.

3. Reset Timer: Clicking the "Reset" button stops the timer (if it's running) and resets the timer to 00:00:00.

## How to Use

1. Open the `index.html` file in a web browser.

2. Click the "Start" button to start the timer.

3. Click the "Stop" button to stop the timer.

4. Click the "Reset" button to reset the timer to 00:00:00.

## Files

- `index.html`: HTML file containing the structure of the stopwatch interface.
- `script.js`: JavaScript file containing code for stopwatch functionality.
- `style.css`: CSS file containing styling.

## Code Structure

The JavaScript file consists of the following functions:

- `startStopwatch()`: Starts the stopwatch timer.
- `stopStopwatch()`: Stops the stopwatch timer.
- `resetStopwatch()`: Resets the stopwatch timer to 00:00:00.
- `updateTimer()`: Updates the display of the stopwatch timer.
- `formatTime(time)`: Formats the time values to ensure leading zeros for single-digit numbers.


