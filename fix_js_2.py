import re

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Replace Preloader Logic
old_preloader = r'// 1\. Preloader Sequence.*?// 3\. Spotlight Text Reveal'

new_preloader = """// 1. Preloader Sequence & Click to Speed Up
const tlPreload = gsap.timeline();

// Setup initial states
gsap.set('#site-header', { y: -100, opacity: 0 });

tlPreload.to('.preloader-logo', { opacity: 1, duration: 1, ease: "power2.inOut" })
         .to('.preloader-progress', { width: "100%", duration: 1.5, ease: "power4.inOut" })
         .to('.preloader', { backgroundColor: "transparent", duration: 0.8 }, "+=0.2")
         .to('.preloader-progress', { opacity: 0, duration: 0.3 }, "<")
         .to('.preloader-logo', { scale: 0.5, y: -window.innerHeight/2 + 40, opacity: 0, duration: 1, ease: "power3.inOut" }, "<")
         .to('#site-header', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
         .fromTo('#h-eye', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
         .fromTo('#h-title', { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }, "-=0.6")
         .fromTo('#h-lead', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
         .fromTo('#h-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
         .fromTo('#h-proof', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
         .set('.preloader', { display: "none" });

// Speed up preloader on any click during intro
const speedUp = () => {
    if(tlPreload.progress() < 1) {
        tlPreload.timeScale(2.5);
    }
    document.removeEventListener('click', speedUp);
};
document.addEventListener('click', speedUp);

// 1.5 Smart Header & Ambient Glow
let lastScroll = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Smart Header Logic
  if (currentScroll > 50) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }

  if (currentScroll > lastScroll && currentScroll > 200) {
    // Scrolling down -> hide
    header.classList.add('is-hidden');
  } else {
    // Scrolling up -> show
    header.classList.remove('is-hidden');
  }
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

// Ambient Glow Setup
if (window.innerWidth > 768) {
  const ambientGlow = document.createElement('div');
  ambientGlow.id = "ambient-glow";
  document.body.appendChild(ambientGlow);

  const xTo = gsap.quickTo(ambientGlow, "x", {duration: 0.8, ease: "power3"});
  const yTo = gsap.quickTo(ambientGlow, "y", {duration: 0.8, ease: "power3"});

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
}

// 3. Spotlight Text Reveal"""

js = re.sub(old_preloader, new_preloader, js, flags=re.DOTALL)

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js)

