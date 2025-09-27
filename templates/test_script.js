const modal = document.getElementById("typingTestModal");
const openBtn = document.getElementById("openModalButton");
const closeBtn = document.querySelector(".close");
const input = document.getElementById("typing-input");
const wpmElement = document.getElementById("WPM");
const feedbackElement = document.getElementById("feedback")
const typingText = document.getElementById("typingText");

const videoElement = document.getElementById("video");

// List of random quotes for user to type
const quotes = [
    "Who-a eata my spaghett.",
    "JOHN PORK is in the house today!",
    "Capuccina ballerina, tung tung tung sahur.",
    "Skibidi bum bum bum yes yes.",
    "My favourite Roblox game is grow a garden.",
    "Bonjour mon ami, tu es magnifique."
];

// Function to choose random quote
function getRandomQuote(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
}

function calculateWPM(text, timeElapsed){
    const words = text.trim().split(/\s+/).length;
    const minutes = timeElapsed / 60000; // Converts from ms to minutes
    return Math.round(words/minutes)
}

// When the modal opens
function openPopup() {
    // Make the modal appear
    modal.style.display = "block";
    
    // Chooses random quote for user to type
    const quote = getRandomQuote(quotes);
    typingText.textContent = "Finish typing: " + quote;
    
    feedbackElement.innerText = "Start typing...";
    feedbackElement.style.color = "black";

    // Typing check
    input.addEventListener("input", () => {
        // Start timer on first keystroke
        if (!isTestRunning && input.value.length > 0) {
            startTime = new Date();
            isTestRunning = true; // Starts WPM test
        }

        if (input.value === quote) {
            const elapsed = new Date() - startTime; // Calculates start time
            const wpm = calculateWPM(quote, elapsed) // Calculates WPM based on start time and amount of words

            wpmElement.style.color = "green";
            wpmElement.innerText = "Correct! Your WPM was ${wpm}";
            
            // Once user finishes, it automatically closes
            modal.style.display = "none";
            videoElement.play()

        } else {
            feedbackElement.innerText = "Incorrect";
            feedbackElement.style.color = "red";
            if (isTestRunning) {
                const elapsed = new Date() - startTime;
                const wpm = calculateWPM(input.value, elapsed);
                wpmElement.style.color = "blue";
                wpmElement.innerText = `WPM: ${wpm}`;
            } else {
                
            }
        }
    });
    input.value = "";
    wpmElement.innerText = "";
}


// Initiates the countdown
let countdownTimer;

let startTime = null;
let isTestRunning = false; // Variable for storing of the WPM test is running

// 1. Listen for video play
videoElement.addEventListener("play", () => {
    console.log("Video started. Countdown begins...");
    clearTimeout(countdownTimer); // clear previous timers
    countdownTimer = setTimeout(() => {
    videoElement.pause(); // pause video at 5s

    // Opens the popup after 5 seconds
    openPopup();
    }, 5000);
});

// 
openBtn.onclick = function() {
    openPopup();
}

// When the user clicks on (x), close the modal
closeBtn.onclick = function() {
modal.style.display = "none";
}

