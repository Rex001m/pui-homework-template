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
