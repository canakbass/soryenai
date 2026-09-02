import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

new_senaryolar = """
      <div class="senaryolar-grid">
        <div class="senaryo-card"><h3>Instagram Lead'den Satışa</h3><p>Sosyal medya etkileşimleri anında satış fırsatına dönüşür. Yoruma bırakılan bir kelimeyle başlayan süreçte AI, DM üzerinden müşteriyle iletişime geçer, ihtiyacını analiz eder ve nitelikli veriyi doğrudan CRM sisteminize aktararak satış ekibinize sıcak lead olarak iletir.</p></div>
        <div class="senaryo-card"><h3>Telefondan Randevuya</h3><p>Gelen çağrılar 7/24 insan doğallığında karşılanır. Sistem müşterinin niyetini saniyeler içinde anlar, takviminizdeki boşlukları kontrol ederek randevuyu kesinleştirir ve görüşme sonunda otomatik WhatsApp onay/hatırlatma mesajı gönderir.</p></div>
        <div class="senaryo-card"><h3>Web'den Omnichannel'a</h3><p>Ziyaretçi web sitenizdeki chatbot ile görüşmeye başlar. Konuşma yarıda kalsa bile sistem lead bilgisini toplar; ertesi gün WhatsApp üzerinden aynı bağlamla (müşteriyi tanıyarak) iletişime geçer ve süreci kaldığı yerden tamamlar.</p></div>
        <div class="senaryo-card"><h3>Gelen Mailden Teklife</h3><p>Şirketinize gelen karmaşık teklif veya bilgi taleplerini okuyan sistem, talebin detaylarını analiz eder, veri tabanınızdan gerekli ürün/fiyat bilgilerini çeker ve saniyeler içinde profesyonel bir e-posta taslağı oluşturarak yönetici onayına sunar.</p></div>
        <div class="senaryo-card"><h3>Karmaşık Dokümandan Veriye</h3><p>Müşteriden veya tedarikçiden gelen PDF, fatura veya formlar anında taranır. Gerekli teknik alanlar (isim, tutar, tarih, ürün kodu) büyük bir doğrulukla ayrıştırılır, veri doğrulama kurallarından geçirilir ve doğrudan ERP/CRM sisteminize işlenir.</p></div>
        <div class="senaryo-card"><h3>Multi-Agent Takım Çalışması</h3><p>Süreci tek bir bot değil, farklı uzmanlıkları olan bir yapay zekâ takımı yürütür. 'Lead Agent' müşteriyi karşılar, 'Sales Agent' ürünü sunar, 'Booking Agent' randevuyu ayarlar ve 'Follow-up Agent' satış sonrasını takip eder.</p></div>
      </div>
"""
# Find the entire senaryolar-grid block and replace it
html = re.sub(r'<div class="senaryolar-grid">.*?</div>\s*</div>\s*</section>', new_senaryolar + "\n    </div>\n  </section>", html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
