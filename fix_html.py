import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Header HTML (Remove floating pill style if any inline)
# The header HTML is mostly fine, we will style it in CSS.
# Just ensuring it has a solid structure.

# 2. Fix 02 / AI ÇÖZÜMLERİ
new_cozumler = """
  <!-- SCENE 2: GRID (ÇÖZÜMLER) -->
  <section class="scene standard-scene" id="cozumler">
    <div class="scene-inner">
      <div class="scene-header">
        <p class="eyebrow">02 / AI ÇÖZÜMLERİ</p>
        <h2 class="h2">Yapay Zekâ & Akıllı Sistemler</h2>
        <p class="lead">İletişimden karar destek süreçlerine kadar gerçek görevleri yerine getiren sistemler.</p>
      </div>
      <div class="cozumler-grid">
        <a href="cozumler/sesli-ai-asistanlar.html" class="svc-card"><div class="svc-num">01</div><h3>Sesli AI Asistanlar</h3><p>Telefonu 7/24 açan, randevu oluşturan, arama yapan sesli yapay zekâ.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/ai-chatbotlar.html" class="svc-card"><div class="svc-num">02</div><h3>AI Chatbotlar</h3><p>WhatsApp, Instagram, web ve Telegram'da satış yapan akıllı asistanlar.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/ai-agentlar.html" class="svc-card"><div class="svc-num">03</div><h3>AI Agentlar</h3><p>Sadece cevap vermeyen, görevi baştan sona tamamlayan dijital çalışanlar.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/satis-lead-ai.html" class="svc-card"><div class="svc-num">04</div><h3>Satış & Lead AI</h3><p>Lead'i niteliklendiren, sıcak müşteriyi bulan ve takibi bırakmayan sistemler.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/email-iletisim-ai.html" class="svc-card"><div class="svc-num">05</div><h3>E-mail & İletişim AI</h3><p>Gelen kutusunu okuyan, sınıflandıran, cevaplayan ve teklif hazırlayan sistem.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/akilli-bilgi-sistemleri.html" class="svc-card"><div class="svc-num">06</div><h3>Akıllı Bilgi Sistemleri</h3><p>Şirketinizin tüm bilgisini bilen, çalışanlarınıza cevap veren özel yapay zekâ.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/ai-is-otomasyonlari.html" class="svc-card"><div class="svc-num">07</div><h3>AI İş Otomasyonları</h3><p>Mailden CRM'e, formdan teklife kadar uçtan uca yürüyen iş akışları.</p><div class="card-arrow">→</div></a>
        <a href="cozumler/ai-veri-analiz.html" class="svc-card"><div class="svc-num">08</div><h3>AI Veri & Analiz</h3><p>Belgeleri okuyan, veriyi analiz eden ve yöneticiye cevap veren sistemler.</p><div class="card-arrow">→</div></a>
      </div>
    </div>
  </section>
"""

html = re.sub(r'<!-- SCENE 2: HORIZONTAL SCROLL.*?</section>', new_cozumler, html, flags=re.DOTALL)

# 3. Fix 03 / KULLANIM SENARYOLARI
new_senaryolar = """
  <!-- SCENE 3: SIDE-BY-SIDE GRID (SENARYOLAR) -->
  <section class="scene standard-scene" id="senaryolar">
    <div class="scene-inner">
      <div class="scene-header">
        <p class="eyebrow">03 / KULLANIM SENARYOLARI</p>
        <h2 class="h2">Müşteri geldiğinde ne oluyor?</h2>
      </div>
      <div class="senaryolar-grid">
        <div class="senaryo-card"><h3>Instagram Lead → Satış</h3><p>Yoruma fiyat yazıldı → DM açılır → AI ihtiyacı sorar → İletişim bilgisi → CRM kaydı → Satış ekibine sıcak lead.</p></div>
        <div class="senaryo-card"><h3>Telefon → Randevu</h3><p>Müşteri arar → Voice AI anlar → Randevu oluşturur → WhatsApp onayı.</p></div>
        <div class="senaryo-card"><h3>Web → Omnichannel</h3><p>Web chatbot lead toplar → Ertesi gün WhatsApp → Süreç kaldığı yerden sürer.</p></div>
        <div class="senaryo-card"><h3>Mail → Teklif</h3><p>Teklif talebi analiz edilir → Teklif taslağı → Müşteriye gönderim.</p></div>
        <div class="senaryo-card"><h3>Doküman → Veri</h3><p>PDF/fatura okunur → Alanlar çıkarılır → Doğrulama → ERP/CRM'e yazılır.</p></div>
      </div>
    </div>
  </section>
"""

html = re.sub(r'<!-- SCENE 3: STACKING CARDS.*?</section>', new_senaryolar, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

