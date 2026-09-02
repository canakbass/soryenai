import re

with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix Header
header_css_old = r'\/\* Header \*\/.*?\.site-header__inner \{.*?\}'
header_css_new = """/* Header */
.site-header {
  position: fixed; top: 0; left: 0; transform: none !important;
  width: 100%; max-width: none; height: 72px;
  background: rgba(3,3,3,0.85); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  border: none; border-bottom: 1px solid rgba(255,255,255,0.08); border-radius: 0;
  z-index: 9999 !important; display: flex; align-items: center; opacity: 0;
}
.site-header__inner {
  display: flex; justify-content: space-between; align-items: center;
  width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px;
}"""
css = re.sub(header_css_old, header_css_new, css, flags=re.DOTALL)

# Remove old Horizontal Scroll CSS
css = re.sub(r'\/\* Horizontal Scroll \*\/(.*?)\/\* Spotlight Scene \*\/', '/* Spotlight Scene */', css, flags=re.DOTALL)

# Remove old Stacking Cards CSS
css = re.sub(r'\/\* Stacking Cards \*\/(.*?)\/\* Contact \*\/', '/* Contact */', css, flags=re.DOTALL)

# Append New CSS at the end
new_css = """
/* --- GRID SCENES (Çözümler & Senaryolar) --- */
.standard-scene { padding: 140px 0; min-height: auto; align-items: center; }
.scene-inner { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.scene-header { margin-bottom: 60px; text-align: center; }

/* Çözümler Grid */
.cozumler-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
.svc-card { 
  width: 100%; height: auto; min-height: 280px; background: rgba(255,255,255,0.015); 
  border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; 
  padding: 32px 24px; display: flex; flex-direction: column; justify-content: flex-start; 
  transition: transform 0.3s, background 0.3s, border-color 0.3s;
  position: relative; overflow: hidden; text-decoration: none;
}
.svc-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.15); }
.svc-num { font-size: 2.5rem; font-weight: 800; opacity: 0.1; margin-bottom: 24px; line-height: 1; }
.svc-card h3 { font-size: 1.3rem; margin-bottom: 12px; color: #fff; }
.svc-card p { color: rgba(255,255,255,0.5); line-height: 1.6; font-size: 0.95rem; flex-grow: 1; }
.card-arrow { margin-top: 24px; font-size: 1.5rem; color: var(--accent-glow); opacity: 0; transform: translateX(-10px); transition: all 0.3s; }
.svc-card:hover .card-arrow { opacity: 1; transform: translateX(0); }

/* Senaryolar Grid */
.senaryolar-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.senaryo-card { 
  background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
  border: 1px solid rgba(255,255,255,0.05); padding: 32px; border-radius: 16px;
}
.senaryo-card h3 { font-size: 1.2rem; color: var(--accent-glow); margin-bottom: 16px; font-weight: 600; }
.senaryo-card p { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.7; }
"""
css += new_css

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

