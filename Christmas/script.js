// Ensure GSAP and ScrollTrigger plugin are registered
gsap.registerPlugin(ScrollTrigger);

// Set initial visibility for all sections
document.querySelectorAll('[data-animation^="section"]').forEach((section) => {
  gsap.set(section, { display: "block" });
});

// Loop through each trigger and animate corresponding elements
gsap.utils.toArray('[data-animation^="trigger-"]').forEach((trigger, index) => {
  const section = document.querySelector(
    `[data-animation="section-${index + 1}"]`
  );

  // Step 1: Hide section based on triggers
  gsap.to(section, {
    display: "none", // Hide section when trigger scrolls into viewport
    scrollTrigger: {
      trigger: trigger,
      start: "bottom top", // When bottom of trigger reaches the top of the viewport
      end: "bottom top", // Keep the section hidden while trigger is within the viewport
      scrub: true,
      markers: false, // Set to true for debugging
      onEnter: () => gsap.set(section, { display: "none" }),
      onLeaveBack: () => gsap.set(section, { display: "block" }),
    },
  });
});

for (let i = 1; i <= 5; i++) {
  gsap.fromTo(
    `[data-animation="text-${i}"]`,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: `[data-animation="trigger-${i}"]`,
        start: "top top", // Animation starts when the trigger hits the top of the viewport
        toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
        markers: false, // Set to true for debugging
      },
    }
  );
}

for (let i = 1; i <= 5; i++) {
  gsap.fromTo(
    `[data-animation="scale-${i}"]`,
    { scale: 1 }, // Initial scale
    {
      scale: 2, // Final scale
      ease: "none", // Linear scaling synchronized with scroll
      scrollTrigger: {
        trigger: `[data-animation="trigger-${i}"]`,
        start: "top top", // Start when the top of the trigger hits the top of the viewport
        end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
        scrub: true, // Smooth synchronization with scrolling
        markers: false, // Set to true for debugging
      },
    }
  );
}
