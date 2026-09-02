import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add styles for chips and ambient-glow, and make header smart
new_css_blocks = """
/* Ambient Glow */
#ambient-glow {
  position: fixed;
  top: 0; left: 0;
  width: 600px; height: 600px;
  background: radial-gradient(circle closest-side, rgba(79, 70, 229, 0.08), transparent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
  will-change: transform;
}

/* Chips */
.chip {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s;
}
.chip:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
}

/* Smart Header modifications */
.site-header {
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), background 0.4s;
  background: rgba(3, 3, 3, 0.6);
}
.site-header.is-hidden {
  transform: translateY(-100%) !important;
}
.site-header.is-scrolled {
  background: rgba(3, 3, 3, 0.9);
  border-bottom: 1px solid rgba(79, 70, 229, 0.3); /* Subtle accent glow */
  box-shadow: 0 4px 30px rgba(0,0,0,0.5);
}

/* Ensure content is above glow */
.scene { z-index: 1; }
"""

css += new_css_blocks

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

