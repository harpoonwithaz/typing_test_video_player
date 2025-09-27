const modal = document.getElementById("typingTestModal");
const openBtn = document.getElementById("openModalButton");
const closeBtn = document.querySelector(".close");
const input = document.getElementById("typing-input");
const feedback = document.getElementById("feedback");
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

// When the modal opens
function openPopup() {
    // Make the modal appear
    modal.style.display = "block";
    
    // Chooses random quote for user to type
    const quote = getRandomQuote(quotes);
    typingText.textContent = "Finish typing: " + quote;
    
    // Typing check
    input.addEventListener("input", () => {
        if (input.value === quote) {
        feedback.style.color = "green";
        feedback.innerText = "Correct!";
        
        // Once user finishes, it automatically closes
        modal.style.display = "none";
        videoElement.play()

        } else {
        feedback.style.color = "red";
        feedback.innerText = "Keep typing...";
        }
    });
    input.value = "";
    feedback.innerText = "";
}


// Initiates the countdown
let countdownTimer;

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

