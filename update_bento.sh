#!/bin/bash

# Update style.css
cat << 'CSSEOF' >> assets/css/style.css

/* --- Premium Bento Enhancements --- */
.bento-grid {
  perspective: 1200px;
  grid-auto-rows: minmax(300px, auto);
}

.bento-cell {
  background: rgba(15, 15, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.08), 0 20px 40px rgba(0,0,0,0.4);
  /* Subtitle noise pattern for premium feel */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
  justify-content: flex-start;
  padding: 40px;
}

.bento-cell:hover {
  background: rgba(25, 25, 30, 0.7);
  border-color: rgba(66, 117, 255, 0.3);
  transform: translateY(-8px) scale(1.01);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.15), 0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(66, 117, 255, 0.15);
}

.bento-icon {
  width: 48px;
  height: 48px;
  background: rgba(66, 117, 255, 0.1);
  border: 1px solid rgba(66, 117, 255, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--accent);
  transition: transform 0.4s var(--ease), background 0.4s var(--ease);
}
.bento-icon svg { width: 24px; height: 24px; }

.bento-cell:hover .bento-icon {
  transform: scale(1.1);
  background: rgba(66, 117, 255, 0.2);
  color: #fff;
}

.bento-cell .cell__title {
  font-size: 24px;
  letter-spacing: -0.03em;
  color: #fff;
}

.mini-flow {
  margin-top: 24px;
}
CSSEOF

# Re-write the bento-grid part in index.html
sed -i '/<div class="bento-grid">/,/<\/div><\/div>/c\
      <div class="bento-grid">\
      <div class="bento-cell bento-wide">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div>\
        <div class="cell__title">Instagram Lead → Satış</div>\
        <ol class="mini-flow"><li>Yoruma “fiyat” yazıldı</li><li>DM açılır</li><li>AI ihtiyacı sorar</li><li>İletişim bilgisi & CRM kaydı</li><li>Satış ekibine sıcak lead</li></ol>\
      </div>\
      <div class="bento-cell">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>\
        <div class="cell__title">Telefon → Randevu</div>\
        <ol class="mini-flow"><li>Müşteri arar</li><li>Voice AI anlar</li><li>Randevu oluşturur</li><li>WhatsApp onayı</li></ol>\
      </div>\
      <div class="bento-cell">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>\
        <div class="cell__title">Web → Omnichannel</div>\
        <ol class="mini-flow"><li>Web chatbot lead toplar</li><li>Ertesi gün WhatsApp</li><li>Süreç kaldığı yerden sürer</li></ol>\
      </div>\
      <div class="bento-cell">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>\
        <div class="cell__title">Mail → Teklif</div>\
        <ol class="mini-flow"><li>Teklif talebi analiz edilir</li><li>Teklif taslağı</li><li>Müşteriye gönderim</li></ol>\
      </div>\
      <div class="bento-cell">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>\
        <div class="cell__title">Destek → Ticket</div>\
        <ol class="mini-flow"><li>Mesaj / telefon</li><li>Bilgi tabanından çözüm</li><li>Çözülemezse ticket</li></ol>\
      </div>\
      <div class="bento-cell bento-wide">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>\
        <div class="cell__title">Toplantı → CRM</div>\
        <ol class="mini-flow"><li>Toplantı transkribe edilir</li><li>Özet + aksiyonlar</li><li>CRM notu</li><li>Follow-up görevi</li></ol>\
      </div>\
      <div class="bento-cell bento-wide">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>\
        <div class="cell__title">Doküman → Veri</div>\
        <ol class="mini-flow"><li>PDF / fatura / form okunur</li><li>Alanlar çıkarılır</li><li>Doğrulama</li><li>ERP / CRM'e yazılır</li></ol>\
      </div>\
      <div class="bento-cell bento-wide">\
        <div class="bento-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>\
        <div class="cell__title">Multi-agent Satış</div>\
        <ol class="mini-flow"><li>Lead Agent</li><li>Sales Agent</li><li>Booking Agent</li><li>CRM Agent</li><li>Follow-up Agent</li></ol>\
      </div>\
      </div>\
    </div>' index.html
