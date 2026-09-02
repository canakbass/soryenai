import re

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Update toggleActions
js = js.replace('toggleActions: "play none none reverse"', 'toggleActions: "play reverse play reverse"')

# 2. Add Hash handling on page load to skip preloader
hash_logic = """    const speedUp = () => {
        if(tlPreload.progress() < 1) {
            tlPreload.timeScale(3);
        }
        document.removeEventListener('click', speedUp);
    };
    document.addEventListener('click', speedUp);

    // If coming from another page with a hash link, skip preloader and scroll
    if(window.location.hash && document.querySelector(window.location.hash)) {
        tlPreload.progress(1);
        setTimeout(() => {
            lenis.scrollTo(window.location.hash, { offset: -80, duration: 1.5 });
        }, 100);
    }
});"""
js = re.sub(r'    const speedUp.*?\}\);\n', hash_logic + '\n', js, flags=re.DOTALL)

# 3. Add Lenis anchor click intercept and Magnetic Hover
magnetic_logic = """
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

// Intercept local anchor links for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');
        if(target !== "#" && document.querySelector(target)) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
        }
    });
});

// Magnetic & 3D Tilt Effects for Buttons and Cards
const magnetElements = document.querySelectorAll('.btn, .svc-card');
magnetElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(el, {
      x: x * 0.15,
      y: y * 0.15,
      rotationX: -y * 0.05,
      rotationY: x * 0.05,
      duration: 0.6,
      ease: 'power3.out'
    });
  });
  
  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

// Reset tilt on scroll to avoid sticking
window.addEventListener('scroll', () => {
  gsap.to(magnetElements, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: 0.3 });
}, { passive: true });
"""

js = re.sub(r'// Lenis Smooth Scroll.*requestAnimationFrame\(raf\)', magnetic_logic, js, flags=re.DOTALL)

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js)

