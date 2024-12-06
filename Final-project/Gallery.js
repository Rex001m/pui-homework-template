const galleryItems = document.querySelectorAll('.gallery-item');
const overviewItems = document.querySelectorAll('.overview-item');
const totalImages = galleryItems.length;
const currentIndexDisplay = document.getElementById('currentIndex');
const totalImagesDisplay = document.getElementById('totalImages');
let currentIndex = 0;
let isScrolling = false; // Lock to prevent overscrolling

// Initialize the total number of images
totalImagesDisplay.textContent = totalImages;

// Function to update visible image and the indicator
function updateGallery(index) {
    galleryItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
            item.classList.remove('hidden');
        } else {
            item.classList.remove('active');
            item.classList.add('hidden');
        }
    });

    // Update the current index display
    currentIndexDisplay.textContent = index + 1; // +1 to make it human-readable
}

// Scroll handler
window.addEventListener('wheel', (event) => {
    if (isScrolling) return; // Prevent multiple scrolls during animation
    isScrolling = true;

    if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % totalImages;
    } else if (event.deltaY < 0) {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    // Update gallery
    updateGallery(currentIndex);
    setTimeout(() => {
        isScrolling = false;
    }, 800); 
});

// Click handler for overview items (preview images)
overviewItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateGallery(currentIndex);
    });
});

updateGallery(currentIndex);

// Keyboard handler for arrow keys
window.addEventListener('keydown', (event) => {
    if (isScrolling) return; // Prevent multiple key presses during animation

    if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % totalImages;
    } else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    updateGallery(currentIndex);
});

