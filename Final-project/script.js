// Check if the current URL matches the target URL
if (window.location.href.endsWith('index.html')) {
  console.log(window.location.href)

  // Function to simulate the loading progress
  let currentProgress = 0;
  let loadingText = document.getElementById("loading-text");
  let loadingScreen = document.getElementById("loading-screen");
  let startIcon = document.getElementById("startIcon");

  // Function loading screen
  function updateLoadingScreen() {
    if (currentProgress <= 100) {
      loadingText.textContent = currentProgress + "%";
      currentProgress++;
    } else {
      // Hide loading screen and show the main content
      loadingScreen.style.display = "none";
      startIcon.style.display = "block";
    }
  }
  //Update speed
  let loadingInterval = setInterval(updateLoadingScreen, 20);
}
//Import GSAP library
