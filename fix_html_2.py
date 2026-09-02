import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update 03 / KULLANIM SENARYOLARI
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
html = re.sub(r'<div class="senaryolar-grid">.*?</div>\s*</div>\s*</section>', new_senaryolar + "\n    </div>\n  </section>", html, flags=re.DOTALL)

# 2. Update 04 / SEKTÖREL ÇÖZÜMLER (Add chips)
sector_chips = """
      <div class="sector-chips" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
        <span class="chip">Klinik & Sağlık</span>
        <span class="chip">Güzellik & Estetik</span>
        <span class="chip">Emlak</span>
        <span class="chip">Otomotiv</span>
        <span class="chip">Otel & Turizm</span>
        <span class="chip">Restoran & Kafe</span>
        <span class="chip">Eğitim & Kurs</span>
        <span class="chip">Lojistik & Kargo</span>
        <span class="chip">Sigorta</span>
        <span class="chip">Teknik Servis</span>
        <span class="chip">Hukuk & Danışmanlık</span>
        <span class="chip">E-ticaret</span>
        <span class="chip">Finans</span>
        <span class="chip">İnşaat & Proje</span>
      </div>
"""
html = html.replace('</div>\n    </div>\n  </section>\n\n  <!-- SCENE 5:', '</div>\n' + sector_chips + '    </div>\n  </section>\n\n  <!-- SCENE 5:')

# 3. Enhance 06 / PROJE SÜRECİ
new_timeline = """
        <div class="timeline">
          <div class="tl-item"><h4>1. Stratejik Keşif</h4><p>İşletmenizin mevcut işleyişini analiz ediyoruz. Darboğaz yaratan, çok vakit alan veya kaçan fırsatlara yol açan süreçleri tespit edip, yapay zekânın en yüksek ROI (yatırım getirisi) sağlayacağı ilk noktayı belirliyoruz.</p></div>
          <div class="tl-item"><h4>2. Mimari Tasarım</h4><p>Kullanılacak yapay zekâ modellerini, iletişim tonunu (persona), konuşma akışlarını, veri doğrulama kurallarını ve en önemlisi yapay zekânın sınırlarını ve insana devir (handoff) noktalarını tasarlıyoruz.</p></div>
          <div class="tl-item"><h4>3. Kesintisiz Entegrasyon</h4><p>Sistemi kendi altyapımıza kurup; kullandığınız CRM (HubSpot, Salesforce vb.), takvim (Google, Outlook), telefon santrali (SIP) ve mesajlaşma (WhatsApp API) uygulamalarına mevcut düzeninizi bozmadan bağlıyoruz.</p></div>
          <div class="tl-item"><h4>4. Ölçüm, Optimizasyon & Büyüme</h4><p>Gerçek görüşmeler başladığında sistemi canlı olarak izliyor, hata paylarını sıfıra indiriyoruz. Başarı metriklerini (cevaplanan çağrı, oluşan randevu) yakaladığımızda sistemi diğer departmanlara ölçekliyoruz.</p></div>
        </div>
"""
html = re.sub(r'<div class="timeline">.*?</div>\s*</div>\s*</div>', new_timeline + "\n      </div>\n    </div>", html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
