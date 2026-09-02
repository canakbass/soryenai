/* =============================================================================
   Soryen AI — Statik site üreticisi
   Kullanım:  node build/build.js
   Çıktı:     index.html, cozumler/*.html, kvkk.html, 404.html, sitemap.xml
   ========================================================================== */

const fs = require("fs");
const path = require("path");
const D = require("./data.js");

const ROOT = path.join(__dirname, "..");
const BASE_URL = "https://soryen.com/ai"; // yayına alırken kendi adresinizle değiştirin

/* ------------------------------------------------------------- yardımcılar */

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const write = (rel, html) => {
  const file = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf8");
  console.log("  ✓ " + rel);
};

const ARROW =
  '<span class="svc-card__go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>';

/* ------------------------------------------------------------ ortak parçalar */

function head(opts) {
  const p = opts.depth ? "../" : "";
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(opts.title)}</title>
<meta name="description" content="${esc(opts.desc)}">
<link rel="canonical" href="${BASE_URL}/${opts.canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(D.site.brand)}">
<meta property="og:title" content="${esc(opts.title)}">
<meta property="og:description" content="${esc(opts.desc)}">
<meta property="og:locale" content="tr_TR">
<meta name="theme-color" content="#0a0a0a">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${p}assets/css/style.css">
${opts.schema ? '<script type="application/ld+json">' + JSON.stringify(opts.schema) + "</script>" : ""}
</head>
<body>`;
}

function header(depth) {
  const p = depth ? "../" : "";
  const h = depth ? p + "index.html" : "";
  return `
<div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
<header class="site-header" id="site-header">
  <div class="wrap site-header__inner">
    <a class="logo" href="${p}index.html"><span class="logo__mark"></span> Soryen<span class="muted">&nbsp;AI</span></a>
    <nav class="nav" id="nav">
      <a href="${h}#cozumler">AI Çözümleri</a>
      <a href="${h}#senaryolar">Senaryolar</a>
      <a href="${h}#sektorler">Sektörler</a>
      <a href="${h}#surec">Nasıl Çalışır?</a>
      <a href="${h}#iletisim">İletişim</a>
    </nav>
    <a class="btn btn--solid" href="${h}#iletisim">Projenizi Konuşalım</a>
    <button class="nav-toggle" aria-label="Menü" aria-expanded="false" aria-controls="nav">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>`;
}

function footer(depth) {
  const p = depth ? "../" : "";
  const h = depth ? p + "index.html" : "";
  const half = Math.ceil(D.categories.length / 2);
  const col = (list) =>
    list.map((c) => `<li><a href="${p}cozumler/${c.slug}.html">${esc(c.title)}</a></li>`).join("");

  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-col">
        <a class="logo" href="${p}index.html"><span class="logo__mark"></span> Soryen<span class="muted">&nbsp;AI</span></a>
        <p class="cell__text" style="margin-top:18px;max-width:280px">${esc(D.site.positioning)}</p>
      </div>
      <div class="footer-col">
        <div class="footer-col__head">Çözümler</div>
        <ul>${col(D.categories.slice(0, half))}</ul>
      </div>
      <div class="footer-col">
        <div class="footer-col__head">&nbsp;</div>
        <ul>${col(D.categories.slice(half))}</ul>
      </div>
      <div class="footer-col">
        <div class="footer-col__head">İletişim</div>
        <ul>
          <li><a href="mailto:${D.site.email}">${esc(D.site.email)}</a></li>
          <li><a href="tel:${D.site.phone.replace(/[^0-9+]/g, "")}">${esc(D.site.phone)}</a></li>
          <li><a href="${h}#iletisim">Keşif görüşmesi</a></li>
          <li><a href="${p}kvkk.html">KVKK &amp; Gizlilik</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${esc(D.site.brand)}. Tüm hakları saklıdır.</span>
      <span>${esc(D.site.domain)}</span>
    </div>
  </div>
</footer>
<script src="${p}assets/js/main.js"></script>
</body>
</html>`;
}

function marquee() {
  const sozler = [
    "Gerçek görevleri tamamlayan yapay zekâ",
    "Telefon · WhatsApp · Instagram · Web · E-posta",
    "Mevcut sistemlerinize entegre",
    "Kritik adımlarda insan onayı",
    "Tek müşteri hafızası, tüm kanallar",
    "Kurulumdan ölçüme kadar uçtan uca",
  ];
  const grup =
    '<div class="marquee__group">' +
    sozler.map((t) => `<span class="marquee__dot"></span><span class="marquee__item">${esc(t)}</span>`).join("") +
    "</div>";
  return `
      <div class="marquee fade-up" aria-hidden="true">
        <div class="marquee__track">${grup}${grup}</div>
      </div>`;
}

function eyebrow(num, text) {
  const on = num ? `<span class="eyebrow__num">${num}</span><span class="eyebrow__sep">/</span>` : "";
  return `<p class="eyebrow">${on}<span>${esc(text)}</span></p>`;
}

/* ------------------------------------------------------------- ANA SAYFA -- */

function buildIndex() {
  const svcRows = D.categories
    .map(
      (c) => `
      <a class="svc-card" href="cozumler/${c.slug}.html" aria-label="${esc(c.title)} — detayları görüntüle">
        <span class="svc-card__num">${c.num}</span>
        <span class="svc-card__body">
          <span class="svc-card__title">${esc(c.title)}</span>
          <span class="svc-card__desc">${esc(c.short)}</span>
        </span>
        ${ARROW}
      </a>`
    )
    .join("");

  const cases = D.useCases
    .map(
      (u) => `
      <div class="cell reveal">
        <div class="cell__title">${esc(u.title)}</div>
        <ol class="mini-flow">${u.flow.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      </div>`
    )
    .join("");

  const steps = D.process
    .map(
      (s) => `
      <div class="cell reveal">
        <div class="cell__num">${s.num}</div>
        <div class="cell__title">${esc(s.title)}</div>
        <p class="cell__text">${esc(s.text)}</p>
      </div>`
    )
    .join("");

  const whyItems = D.why
    .map(
      (w) => `
      <div class="stack__item reveal">
        <div class="stack__title">${esc(w.title)}</div>
        <p class="stack__text">${esc(w.text)}</p>
      </div>`
    )
    .join("");

  const trustItems = D.trust
    .map(
      (t) => `
      <div class="cell reveal">
        <div class="cell__title">${esc(t.title)}</div>
        <p class="cell__text">${esc(t.text)}</p>
      </div>`
    )
    .join("");

  const integrationRows = D.integrations
    .map(
      (i) => `
      <div class="int-row reveal"><span class="int-row__head">${esc(i.head)}</span><span class="int-row__items">${esc(i.items)}</span></div>`
    )
    .join("");

  const levelRows = D.levels
    .map(
      (l, i) => `
      <div class="stack__item reveal">
        <div class="stack__title"><span class="svc-row__num" style="margin-right:14px">0${i + 1}</span>${esc(l.name)}</div>
        <p class="stack__text">${esc(l.text)}</p>
      </div>`
    )
    .join("");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: D.site.brand,
    url: BASE_URL,
    description: D.site.intro,
    email: D.site.email,
    makesOffer: D.categories.map((c) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: c.title, description: c.short },
    })),
  };

  const html = `${head({
    title: "Soryen AI — İşletmeniz için çalışan yapay zekâ sistemleri",
    desc: D.site.intro,
    canonical: "index.html",
    schema,
  })}
${header(0)}

<main>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="wrap">
      <div class="fade-up">${eyebrow("01", "AI Sistemleri & Agentlar")}</div>
      <h1 class="display">
        <span class="line-mask"><span>İşletmeniz için</span></span>
        <span class="line-mask"><span>çalışan yapay zekâ</span></span>
        <span class="line-mask"><span>sistemleri.</span></span>
      </h1>
      <p class="lead fade-up">${esc(D.site.intro)}</p>
      <div class="hero__actions fade-up">
        <a class="btn btn--solid btn--lg" href="#iletisim">Projenizi Konuşalım</a>
        <a class="btn btn--lg" href="#cozumler">AI Çözümlerini Gör</a>
      </div>
      ${marquee()}
    </div>
  </section>

  <section class="section" id="cozumler">
    <div class="wrap">
      <div class="index-head">
        <div>
          ${eyebrow("02", "AI Çözümleri")}
          <h2 class="h2">Yapay Zekâ &amp;<br>Akıllı Sistemler</h2>
        </div>
        <p class="lead" style="margin:0">İletişimden karar destek süreçlerine kadar gerçek görevleri yerine getiren, mevcut sistemlerinizle entegre ve ihtiyaca özel yapay zekâ sistemleri geliştiriyoruz.</p>
      </div>
      <div class="svc-grid">${svcRows}</div>
    </div>
  </section>

  <section class="section" id="senaryolar">
    <div class="wrap">
      ${eyebrow("03", "Senaryolar")}
      <div class="index-head">
        <h2 class="h2">Müşteri geldiğinde<br>ne oluyor?</h2>
        <p class="lead" style="margin:0">Teknolojiyi anlatmak yerine akışı gösteriyoruz. Aşağıdaki senaryoların her biri, bugün işletmelerde elle yürütülen süreçlerin sistemleştirilmiş hâli.</p>
      </div>
      <div class="grid-4">${cases}</div>
    </div>
  </section>

  <section class="section" id="fark">
    <div class="wrap">
      ${eyebrow("04", "Yaklaşımımız")}
      <div class="split split--sticky">
        <div>
          <h2 class="h2">Tek bot değil,<br>çalışan bir sistem.</h2>
          <p class="lead">Aynı müşterinin telefon, WhatsApp, Instagram ve web geçmişi tek akışta yönetilir; görevler birbirine bağlı agentlar tarafından tamamlanır.</p>
        </div>
        <div class="stack">${whyItems}</div>
      </div>
    </div>
  </section>

  <section class="section" id="sektorler">
    <div class="wrap">
      ${eyebrow("05", "Sektörler")}
      <div class="index-head">
        <h2 class="h2">Sektörünüzün<br>diliyle çalışır.</h2>
        <p class="lead" style="margin:0">Aynı teknoloji her sektörde farklı bir problemi çözer. Sistemi, sizin randevu, satış ve operasyon akışınıza göre kuruyoruz.</p>
      </div>
      <div class="chips">${D.sectors.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
    </div>
  </section>

  <section class="section" id="surec">
    <div class="wrap">
      ${eyebrow("06", "Nasıl Çalışır?")}
      <div class="index-head">
        <h2 class="h2">Dört adımda<br>devreye alıyoruz.</h2>
        <p class="lead" style="margin:0">Uzun analiz süreçleri yerine, ölçülebilir tek bir kullanım senaryosuyla başlıyoruz. Sonuç alındıkça kapsamı büyütüyoruz.</p>
      </div>
      <div class="grid-4">${steps}</div>
    </div>
  </section>

  <section class="section" id="guven">
    <div class="wrap">
      ${eyebrow("07", "Güven & Kontrol")}
      <div class="index-head">
        <h2 class="h2">Yapay zekâ çalışır,<br>kontrol sizde kalır.</h2>
        <p class="lead" style="margin:0">Kurumsal kullanımda asıl soru “yapay zekâ konuşabiliyor mu?” değil; “sınırları belli mi, denetlenebiliyor mu, gerektiğinde insan devralıyor mu?” sorusudur.</p>
      </div>
      <div class="grid-3">${trustItems}</div>
    </div>
  </section>

  <section class="section" id="entegrasyon">
    <div class="wrap">
      ${eyebrow("08", "Entegrasyonlar")}
      <div class="split">
        <div>
          <h2 class="h2">Mevcut<br>sistemlerinize<br>bağlanır.</h2>
          <p class="lead">Yazılımınızı değiştirmenizi istemiyoruz. Kullandığınız CRM, ERP, takvim ve mesajlaşma altyapısı neyse ona entegre oluyoruz.</p>
        </div>
        <div class="int-list">${integrationRows}</div>
      </div>
    </div>
  </section>

  <section class="section" id="paketler">
    <div class="wrap">
      ${eyebrow("09", "Çalışma Modeli")}
      <div class="split split--sticky">
        <div>
          <h2 class="h2">Kapsamı<br>ihtiyacınız<br>belirler.</h2>
          <p class="lead">Tek bir kanalla başlayıp sonuç aldıkça büyüyen bir yol izliyoruz. Aşağıdaki seviyeler, projelerin genel olarak konumlandığı çerçevedir.</p>
        </div>
        <div class="stack">${levelRows}</div>
      </div>
    </div>
  </section>

  <section class="section" id="iletisim">
    <div class="wrap">
      ${eyebrow("10", "İletişim")}
      <div class="split">
        <div>
          <h2 class="h2">İhtiyacınızı anlatın,<br>size uygun AI<br>mimarisini çıkaralım.</h2>
          <p class="lead">Ne istediğinizi tam olarak bilmeniz gerekmiyor. Kısa bir keşif görüşmesinde hangi sürecin yapay zekâya devredilmeye değer olduğunu birlikte netleştiriyoruz.</p>
          <div class="hero__actions">
            <a class="btn" href="mailto:${D.site.email}">${esc(D.site.email)}</a>
            <a class="btn" href="tel:${D.site.phone.replace(/[^0-9+]/g, "")}">${esc(D.site.phone)}</a>
          </div>
        </div>

        <form class="form" id="lead-form" novalidate>
          <div class="form__row">
            <label class="field"><span>Ad Soyad *</span><input type="text" name="ad" required></label>
            <label class="field"><span>Şirket *</span><input type="text" name="sirket" required></label>
          </div>
          <div class="form__row">
            <label class="field"><span>Telefon / WhatsApp *</span><input type="tel" name="telefon" required></label>
            <label class="field"><span>E-posta *</span><input type="email" name="eposta" required></label>
          </div>
          <div class="form__row">
            <label class="field"><span>Sektör *</span>
              <select name="sektor" required>
                <option value="">Seçiniz</option>
                ${D.sectors.map((s) => `<option>${esc(s)}</option>`).join("")}
                <option>Diğer</option>
              </select>
            </label>
            <label class="field"><span>İhtiyaç *</span>
              <select name="ihtiyac" required>
                <option value="">Seçiniz</option>
                ${D.categories.map((c) => `<option>${esc(c.title)}</option>`).join("")}
                <option>Emin değilim</option>
              </select>
            </label>
          </div>
          <label class="field"><span>Aylık iletişim hacminiz</span>
            <select name="hacim">
              <option value="">Belirtmek istemiyorum</option>
              <option>Günde 50'den az</option>
              <option>Günde 50-200</option>
              <option>Günde 200-1000</option>
              <option>Günde 1000+</option>
            </select>
          </label>
          <label class="field"><span>Kısa açıklama *</span><textarea name="aciklama" rows="4" required placeholder="Hangi süreci otomatikleştirmek istiyorsunuz?"></textarea></label>
          <label class="check"><input type="checkbox" name="onay" required> <span>Bilgilerimin görüşme amacıyla işlenmesini kabul ediyorum. <a href="kvkk.html">KVKK Aydınlatma Metni</a></span></label>
          <div class="form__actions">
            <button class="btn btn--solid btn--lg" type="submit">Keşif Görüşmesi Talep Et</button>
            <a class="btn btn--lg" id="wa-link" href="https://wa.me/${D.site.whatsapp.replace(/[^0-9]/g, "")}" target="_blank" rel="noopener">WhatsApp'tan Yaz</a>
          </div>
          <p class="form__note" id="form-note" role="status"></p>
        </form>
      </div>
    </div>
  </section>
</main>
${footer(0)}`;

  write("index.html", html);
}

/* --------------------------------------------------------- HİZMET SAYFASI -- */

function buildCategory(c, i) {
  const prev = D.categories[(i - 1 + D.categories.length) % D.categories.length];
  const next = D.categories[(i + 1) % D.categories.length];

  const groups = c.groups
    .map(
      (g, gi) => `
    <div class="group">
      <div class="group__head">
        <div class="reveal">
          <div class="group__num">${String(gi + 1).padStart(2, "0")}</div>
          <h3 class="h3">${esc(g.title)}</h3>
          <p class="group__text">${esc(g.text)}</p>
        </div>
        <ul class="feat-list reveal">${g.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
      </div>
    </div>`
    )
    .join("");

  const flow = `
    <div class="flow reveal">
      <div class="flow__label">${esc(c.flow.label)}</div>
      ${c.flow.steps
        .map((s, si) => (si ? '<span class="flow__arrow">→</span>' : "") + `<span class="flow__step">${esc(s)}</span>`)
        .join("")}
    </div>`;

  const scenarios = c.scenarios
    .map(
      (s) => `
      <div class="cell reveal">
        <div class="cell__num">${esc(s.s)}</div>
        <p class="cell__text">${esc(s.t)}</p>
      </div>`
    )
    .join("");

  const faq = c.faq
    .map(
      (f) => `
      <details class="faq reveal">
        <summary>${esc(f.q)}</summary>
        <p>${esc(f.a)}</p>
      </details>`
    )
    .join("");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.title + " — " + D.site.brand,
      description: c.meta,
      provider: { "@type": "Organization", name: D.site.brand, url: BASE_URL },
      areaServed: "TR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.title,
        itemListElement: c.groups.map((g) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: g.title },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const html = `${head({
    title: c.title + " — " + D.site.brand,
    desc: c.meta,
    canonical: "cozumler/" + c.slug + ".html",
    depth: 1,
    schema,
  })}
${header(1)}

<main>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="wrap">
      <div class="fade-up">${eyebrow(c.num, c.title)}</div>
      <h1 class="display"><span class="line-mask"><span>${esc(c.title)}</span></span></h1>
      <p class="lead fade-up">${esc(c.intro)}</p>
      <div class="hero__actions fade-up">
        <a class="btn btn--solid btn--lg" href="../index.html#iletisim">Projenizi Konuşalım</a>
        <a class="btn btn--lg" href="../index.html#cozumler">Tüm AI Çözümleri</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="split">
        <div class="reveal">
          <div class="group__num">Problem</div>
          <h2 class="h3">Bugün nasıl yürüyor?</h2>
          <p class="group__text">${esc(c.problem)}</p>
        </div>
        <div class="reveal">
          <div class="group__num">Çözüm</div>
          <h2 class="h3">Soryen AI ne yapıyor?</h2>
          <p class="group__text" style="max-width:none">${esc(c.solution)}</p>
        </div>
      </div>
      ${flow}
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${eyebrow("", "Yetenekler")}
      <h2 class="h2 reveal">Neler yapabilir?</h2>
      ${groups}
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${eyebrow("", "Kullanım Senaryoları")}
      <div class="index-head">
        <h2 class="h2">Sektöre göre<br>kullanım.</h2>
        <p class="lead" style="margin:0">Aynı sistem, sektörünüzün akışına göre farklı kurgulanır.</p>
      </div>
      <div class="grid-4">${scenarios}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="split">
        <div>
          ${eyebrow("", "Kanallar & İnsan Kontrolü")}
          <h2 class="h2">Nerede çalışır,<br>nerede durur?</h2>
          <p class="lead">Sistemin çalıştığı kanallar ve insana devrettiği noktalar proje başında birlikte tanımlanır.</p>
          <div class="chips" style="margin-top:34px">${c.channels.map((ch) => `<span class="chip">${esc(ch)}</span>`).join("")}</div>
        </div>
        <div class="stack">
          ${c.control.map((x) => `<div class="stack__item reveal"><div class="stack__title" style="margin:0;font-weight:500;font-size:15.5px">${esc(x)}</div></div>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${eyebrow("", "Sık Sorulan Sorular")}
      <div class="split">
        <h2 class="h2">Merak edilenler</h2>
        <div class="faq-list">${faq}</div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="wrap">
      <h2 class="h2">${esc(c.title)} sisteminizi kuralım.</h2>
      <p class="lead">Kısa bir keşif görüşmesinde mevcut sürecinizi dinleyip size uygun mimariyi çıkaralım.</p>
      <div class="cta__actions">
        <a class="btn btn--solid btn--lg" href="../index.html#iletisim">Keşif Görüşmesi Talep Et</a>
        <a class="btn btn--lg" href="https://wa.me/${D.site.whatsapp.replace(/[^0-9]/g, "")}" target="_blank" rel="noopener">WhatsApp'tan Yaz</a>
      </div>
    </div>
  </section>

  <nav class="pager" aria-label="Diğer çözümler">
    <a class="pager__link" href="${prev.slug}.html">
      <div class="pager__dir">← Önceki</div>
      <div class="pager__title">${esc(prev.title)}</div>
    </a>
    <a class="pager__link pager__link--next" href="${next.slug}.html">
      <div class="pager__dir">Sonraki →</div>
      <div class="pager__title">${esc(next.title)}</div>
    </a>
  </nav>
</main>
${footer(1)}`;

  write("cozumler/" + c.slug + ".html", html);
}

/* ------------------------------------------------------------ YAN SAYFALAR */

function buildKvkk() {
  const html = `${head({
    title: "KVKK Aydınlatma Metni & Gizlilik — " + D.site.brand,
    desc: "Soryen AI web sitesi üzerinden iletilen kişisel verilerin işlenmesine ilişkin aydınlatma metni ve gizlilik politikası.",
    canonical: "kvkk.html",
  })}
${header(0)}
<main>
  <section class="hero">
    <div class="wrap">
      ${eyebrow("", "Yasal")}
      <h1 class="display" style="font-size:clamp(36px,5vw,64px)">KVKK Aydınlatma Metni<br>&amp; Gizlilik Politikası</h1>
      <p class="lead">Bu sayfa taslak niteliğindedir. Yayına almadan önce şirket unvanı, adres, veri sorumlusu bilgileri ve saklama süreleri doldurulmalı; metin hukuk danışmanınız tarafından onaylanmalıdır.</p>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <div class="legal">
        <h2 class="h3">1. Veri sorumlusu</h2>
        <p>Bu web sitesi üzerinden iletilen kişisel veriler bakımından veri sorumlusu <strong>[şirket unvanı]</strong>'dır. Adres: [adres]. İletişim: ${esc(D.site.email)}</p>

        <h2 class="h3">2. İşlenen kişisel veriler</h2>
        <p>İletişim formu aracılığıyla ad soyad, şirket adı, telefon numarası, e-posta adresi, sektör bilgisi ve serbest metin alanında paylaştığınız bilgiler işlenmektedir.</p>

        <h2 class="h3">3. İşleme amacı ve hukuki sebebi</h2>
        <p>Veriler yalnızca talebinizin değerlendirilmesi, tarafınıza dönüş yapılması, keşif görüşmesi planlanması ve teklif sunulması amacıyla işlenir. Hukuki sebep, sözleşmenin kurulması için gerekli olması ve meşru menfaattir.</p>

        <h2 class="h3">4. Saklama süresi</h2>
        <p>Veriler, talebin sonuçlanmasını takiben [süre] boyunca saklanır; sürenin sonunda silinir veya anonim hâle getirilir.</p>

        <h2 class="h3">5. Aktarım</h2>
        <p>Veriler; barındırma, e-posta ve müşteri ilişkileri yönetimi hizmeti alınan tedarikçilerle, yalnızca hizmetin gerektirdiği ölçüde paylaşılabilir. Projelerde kullanılan yapay zekâ sağlayıcıları müşteriye proje bazında bildirilir.</p>

        <h2 class="h3">6. Haklarınız</h2>
        <p>KVKK'nın 11. maddesi uyarınca kişisel verilerinize erişme, düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi ${esc(D.site.email)} adresine iletebilirsiniz.</p>

        <h2 class="h3">7. Çerezler</h2>
        <p>Site, temel işlevsellik ve ziyaret istatistikleri için çerez kullanabilir. Tarayıcı ayarlarınızdan çerezleri sınırlandırabilirsiniz.</p>
      </div>
    </div>
  </section>
</main>
${footer(0)}`;
  write("kvkk.html", html);
}

function build404() {
  const html = `${head({ title: "Sayfa bulunamadı — " + D.site.brand, desc: "Aradığınız sayfa bulunamadı.", canonical: "404.html" })}
${header(0)}
<main>
  <section class="cta" style="padding:160px 0">
    <div class="wrap">
      ${eyebrow("404", "Sayfa bulunamadı")}
      <h1 class="display">Aradığınız sayfa<br>burada değil.</h1>
      <p class="lead">Bağlantı değişmiş veya sayfa kaldırılmış olabilir.</p>
      <div class="cta__actions">
        <a class="btn btn--solid btn--lg" href="index.html">Ana Sayfa</a>
        <a class="btn btn--lg" href="index.html#cozumler">AI Çözümleri</a>
      </div>
    </div>
  </section>
</main>
${footer(0)}`;
  write("404.html", html);
}

function buildSeoFiles() {
  const urls = ["index.html", "kvkk.html"].concat(D.categories.map((c) => "cozumler/" + c.slug + ".html"));
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${BASE_URL}/${u}</loc><lastmod>${today}</lastmod><priority>${u === "index.html" ? "1.0" : "0.8"}</priority></url>`
  )
  .join("\n")}
</urlset>
`;
  write("sitemap.xml", xml);
  write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`);
}

/* ------------------------------------------------------------------ çalıştır */

console.log("\nSoryen AI — site üretiliyor…\n");
buildIndex();
D.categories.forEach(buildCategory);
buildKvkk();
build404();
buildSeoFiles();
console.log("\nTamamlandı: " + (D.categories.length + 4) + " sayfa + sitemap/robots\n");
