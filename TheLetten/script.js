gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[data-gsap-visual='wrap']").forEach((wrapEl) => {
  const imageEl = wrapEl.querySelector("[data-gsap-visual='image']");

  // ScrollTrigger for the image (should repeat when scrolling)
  const scrollTriggerForImage = {
    trigger: wrapEl,
    start: "top 20%",
    end: "bottom 50%",
    markers: false,
  };

  // Animate [data-gsap-visual='image'] (Repeats when scrolling)
  if (imageEl) {
    gsap.fromTo(
      imageEl,
      { scale: 1.4 },
      {
        scale: 1,
        duration: 24,
        ease: "power2.out",
        scrollTrigger: {
          ...scrollTriggerForImage,
          toggleActions: "play reverse play reverse", // ✅ Image repeats on scroll up/down
        },
      }
    );
  }

  // Animate [data-gsap-visual='wrap'] (Plays once, never repeats)
  gsap.fromTo(
    wrapEl,
    { width: "80%", height: "80%" },
    {
      width: "100%",
      height: "100%",
      duration: 3,
      ease: "power2.out",
      autoRound: false,
      scrollTrigger: {
        ...scrollTriggerForImage,
        toggleActions: "play none none none", // ✅ Wrap plays once and never resets or repeats
        once: true, // Ensures it runs only once
      },
    }
  );
});
