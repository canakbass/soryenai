import re

with open('assets/js/main.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove Horizontal Scroll
js = re.sub(r'// 2\. Horizontal Scroll.*?// 3\. Spotlight Text Reveal', '// 3. Spotlight Text Reveal', js, flags=re.DOTALL)

# Remove Stacking Cards
js = re.sub(r'// 4\. Stacking Cards.*?// Lenis Smooth Scroll', '// Lenis Smooth Scroll', js, flags=re.DOTALL)

# Also fix the Header animation translation. I removed transform: translateX(-50%) from CSS, so it shouldn't have xPercent: -50.
# The timeline in JS:
# .fromTo('#site-header', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
# Wait, I didn't add xPercent: -50 to the new timeline in V3, so it's already just y: -100 to y: 0. That's perfect.

# Add scroll reveals for new grid cards
js = js.replace("'.sector-card, .tl-item, .trust-cell'", "'.sector-card, .tl-item, .trust-cell, .svc-card, .senaryo-card'")

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js)

