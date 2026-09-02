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


// 5. Cinematic Reveals for New Content
const revealElements = gsap.utils.toArray('.sector-card, .tl-item, .trust-cell, .svc-card, .senaryo-card');
revealElements.forEach(el => {
  gsap.fromTo(el, 
    { y: 40, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

// Form Button interaction
const formBtn = document.querySelector('.cinematic-form .btn');
if(formBtn) {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formBtn.innerText = "Gönderiliyor...";
    setTimeout(() => {
      formBtn.innerText = "Talebiniz Alındı";
      formBtn.style.background = "#10B981"; // success green
    }, 1500);
  });
}
