import re

with open('index.backup.html', 'r', encoding='utf-8') as f:
    html = f.read()

# I will keep the head, header, and footer, but rewrite <main>
# Let's extract the main tags
import os

new_html = """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <title>Soryen AI - Akıllı Sistemler</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="cinematic-mode">

<!-- Preloader -->
<div class="preloader" id="preloader">
  <div class="preloader-logo">SORYEN AI</div>
  <div class="preloader-progress"></div>
</div>

<header class="site-header" id="site-header">
  <div class="wrap site-header__inner">
    <a class="logo" href="index.html">SORYEN<span class="muted">AI</span></a>
    <nav class="nav" id="nav">
      <a href="#cozumler">Çözümler</a>
      <a href="#senaryolar">Senaryolar</a>
      <a href="#fark">Yaklaşım</a>
      <a href="#iletisim">İletişim</a>
    </nav>
    <a class="btn btn--primary nav__btn" href="#iletisim">Başlayalım</a>
  </div>
</header>

<div id="smooth-wrapper">
<div id="smooth-content">
<main>

  <!-- SCENE 1: HERO -->
  <section class="scene hero-scene" id="hero">
    <div class="hero-content">
      <p class="eyebrow" id="h-eye">01 / GİRİŞ</p>
      <h1 class="h1" id="h-title">İşletmeniz için<br>çalışan yapay zekâ.</h1>
      <p class="lead" id="h-lead">Müşterilerinizle konuşan, satış yapan, randevu oluşturan, verileri analiz eden ve iş süreçlerini yöneten; şirketinize özel yapay zekâ sistemleri geliştiriyoruz.</p>
    </div>
  </section>

  <!-- SCENE 2: HORIZONTAL SCROLL (ÇÖZÜMLER) -->
  <section class="scene horiz-scene" id="cozumler">
    <div class="horiz-header">
      <h2 class="h2">Yapay Zekâ & Akıllı Sistemler</h2>
      <p class="lead">İletişimden karar destek süreçlerine kadar gerçek görevleri yerine getiren sistemler.</p>
    </div>
    <div class="horiz-container">
      <div class="horiz-track" id="horiz-track">
        <!-- Cards -->
        <div class="svc-card"><div class="svc-num">01</div><h3>Sesli AI Asistanlar</h3><p>Telefonu 7/24 açan, randevu oluşturan, arama yapan sesli yapay zekâ.</p></div>
        <div class="svc-card"><div class="svc-num">02</div><h3>AI Chatbotlar</h3><p>WhatsApp, Instagram, web ve Telegram'da satış yapan akıllı asistanlar.</p></div>
        <div class="svc-card"><div class="svc-num">03</div><h3>AI Agentlar</h3><p>Sadece cevap vermeyen, görevi baştan sona tamamlayan dijital çalışanlar.</p></div>
        <div class="svc-card"><div class="svc-num">04</div><h3>Satış & Lead AI</h3><p>Lead'i niteliklendiren, sıcak müşteriyi bulan ve takibi bırakmayan sistemler.</p></div>
        <div class="svc-card"><div class="svc-num">05</div><h3>E-mail & İletişim AI</h3><p>Gelen kutusunu okuyan, sınıflandıran, cevaplayan ve teklif hazırlayan sistem.</p></div>
        <div class="svc-card"><div class="svc-num">06</div><h3>Akıllı Bilgi Sistemleri</h3><p>Şirketinizin tüm bilgisini bilen, çalışanlarınıza cevap veren özel yapay zekâ.</p></div>
        <div class="svc-card"><div class="svc-num">07</div><h3>AI İş Otomasyonları</h3><p>Mailden CRM'e, formdan teklife kadar uçtan uca yürüyen iş akışları.</p></div>
        <div class="svc-card"><div class="svc-num">08</div><h3>AI Veri & Analiz</h3><p>Belgeleri okuyan, veriyi analiz eden ve yöneticiye cevap veren sistemler.</p></div>
      </div>
    </div>
  </section>

  <!-- SCENE 3: SPOTLIGHT TEXT REVEAL -->
  <section class="scene spotlight-scene" id="fark">
    <div class="spotlight-wrapper">
      <h2 class="spotlight-text">Tek bot değil,<br><span class="highlight">çalışan bir sistem.</span></h2>
      <p class="spotlight-desc">Aynı müşterinin telefon, WhatsApp, Instagram ve web geçmişi tek akışta yönetilir; görevler birbirine bağlı agentlar tarafından tamamlanır.</p>
    </div>
  </section>

  <!-- SCENE 4: STACKING CARDS (SENARYOLAR) -->
  <section class="scene stack-scene" id="senaryolar">
    <div class="stack-header">
      <h2 class="h2">Müşteri geldiğinde ne oluyor?</h2>
    </div>
    <div class="stack-cards-wrapper" id="stack-cards">
      <div class="s-card"><h3>Instagram Lead → Satış</h3><p>Yoruma fiyat yazıldı → DM açılır → AI ihtiyacı sorar → İletişim bilgisi → CRM kaydı → Satış ekibine sıcak lead.</p></div>
      <div class="s-card"><h3>Telefon → Randevu</h3><p>Müşteri arar → Voice AI anlar → Randevu oluşturur → WhatsApp onayı.</p></div>
      <div class="s-card"><h3>Web → Omnichannel</h3><p>Web chatbot lead toplar → Ertesi gün WhatsApp → Süreç kaldığı yerden sürer.</p></div>
      <div class="s-card"><h3>Mail → Teklif</h3><p>Teklif talebi analiz edilir → Teklif taslağı → Müşteriye gönderim.</p></div>
      <div class="s-card"><h3>Doküman → Veri</h3><p>PDF/fatura okunur → Alanlar çıkarılır → Doğrulama → ERP/CRM'e yazılır.</p></div>
    </div>
  </section>

  <!-- SCENE 5: CONTACT -->
  <section class="scene contact-scene" id="iletisim">
    <div class="contact-center">
      <h2 class="h1">Hazır mısınız?</h2>
      <p class="lead">İhtiyacınızı anlatın, size uygun AI mimarisini çıkaralım.</p>
      <a class="btn btn--primary btn--massive" href="mailto:info@soryen.com">Görüşme Ayarla</a>
    </div>
  </section>

</main>
</div>
</div>

<script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

