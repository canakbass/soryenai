import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the site-header CSS in style.css to match the old subpages header precisely
new_header = """/* Header */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background: rgba(10, 10, 10, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 72px;
  padding: 0 24px;
}

.scroll-progress {
  position: fixed; top: 0; left: 0; height: 2px !important; width: 0%;
  background: var(--accent-glow, #7A5CFF) !important;
  z-index: 10000 !important;
}"""

# Replace the entire header block
css = re.sub(r'\/\* Header \*\/.*?\.scroll-progress \{.*?\}', new_header, css, flags=re.DOTALL)

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

