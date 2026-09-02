/* Soryen AI — Arayüz Etkileşimleri (Lenis & GSAP) */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* --- 1. Mobil menü --- */
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

  /* --- 2. Lenis Smooth Scroll --- */
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  let lenis;
  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* --- 3. GSAP & ScrollTrigger Animasyonları --- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);
    }

    const lineMasks = document.querySelectorAll(".hero .line-mask span");
    if (lineMasks.length > 0) {
      gsap.fromTo(lineMasks, 
        { y: "110%", opacity: 0 }, 
        { y: "0%", opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );
    }

    const heroFades = document.querySelectorAll(".hero .fade-up");
    if (heroFades.length > 0) {
      gsap.fromTo(heroFades,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.8 }
      );
    }

    gsap.utils.toArray(".reveal").forEach((elem) => {
      gsap.fromTo(elem, 
        { y: 40, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out", 
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray(".flow").forEach((flowElem) => {
      const steps = flowElem.querySelectorAll(".flow__step, .flow__arrow");
      if (steps.length > 0) {
        gsap.fromTo(steps, 
          { x: -10, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: flowElem,
              start: "top 90%"
            }
          }
        );
      }
    });

    const heroBg = document.querySelector(".hero__bg");
    if (heroBg) {
      gsap.to(heroBg, {
        y: "30%", 
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    gsap.utils.toArray(".bento-grid").forEach((grid) => {
      const cells = grid.querySelectorAll(".bento-cell");
      gsap.fromTo(cells, 
        { y: 80, opacity: 0, scale: 0.9, rotationX: 15 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          rotationX: 0,
          duration: 1.4, 
          stagger: 0.15, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%"
          }
        }
      );
    });
    
    gsap.to(".orb-bg", {
      rotation: 360,
      transformOrigin: "center center",
      duration: 30,
      repeat: -1,
      ease: "none"
    });
    
  } else {
    const reveals = document.querySelectorAll('.reveal, .fade-up');
    reveals.forEach(el => el.style.opacity = 1);
  }

  /* --- 4. İmleç Aydınlatması (Spotlight efekti) --- */
  if (!prefersReducedMotion) {
    var kartlar = document.querySelectorAll(".svc-card, .cell, .bento-cell");

    kartlar.forEach(function (kart) {
      kart.addEventListener("pointermove", function (e) {
        var r = kart.getBoundingClientRect();
        kart.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        kart.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      }, { passive: true });
    });
  }

  /* --- 5. Okuma Göstergesi ve Kompakt Header --- */
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

  /* --- 6. Lead Formu Gönderimi --- */
  var ENDPOINT = ""; 
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

// AI Çözümleri Grid Animasyonu
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.utils.toArray(".svc-grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".svc-card");
    gsap.fromTo(cards, 
      { y: 60, opacity: 0, scale: 0.95 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%"
        }
      }
    );
  });
}

/* =======================================================

/* =======================================================
   PREMIUM BUTTON & CARD EFFECTS (Manyetik Etki)
   ======================================================= */
(function() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth <= 768 || 'ontouchstart' in window) return;

  // Manyetik Butonlar ve Kartlar (Magnetic Effect)
  const btns = document.querySelectorAll('.btn, .nav__btn, .svc-card');
  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      const w = rect.height / 2;
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - w;
      
      // svc-card'lar çok büyük olduğu için efekti biraz daha hafif tutuyoruz
      const multiplier = btn.classList.contains('svc-card') ? 0.1 : 0.3;

      gsap.to(btn, {
        x: x * multiplier,
        y: y * multiplier,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
})();
