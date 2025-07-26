
// Hero animation
gsap.from(".logo", { duration: 1, scale: 0, ease: "bounce" });
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
gsap.from(".slogan", { duration: 1, y: 30, opacity: 0, delay: 0.8 });
gsap.to(".cta-btn", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut",
  delay: 1.5,
});

// Scroll animations for sections
gsap.utils.toArray(".about, .highlights, .register").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: section,
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
