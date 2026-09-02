import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Restore the Floating Pill Topbar
header_css_old = r'\/\* Header \*\/.*?\.site-header__inner \{.*?\}'
header_css_new = """/* Header */
.site-header {
  position: fixed; top: 24px; left: 50%; transform: translateX(-50%) !important;
  width: calc(100% - 48px); max-width: 1000px; height: 64px;
  background: rgba(10, 10, 12, 0.6) !important;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 100px;
  z-index: 9999 !important; display: flex; align-items: center; opacity: 0;
}
.site-header::before {
  content: "";
  position: absolute; inset: -1px; border-radius: inherit; padding: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(122, 92, 255, 0.6) 50%, rgba(255,255,255,0.05) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  pointer-events: none; background-size: 200% 100%;
  animation: headerShimmer 4s linear infinite;
}
@keyframes headerShimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.site-header__inner {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; padding: 0 24px;
}
.scroll-progress {
  position: fixed; top: 0; left: 0; height: 4px !important; width: 0%;
  background: linear-gradient(90deg, #3B82F6 0%, #7A5CFF 100%) !important;
  box-shadow: 0 0 10px rgba(122, 92, 255, 0.5), 0 0 20px rgba(122, 92, 255, 0.3) !important;
  z-index: 99999 !important; border-radius: 0 4px 4px 0;
}"""
css = re.sub(header_css_old, header_css_new, css, flags=re.DOTALL)

# Remove the smart header CSS rules
css = re.sub(r'\/\* Smart Header modifications \*\/.*?\.scene \{ z-index: 1; \}', '.scene { z-index: 1; }', css, flags=re.DOTALL)

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 2. Fix JS GSAP Header Animation (Since it relies on transform: translateX(-50%))
js = js.replace(".to('#site-header', { y: 0, opacity: 1, duration: 0.8, ease: \"power3.out\" }", ".to('#site-header', { y: 0, opacity: 1, xPercent: -50, duration: 0.8, ease: \"power3.out\" }")
js = js.replace("gsap.set('#site-header', { y: -100, opacity: 0 });", "gsap.set('#site-header', { y: -100, opacity: 0, xPercent: -50 });")

# Remove Smart Header Logic and Add Scroll Progress Logic
smart_header_logic = r'// 1\.5 Smart Header.*?// Ambient Glow Setup'
scroll_progress_logic = """// 1.5 Scroll Progress Bar
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  if(scrollProgress) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + "%";
  }
}, { passive: true });

// Ambient Glow Setup"""
js = re.sub(smart_header_logic, scroll_progress_logic, js, flags=re.DOTALL)

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js)

