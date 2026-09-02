import re
import os

# 1. CSS FIXES (Both style.css and legacy.css)
def fix_header_css(css_path):
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()

    new_header = """/* Header */
.site-header {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  max-width: 1000px;
  height: 64px;
  background: rgba(10, 10, 12, 0.6) !important;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 100px;
  z-index: 9999 !important;
  display: flex;
  align-items: center;
}
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
}
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 3px !important; width: 0%;
  background: var(--accent-glow, #7A5CFF) !important;
  z-index: 10000 !important;
}"""
    # Replace the site-header block. In style.css it might end before .scroll-progress
    # We will use regex to find the .site-header block and .site-header__inner block
    css = re.sub(r'\.site-header\s*{[^}]*}', '', css)
    css = re.sub(r'\.site-header__inner\s*{[^}]*}', '', css)
    css = re.sub(r'\.scroll-progress\s*{[^}]*}', '', css)
    
    # Append the clean header CSS at the end
    css += "\n" + new_header + "\n"

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(css)

fix_header_css('assets/css/style.css')
fix_header_css('assets/css/legacy.css')


# 2. JS FIXES (Preloader morph and Header GSAP)
with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Completely rewrite the preloader section
js_preloader_old = r'// 1\. Preloader Sequence.*?// 1\.5 Scroll Progress Bar'
js_preloader_new = """// 1. Preloader Sequence & Morph
const tlPreload = gsap.timeline();

// Set header to final position initially so we can measure the logo
gsap.set('#site-header', { y: 0, xPercent: -50, opacity: 0 });

window.addEventListener('load', () => {
    const logo = document.querySelector('#site-header .logo');
    const pLogo = document.querySelector('.preloader-logo');
    
    let xMove = -window.innerWidth/2 + 100;
    let yMove = -window.innerHeight/2 + 50;
    
    if(logo && pLogo) {
        const logoRect = logo.getBoundingClientRect();
        const pRect = pLogo.getBoundingClientRect();
        xMove = logoRect.left - pRect.left + (logoRect.width - pRect.width)/2;
        yMove = logoRect.top - pRect.top + (logoRect.height - pRect.height)/2;
    }

    tlPreload.to('.preloader-logo', { opacity: 1, duration: 1, ease: "power2.inOut" })
             .to('.preloader-progress', { width: "100%", duration: 1.5, ease: "power4.inOut" })
             .to('.preloader', { backgroundColor: "transparent", duration: 0.8 }, "+=0.2")
             .to('.preloader-progress', { opacity: 0, duration: 0.3 }, "<")
             // Morph to logo
             .to('.preloader-logo', { x: xMove, y: yMove, scale: 0.4, opacity: 0, duration: 1.2, ease: "power3.inOut" }, "<")
             // Fade in header exactly as preloader logo disappears
             .to('#site-header', { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
             .fromTo('#h-eye', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
             .fromTo('#h-title', { y: 40, opacity: 0, filter: "blur(10px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 }, "-=0.6")
             .fromTo('#h-lead', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
             .fromTo('#h-actions', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
             .fromTo('#h-proof', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8")
             .set('.preloader', { display: "none" });

    const speedUp = () => {
        if(tlPreload.progress() < 1) {
            tlPreload.timeScale(3);
        }
        document.removeEventListener('click', speedUp);
    };
    document.addEventListener('click', speedUp);
});

// 1.5 Scroll Progress Bar"""

js = re.sub(js_preloader_old, js_preloader_new, js, flags=re.DOTALL)

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js)


# 3. HTML FIXES (Remove emojis from index.html)
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove emoji div containers entirely from the flow-step
html = re.sub(r'<div class="fs-icon">.*?</div>', '', html)
html = html.replace('<div class="fs-text">', '<div class="fs-text" style="font-size: 0.85rem; padding: 12px 0;">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

