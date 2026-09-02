# Soryen AI — Tanıtım Sitesi

Yapay zekâ hizmetlerini tanıtan statik web sitesi. Kurulum gerektirmez; `index.html`
dosyasına çift tıklayarak açılabilir, olduğu gibi herhangi bir hosting'e yüklenebilir.

## İçindekiler

| Sayfa | Dosya |
|---|---|
| Ana sayfa | `index.html` |
| 8 hizmet detay sayfası | `cozumler/*.html` |
| KVKK & Gizlilik (taslak) | `kvkk.html` |
| 404 sayfası | `404.html` |
| SEO | `sitemap.xml`, `robots.txt` |

Ana sayfa bölümleri: Hero → AI Çözümleri (8 kategori) → Senaryolar → Yaklaşım →
Sektörler → Nasıl Çalışır → Güven & Kontrol → Entegrasyonlar → Çalışma Modeli → İletişim.

Hizmet sayfası şablonu: Hero → Problem/Çözüm → Akış → Yetenekler → Sektörel senaryolar →
Kanallar & insan kontrolü → SSS → CTA → Önceki/Sonraki.

## İçeriği düzenleme

**Bütün metinler tek dosyada:** `build/data.js`

Düzenledikten sonra HTML'leri yeniden üretmek için:

```bash
node build/build.js
```

`data.js` içindeki bölümler:

- `site` — marka adı, domain, e-posta, telefon, WhatsApp numarası, ana mesaj
- `categories` — 8 hizmet kategorisi ve tüm alt hizmetler (294 madde)
- `process` / `why` / `trust` / `levels` / `sectors` / `integrations` / `useCases` — ana sayfa bölümleri

HTML'i elle düzenlemeyin; `node build/build.js` çalıştırıldığında üzerine yazılır.
Tasarım değişiklikleri `assets/css/style.css`, sayfa iskeleti `build/build.js` içindedir.

## Yayına almadan önce yapılacaklar

1. **İletişim bilgileri** — `build/data.js` içindeki `site.email`, `site.phone`,
   `site.whatsapp` alanlarını doldurun (şu an yer tutucu).
2. **Alan adı** — `build/build.js` dosyasındaki `BASE_URL` değerini gerçek adresle
   değiştirin (canonical etiketleri ve `sitemap.xml` bunu kullanır).
3. **Form** — Şu anda form, gönderimde e-posta taslağı açar (backend gerektirmez).
   Gerçek bir servise bağlamak için `assets/js/main.js` içindeki `ENDPOINT` ve
   `MAIL_TO` değerlerini doldurun (Formspree, Netlify Forms veya kendi API'niz).
4. **KVKK metni** — `kvkk.html` taslaktır; şirket unvanı, adres ve saklama süreleri
   doldurulmalı, metin hukuk danışmanı tarafından onaylanmalıdır.
5. `node build/build.js` çalıştırıp değişiklikleri HTML'e yansıtın.

## Yayınlama

- **Netlify / Vercel:** Klasörü sürükleyip bırakın. Build komutu gerekmez.
- **cPanel / klasik hosting:** Klasör içeriğini `public_html` altına yükleyin.
- **Alt dizin olarak (`soryen.com/ai`):** Klasörü `ai/` adıyla yükleyin; tüm bağlantılar
  görelidir, ek ayar gerekmez.

## Teknik notlar

- Bağımlılık yok; framework yok. Yalnızca HTML + CSS + tek bir JS dosyası.
- Fontlar Google Fonts üzerinden (Inter); internet yoksa sistem fontuna düşer.
- Erişilebilirlik: semantik başlık hiyerarşisi, klavye ile gezinilebilir menü,
  `prefers-reduced-motion` desteği.
- SEO: her sayfada benzersiz title/description, canonical, Organization + Service +
  FAQPage schema.org işaretlemesi, sitemap ve robots.

## Sonraki faz (henüz yok)

Yol haritasındaki bu maddeler bu sürümde bulunmuyor: sektör landing sayfaları,
canlı demo alanı (voice / chatbot), case study sayfaları, blog, analytics (GA4)
kurulumu, lead'lerin admin panele düşmesi.
