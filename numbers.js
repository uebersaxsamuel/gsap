document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const stepContainer = document.querySelector(
    '[data-animation="step-container"]'
  );
  const stepLine = stepContainer.querySelector('[data-animation="step-line"]');
  const stepEnd = stepContainer.querySelector('[data-animation="step-end"]');
  const stepItems = stepContainer.querySelectorAll(
    '[data-animation^="step-item-"]'
  );

  // Animate the step-line height based on the position of the step-end
  gsap.to(stepLine, {
    height: "100%", // Final height when the animation completes
    ease: "none", // Linear easing for a smooth scroll-based animation
    scrollTrigger: {
      trigger: stepContainer,
      start: "top 50%", // Start the animation when the top of step-container hits 50% of the viewport
      end: () =>
        `top ${
          stepEnd.getBoundingClientRect().top +
          window.scrollY -
          window.innerHeight / 2
        }px`, // End when step-end hits 50% of the viewport
      scrub: true, // Smoothly link the animation to the scroll progress
    },
  });

  // Animate each step-item's number text when it scrolls into view
  stepItems.forEach((stepItem) => {
    const stepNumber = stepItem.querySelector('[data-animation="step-number"]');
    const stepNumberText = stepNumber.querySelector(
      '[data-animation="step-number-text"]'
    );

    gsap.to(stepNumberText, {
      color: "var(--theme--text-alternate)", // Change text color
      scrollTrigger: {
        trigger: stepItem,
        start: "top 50%", // Trigger when the top of the element hits 50% of the viewport
        toggleActions: "play reverse play reverse",
      },
      duration: 0.3,
      ease: "power1.out",
    });

    gsap.to(stepNumber, {
      backgroundColor: "var(--theme--background-tertiary)", // Change background color
      borderColor: "var(--theme--border-blue)", // Change border color
      scrollTrigger: {
        trigger: stepItem,
        start: "top 50%", // Trigger when the top of the element hits 50% of the viewport
        toggleActions: "play reverse play reverse",
      },
      duration: 0.3,
      ease: "power1.out",
    });
  });
});
