

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

  //Import GSAP library
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to("#projects",{
    duration:3,
    rotation:360,
    scrollTrigger:{
      trigger:"#projects",
      start: "top center",  
      end: "bottom center",
      markers: true,
      scrub: true
    }
  })


  gsap.to("#profilePic",{
    duration:3,
    rotation:360,
    scrollTrigger:{
      trigger:"#profilePic",
      start: "top center",  
      end: "bottom center",
      markers: true,
      scrub: true
    }
  })

 