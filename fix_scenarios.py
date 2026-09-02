import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

missing_cards = """
        <div class="senaryo-card"><h3>Destek → Ticket</h3><p>Mesaj / telefon → Bilgi tabanından çözüm → Çözülemezse ticket oluşturur.</p></div>
        <div class="senaryo-card"><h3>Toplantı → CRM</h3><p>Toplantı transkribe edilir → Özet + aksiyonlar → CRM notu → Follow-up görevi.</p></div>
        <div class="senaryo-card"><h3>Multi-agent Satış</h3><p>Lead Agent → Sales Agent → Booking Agent → CRM Agent → Follow-up Agent ortak çalışır.</p></div>
"""

# Insert right after "ERP/CRM'e yazılır.</p></div>"
html = html.replace("ERP/CRM'e yazılır.</p></div>", "ERP/CRM'e yazılır.</p></div>" + missing_cards)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

