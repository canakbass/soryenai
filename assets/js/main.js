/* Soryen AI — arayüz etkileşimleri (bağımlılıksız) */
(function () {
  "use strict";

  /* JS çalışıyor: belirme animasyonları ancak bu sınıf varsa devreye girer */
  document.documentElement.classList.add("js");

  /* Mobil menü */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Scroll ile içerik belirme.
     IntersectionObserver yerine doğrudan konum ölçümü kullanılır: bazı
     ortamlarda observer geç tetiklenip içeriği görünmez bırakabiliyor. */
  var hedefler = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var akislar = Array.prototype.slice.call(document.querySelectorAll(".flow"));

  hedefler.forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 8, 6) * 45 + "ms";
  });

  function goster(el) {
    if (el.classList.contains("is-in")) return;

    if (el.classList.contains("flow")) {
      var adimlar = el.querySelectorAll(".flow__step, .flow__arrow");
      Array.prototype.forEach.call(adimlar, function (adim, i) {
        adim.style.transitionDelay = i * 70 + "ms";
      });
    }
    el.classList.add("is-in");
  }

  function tara() {
    var esik = window.innerHeight * 0.94;

    hedefler = hedefler.filter(function (el) {
      if (el.getBoundingClientRect().top > esik) return true;
      goster(el);
      return false;
    });

    akislar = akislar.filter(function (el) {
      if (el.getBoundingClientRect().top > esik) return true;
      goster(el);
      return false;
    });
  }

  var taramaBekliyor = false;

  function taramaPlanla() {
    if (taramaBekliyor) return;
    taramaBekliyor = true;
    window.requestAnimationFrame(function () {
      taramaBekliyor = false;
      tara();
    });
  }

  window.addEventListener("scroll", taramaPlanla, { passive: true });
  window.addEventListener("resize", taramaPlanla);
  window.addEventListener("load", tara);
  tara();
})();

/* Lead formu — statik sitede backend olmadan çalışır.
   Gönderimde bilgileri derleyip e-posta taslağı açar.
   Gerçek bir form servisine (Formspree / Netlify Forms / kendi API'niz)
   bağlamak için aşağıdaki ENDPOINT değerini doldurmanız yeterli. */
(function () {
  "use strict";

  var ENDPOINT = ""; // örn: "https://formspree.io/f/xxxxxxx"
  var MAIL_TO = "info@soryen.com";

  var form = document.getElementById("lead-form");
  if (!form) return;

  var note = document.getElementById("form-note");

  function say(msg, isError) {
    if (!note) return;
    note.textContent = msg;
    note.className = "form__note" + (isError ? " is-error" : "");
  }

  function collect() {
    var d = new FormData(form);
    return {
      ad: (d.get("ad") || "").trim(),
      sirket: (d.get("sirket") || "").trim(),
      telefon: (d.get("telefon") || "").trim(),
      eposta: (d.get("eposta") || "").trim(),
      sektor: d.get("sektor") || "",
      ihtiyac: d.get("ihtiyac") || "",
      hacim: d.get("hacim") || "-",
      aciklama: (d.get("aciklama") || "").trim()
    };
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      say("Lütfen zorunlu alanları doldurun.", true);
      return;
    }

    var v = collect();

    if (ENDPOINT) {
      say("Gönderiliyor…");
      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(v)
      })
        .then(function (r) {
          if (!r.ok) throw new Error("network");
          form.reset();
          say("Talebiniz alındı. En kısa sürede dönüş yapacağız.");
        })
        .catch(function () {
          say("Gönderilemedi. Lütfen doğrudan " + MAIL_TO + " adresine yazın.", true);
        });
      return;
    }

    var govde =
      "Ad Soyad: " + v.ad + "\n" +
      "Şirket: " + v.sirket + "\n" +
      "Telefon: " + v.telefon + "\n" +
      "E-posta: " + v.eposta + "\n" +
      "Sektör: " + v.sektor + "\n" +
      "İhtiyaç: " + v.ihtiyac + "\n" +
      "Aylık hacim: " + v.hacim + "\n\n" +
      "Açıklama:\n" + v.aciklama;

    window.location.href =
      "mailto:" + MAIL_TO +
      "?subject=" + encodeURIComponent("Keşif görüşmesi talebi — " + v.sirket) +
      "&body=" + encodeURIComponent(govde);

    say("E-posta uygulamanız açılıyor. Açılmazsa " + MAIL_TO + " adresine yazabilirsiniz.");
  });
})();

/* Hareket katmanı: okuma göstergesi, kompakt header, imleç aydınlatması,
   akış diyagramının adım adım belirmesi. Tümü bağımlılıksız ve
   prefers-reduced-motion tercihine saygılı. */
(function () {
  "use strict";

  var azalt = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- okuma göstergesi + kompakt header --- */
  var bar = document.getElementById("scroll-progress");
  var header = document.getElementById("site-header");
  var bekliyor = false;

  function scrollUyarla() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
    }
    if (header) header.classList.toggle("is-compact", y > 40);

    bekliyor = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (bekliyor) return;
      bekliyor = true;
      window.requestAnimationFrame(scrollUyarla);
    },
    { passive: true }
  );
  scrollUyarla();

  if (azalt) return;

  /* --- imleç konumuna göre hafif aydınlatma --- */
  var kartlar = document.querySelectorAll(".svc-card, .cell");

  Array.prototype.forEach.call(kartlar, function (kart) {
    kart.addEventListener(
      "pointermove",
      function (e) {
        var r = kart.getBoundingClientRect();
        kart.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        kart.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      },
      { passive: true }
    );
  });

})();

