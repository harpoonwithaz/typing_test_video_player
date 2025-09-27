
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the element that closes the modal
var closeIcon = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
typingTest();
}

// When the user clicks on (x), close the modal
closeIcon.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

// The video element
const videoEl = document.getElementById("video");

setTimeout(() => {
  videoEl.play();
}, 2000);

setTimeout(() => {
  videoEl.pause();
  const newDiv = document.createElement("div");
  newDiv.textContent = "This is my new div";
  testEl.appendChild(newDiv);
}, 4000);


function typingTest() {
    // Create a list of phrases that are typed
    const quotes = [
        "Who-a eata my spaghett.",
        "JOHN PORK is in the house today!",
        "Capuccina ballerina, tung tung tung sahur.",
        "Skibidi bum bum bum yes yes.",
        "My favourite Roblox game is grow a garden.",
        "Bonjour mon ami, tu es magnifique."
    ];

    // Allow for the random selection of the text in a list
    console.log("Type out the prescribed sentence.\n");
    const startTime = Date.now();

    while (true) {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        
        console.log(quote);
        const wpmStartTime = Date.now();

        const userInput = prompt("Type the sentence above:");

        const wordCount = test.trim().split(/\s+/).length;

        if (userInput === quote) {
            const endTime = Date.now();
            const wpmTime = (endTime - wpmStartTime) / 60000;
            const spentTime = (endTime - startTime) / 1000;
            const wpm = wordCount / wpmTime;

            console.log("Excellent, the video may progress.");
            console.log("You spent " + Math.round(spentTime) + " seconds.");
            console.log("Your WPM was: " + Math.round(wpm) + ".");
            break;
        } else {
            console.log("\nTry again\n");
        }
    }
}

const openModalBtn = document.getElementById("myBtn");

if (openModalBtn) {
  openModalBtn.addEventListener("click", typingTest);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
