/* Soryen AI — arayüz etkileşimleri (bağımlılıksız) */
(function () {
  "use strict";

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

  /* Scroll ile içerik belirme */
  var targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  Array.prototype.forEach.call(targets, function (el, i) {
    el.style.transitionDelay = Math.min(i % 8, 6) * 45 + "ms";
    io.observe(el);
  });
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
