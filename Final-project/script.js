
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

// Animate mainVision
gsap.to("#mainVision", {
  scale: 0.8, 
  opacity: 0, 
  duration: 1,
  scrollTrigger: {
    trigger: "#mainVision", 
    start: "top center", 
    end: "top 100px", 
    scrub: true, 
  },
});


// Animate profileDescription
gsap.from("#profileDescription", {
  x: 100, 
  opacity: 0, 
  duration: 1,
  scrollTrigger: {
    trigger: "#profileDescription", 
    start: "top 80%", 
    end: "top 50%",
    scrub: true, 
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top center", 
    end: "bottom center", 
    scrub: 1,
    duration: 1,
  },
})
  .fromTo(
    "#mainVision",
    { opacity: 1, scale: 1 }, 
    { opacity: 0, scale: 0.9, duration: 1 }
  )

// Add ScrollTrigger between About and Project
gsap.registerPlugin(ScrollTrigger);

// Animate the section items
const animateProjects = () => {
  gsap.fromTo(
    "#projects .item",
    {
      opacity: 0, 
      scale: 0.5, 
      x: () => Math.random() * 100 - 50, 
      y: () => Math.random() * 100 - 50, 
    },
    {
      opacity: 1,
      scale: 1, 
      x: 0, 
      y: 0, 
      duration: 1.5, 
      stagger: 0.2, 
      ease: "power3.out", 
      clearProps: "all", 
    }
  );
};

ScrollTrigger.create({
  trigger: "#projects", 
  start: "top center", 
  onEnter: animateProjects, 
  onLeaveBack: animateProjects, 
});


//Cube Animation
document.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector("#contact .cube");

  if (cube) {
    // Rotation animation
    gsap.to(cube, {
      duration: 6,
      rotateX: 360,
      rotateY: 360,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Floating animation
    gsap.to(cube, {
      duration: 2,
      y: "-=20",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }
});

