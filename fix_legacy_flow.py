import re

with open('assets/css/legacy.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_flow_css = """
.flow {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 12px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  margin-top: 60px;
  position: relative;
}

.flow__label {
  position: absolute;
  top: -12px;
  left: 24px;
  background: #050505;
  padding: 0 12px;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--accent-glow, #7A5CFF);
  font-weight: 700;
  text-transform: uppercase;
}

.flow__step {
  font-size: 0.85rem;
  font-weight: 600;
  padding: 16px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
}

.flow__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .flow {
    flex-direction: column;
    align-items: stretch;
    padding: 30px 20px;
  }
  .flow__arrow {
    transform: rotate(90deg);
    margin: 4px 0;
  }
}
"""

css = re.sub(r'\.flow \{.*?margin-top: 40px;\n\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.flow__step \{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.flow__label \{.*?\}', '', css, flags=re.DOTALL)
css = re.sub(r'\.flow__arrow \{.*?\}', '', css, flags=re.DOTALL)

# Re-append
css += new_flow_css

with open('assets/css/legacy.css', 'w', encoding='utf-8') as f:
    f.write(css)

