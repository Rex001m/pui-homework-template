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


// Hover interaction for profileDescription
const profileDescription = document.getElementById("profileDescription");

profileDescription.addEventListener("mouseenter", () => {
  gsap.to("#profileDescription > *", {
    scale: 1.05,
    color: "#ac8958",
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
  });
});

profileDescription.addEventListener("mouseleave", () => {
  gsap.to("#profileDescription > *", {
    scale: 1,
    color: "#333",
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
  });
});

// Hover animation using GSAP
mainVision.addEventListener("mouseenter", () => {
  gsap.to(mainVision, {
    scale: 1.2, 
    duration: 0.3, 
    ease: "power2.out" 
  });
});

mainVision.addEventListener("mouseleave", () => {
  gsap.to(mainVision, {
    scale: 1, 
    duration: 0.3,
    ease: "power2.in"
  });
});


//Project gallery effect//
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})