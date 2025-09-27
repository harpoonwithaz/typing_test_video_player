const videoEl = document.getElementById("video");
const testEl = document.getElementById("test-container");

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

// Run function
typingTest();
