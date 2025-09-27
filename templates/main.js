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