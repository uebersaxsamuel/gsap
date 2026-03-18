gsap.registerPlugin(ScrollTrigger);

// Function to hide all gallery-text elements only for screens 768px and above
function hideAllText() {
  if (window.innerWidth >= 768) {
    gsap.to(".gallery-text", { opacity: 0, duration: 0.3 });
  }
}

// Function to create ScrollTriggers (only for screens 768px and above)
function createScrollTriggers() {
  if (window.innerWidth >= 768) {
    // ScrollTrigger for gallery-image-1
    ScrollTrigger.create({
      trigger: '[data-animation="gallery-image-1"]',
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-1"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeave: () => {
        gsap.to('[data-animation="gallery-text-1"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when the image scrolls out
      },
      onEnterBack: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-1"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeaveBack: () => {
        gsap.to('[data-animation="gallery-text-1"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when scrolling back up
      },
    });

    // ScrollTrigger for gallery-image-2
    ScrollTrigger.create({
      trigger: '[data-animation="gallery-image-2"]',
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-2"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeave: () => {
        gsap.to('[data-animation="gallery-text-2"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when the image scrolls out
      },
      onEnterBack: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-2"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeaveBack: () => {
        gsap.to('[data-animation="gallery-text-2"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when scrolling back up
      },
    });

    // ScrollTrigger for gallery-image-3
    ScrollTrigger.create({
      trigger: '[data-animation="gallery-image-3"]',
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-3"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeave: () => {
        gsap.to('[data-animation="gallery-text-3"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when the image scrolls out
      },
      onEnterBack: () => {
        hideAllText(); // Hide all text only for screens 768px and above
        gsap.to('[data-animation="gallery-text-3"]', {
          opacity: 1,
          duration: 0.3,
        }); // Show text for this image
      },
      onLeaveBack: () => {
        gsap.to('[data-animation="gallery-text-3"]', {
          opacity: 0,
          duration: 0.2,
        }); // Hide text when scrolling back up
      },
    });
  }
}

// Initial trigger creation based on current screen size
createScrollTriggers();

// Update ScrollTriggers on resize
window.addEventListener("resize", () => {
  // Clear existing ScrollTriggers
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // Recreate ScrollTriggers based on new screen size
  if (window.innerWidth >= 768) {
    createScrollTriggers();
  } else {
    // Optional: For screens below 768px, ensure all text is visible
    gsap.set(".gallery-text", { opacity: 1 });
  }
});
