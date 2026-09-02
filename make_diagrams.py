import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_senaryolar = """
      <div class="senaryolar-grid">
        
        <div class="senaryo-card">
          <h3>Instagram Lead'den Satışa</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">📱</div><div class="fs-text">Yoruma "Fiyat"<br>yazılır</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">💬</div><div class="fs-text">DM açılır,<br>ihtiyaç sorulur</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📇</div><div class="fs-text">İletişim bilgisi<br>alınır</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🤝</div><div class="fs-text">Satış ekibine<br>CRM kaydı</div></div>
          </div>
        </div>

        <div class="senaryo-card">
          <h3>Kaçan Çağrıdan Randevuya</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">📞</div><div class="fs-text">Müşteri arar</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🤖</div><div class="fs-text">Voice AI<br>7/24 cevaplar</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📅</div><div class="fs-text">Takvime<br>randevu atar</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">✅</div><div class="fs-text">WhatsApp<br>onay mesajı</div></div>
          </div>
        </div>

        <div class="senaryo-card">
          <h3>Web'den Omnichannel'a</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">💻</div><div class="fs-text">Web Chatbot<br>sohbet başlar</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🏃‍♂️</div><div class="fs-text">Sohbet<br>yarıda kalır</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📲</div><div class="fs-text">Ertesi gün<br>WhatsApp atar</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🔗</div><div class="fs-text">Bağlam kopmadan<br>devam eder</div></div>
          </div>
        </div>

        <div class="senaryo-card">
          <h3>Gelen Mailden Teklife</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">📧</div><div class="fs-text">Talep maili<br>gelir</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🧠</div><div class="fs-text">AI metni<br>analiz eder</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📊</div><div class="fs-text">Veritabanından<br>fiyat çeker</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📄</div><div class="fs-text">Teklif taslağı<br>hazırlar</div></div>
          </div>
        </div>

        <div class="senaryo-card">
          <h3>Karmaşık Dokümandan Veriye</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">📑</div><div class="fs-text">PDF / Fatura<br>yüklenir</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🔍</div><div class="fs-text">Bilgiler<br>ayrıştırılır</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">⚙️</div><div class="fs-text">Doğrulama<br>kuralları</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">💾</div><div class="fs-text">ERP / CRM'e<br>işlenir</div></div>
          </div>
        </div>

        <div class="senaryo-card">
          <h3>Multi-Agent Takım Çalışması</h3>
          <div class="flow-diagram">
            <div class="flow-step"><div class="fs-icon">👋</div><div class="fs-text">Lead<br>Agent</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">💼</div><div class="fs-text">Sales<br>Agent</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">📅</div><div class="fs-text">Booking<br>Agent</div></div>
            <div class="flow-arrow">→</div>
            <div class="flow-step"><div class="fs-icon">🔄</div><div class="fs-text">Follow-up<br>Agent</div></div>
          </div>
        </div>

      </div>
"""
html = re.sub(r'<div class="senaryolar-grid">.*?</div>\s*</div>\s*</section>', new_senaryolar + "\n    </div>\n  </section>", html, flags=re.DOTALL)

# Add the scroll progress bar to HTML if missing
if '<div id="scroll-progress"' not in html:
    html = html.replace('<header class="site-header" id="site-header">', '<div id="scroll-progress" class="scroll-progress"></div>\n<header class="site-header" id="site-header">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
