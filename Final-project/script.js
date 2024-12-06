
// TopLink Scroll effects
document.addEventListener("DOMContentLoaded", () => {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.getElementById("projects").offsetTop,
      behavior: "smooth",
    });
  });

  link3.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: document.getElementById("contact").offsetTop,
      behavior: "smooth",
    });
  });
});


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
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Define the next and previous movement functions
function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Add keyboard navigation
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        moveNext(); 
    } else if (event.key === 'ArrowLeft') {
        movePrev(); 
    }
});


//logo links

const logoLink = document.querySelector('#topBar a');

// Check if the current page is `mainpage.html`
if (window.location.pathname.includes('mainpage.html')) {
    // If on mainpage.html, make the logo smooth scroll to the top
    const logo = document.getElementById('logo');
    
    logo.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Scroll to the top of the page with smooth scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

//gsap effect on transition mainVision to profileDescription
gsap.registerPlugin(ScrollTrigger);

// Animate mainVision scaling out as it scrolls up
gsap.to("#mainVision", {
  scale: 0.8, // Shrink mainVision
  opacity: 0, // Fade out
  duration: 1,
  scrollTrigger: {
    trigger: "#mainVision", // Start the animation when mainVision enters the viewport
    start: "top center", // When the top of mainVision hits the center of the viewport
    end: "top 100px", // When the top of mainVision is 100px from the top
    scrub: true, // Smooth scrubbing effect
  },
});


// Animate profileDescription sliding in and fading in
gsap.from("#profileDescription", {
  x: 100, // Start slightly offscreen to the right
  opacity: 0, // Start transparent
  duration: 1,
  scrollTrigger: {
    trigger: "#profileDescription", // Start when profileDescription enters the viewport
    start: "top 80%", // Trigger animation when 80% of the viewport is above
    end: "top 50%", // End when 50% of the viewport is above
    scrub: true, // Smooth scrubbing effect
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top center", // Animation starts when #about reaches the center of the viewport
    end: "bottom center", // Animation ends when #about leaves the center
    scrub: 1, // Smooth scrubbing effect
    duration: 1,
  },
})
  .fromTo(
    "#mainVision",
    { opacity: 1, scale: 1 }, // Start fully visible and normal scale
    { opacity: 0, scale: 0.9, duration: 1 }
  )

