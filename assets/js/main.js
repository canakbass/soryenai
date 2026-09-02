/* --- SORYEN AI CINEMATIC JS --- */
gsap.registerPlugin(ScrollTrigger);

// 1. Preloader Sequence
const tlPreload = gsap.timeline();
tlPreload.to('.preloader-logo', { opacity: 1, duration: 1, ease: "power2.inOut" })
         .to('.preloader-progress', { width: "100%", duration: 1.5, ease: "power4.inOut" })
         .to('.preloader', { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
         .fromTo('#site-header', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
         .fromTo('#h-eye', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
         .fromTo('#h-title', { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }, "-=0.6")
         .fromTo('#h-lead', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");

// 2. Horizontal Scroll
const track = document.getElementById("horiz-track");
if (track) {
  const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 100);
  
  gsap.to(track, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: ".horiz-scene",
      start: "top top",
      end: () => `+=${track.scrollWidth}`,
      pin: true,
      animation: gsap.to(track, { x: getScrollAmount, ease: "none" }),
      scrub: 1,
      invalidateOnRefresh: true
    }
  });
}

// 3. Spotlight Text Reveal
gsap.to(".spotlight-text", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".spotlight-scene",
    start: "top center",
    end: "center center",
    scrub: true,
    onEnter: () => gsap.to(".spotlight-desc", {opacity: 1, y: -20, duration: 1}),
    onLeaveBack: () => gsap.to(".spotlight-desc", {opacity: 0, y: 0, duration: 0.5})
  }
});

// 4. Stacking Cards
const stackCards = gsap.utils.toArray('.s-card');
if (stackCards.length > 0) {
  gsap.set(stackCards, { y: 200, opacity: 0, scale: 0.8 });
  
  ScrollTrigger.create({
    trigger: ".stack-scene",
    start: "top top",
    end: "+=2000",
    pin: true,
    animation: gsap.to(stackCards, {
      y: 0,
      opacity: 1,
      scale: (i) => 1 - (stackCards.length - 1 - i) * 0.05,
      stagger: 0.5,
      ease: "power2.out"
    }),
    scrub: 1
  });
}

// Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

