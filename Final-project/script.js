// script.js

// Function to simulate the loading progress
let currentProgress = 0;
let loadingText = document.getElementById("loading-text");
let loadingScreen = document.getElementById("loading-screen");
let mainContent = document.getElementById("main-content");

// Function to update the loading screen
function updateLoadingScreen() {
  if (currentProgress <= 100) {
    loadingText.textContent = currentProgress + "%";
    currentProgress++;
  } else {
    // Hide loading screen and show the main content
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }
}

// Call the updateLoadingScreen function every 50ms to simulate loading progress
let loadingInterval = setInterval(updateLoadingScreen, 50);
