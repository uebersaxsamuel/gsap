document.addEventListener("DOMContentLoaded", function () {
  // Select each card individually
  const card1 = document.querySelector('[data-animation="card-1"]');
  const card2 = document.querySelector('[data-animation="card-2"]');
  const card3 = document.querySelector('[data-animation="card-3"]');
  const card4 = document.querySelector('[data-animation="card-4"]');
  const card5 = document.querySelector('[data-animation="card-5"]');
  const card6 = document.querySelector('[data-animation="card-6"]');
  const card7 = document.querySelector('[data-animation="card-7"]');
  const card8 = document.querySelector('[data-animation="card-8"]');
  const card9 = document.querySelector('[data-animation="card-9"]');
  const card10 = document.querySelector('[data-animation="card-10"]');
  const refreshButton = document.querySelector(
    '[data-animation="card-refresh"]'
  );

  // Add click event listeners for each card with different animations
  card1.addEventListener("click", function () {
    gsap.to(card1, {
      duration: 1,
      y: "-100vh", // Move 100 viewport height up
      x: "100vh",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card2.addEventListener("click", function () {
    gsap.to(card2, {
      duration: 1,
      x: "-100vw", // Move 100 viewport width to the left
      y: "100vw",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card3.addEventListener("click", function () {
    gsap.to(card3, {
      duration: 1,
      y: "100vh", // Move 100 viewport height down
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card4.addEventListener("click", function () {
    gsap.to(card4, {
      duration: 1,
      x: "100vh", // Move 100 viewport width to the right
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card5.addEventListener("click", function () {
    gsap.to(card5, {
      duration: 1,
      x: "100vh", // Move 100 viewport width to the right
      y: "100vw",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card6.addEventListener("click", function () {
    gsap.to(card6, {
      duration: 1,
      x: "-100vh", // Move 100 viewport width to the left
      y: "-100vw",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card7.addEventListener("click", function () {
    gsap.to(card7, {
      duration: 1,
      y: "-100vh", // Move 100 viewport height up
      x: "100vh",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card8.addEventListener("click", function () {
    gsap.to(card8, {
      duration: 1,
      x: "-100vw", // Move 100 viewport width to the left
      y: "100vw",
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card9.addEventListener("click", function () {
    gsap.to(card9, {
      duration: 1,
      y: "100vh", // Move 100 viewport height down
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  card10.addEventListener("click", function () {
    gsap.to(card10, {
      duration: 1,
      x: "100vh", // Move 100 viewport width to the right
      opacity: 0,
      ease: "power2.inOut",
    });
  });

  // Reset all animations when the refresh button is clicked
  refreshButton.addEventListener("click", function () {
    gsap.to([card1, card2, card3, card4, card5, card6], {
      duration: 0.5,
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
    });
  });
});
