/* =============================================================================
   Soryen AI — SİTE İÇERİĞİ
   Sitedeki tüm metinler bu dosyadadır. Değiştirdikten sonra:  node build/build.js
   ========================================================================== */

const site = {
  brand: "Soryen AI",
  domain: "soryen.com",
  email: "info@soryen.com",
  phone: "+90 (000) 000 00 00",
  whatsapp: "+90 (000) 000 00 00",
  positioning: "Yapay zekâyı işletmenize entegre ediyoruz.",
  intro:
    "Müşterilerinizle konuşan, satış yapan, randevu oluşturan, verileri analiz eden ve iş süreçlerini yöneten; şirketinize özel yapay zekâ sistemleri geliştiriyoruz.",
  strip: ["Telefon", "WhatsApp", "Instagram", "Web", "E-posta", "CRM", "ERP"],
};

const process = [
  {
    num: "01",
    title: "Keşif",
    text: "Süreçlerinizi dinliyoruz. Hangi işin yapay zekâya devredilmeye değer olduğunu, hangisinin olmadığını birlikte netleştiriyoruz.",
  },
  {
    num: "02",
    title: "Tasarım",
    text: "Konuşma akışları, karar kuralları, insana devir noktaları ve entegrasyon şeması çıkarılıyor. Neyi yapacağı kadar neyi yapmayacağı da tanımlanıyor.",
  },
  {
    num: "03",
    title: "Entegrasyon",
    text: "Sistem; CRM'inize, takviminize, panelinize, telefon santralinize ve mesajlaşma kanallarınıza bağlanıyor. Var olan düzeni bozmuyoruz.",
  },
  {
    num: "04",
    title: "Ölçüm & İyileştirme",
    text: "Cevaplanan çağrı, oluşan randevu, nitelikli lead ve kazanılan saat üzerinden raporlanıyor; gerçek görüşmelerle sürekli iyileştiriliyor.",
  },
];

const why = [
  {
    title: "Cevap veren değil, işi bitiren sistemler",
    text: "Bizim kurduğumuz yapılar sadece soru yanıtlamaz; randevuyu oluşturur, CRM'e kaydı yazar, teklifi hazırlar, ilgili kişiye görevi atar.",
  },
  {
    title: "Tek müşteri hafızası, tüm kanallar",
    text: "Müşteri Instagram'dan yazıp ertesi gün WhatsApp'tan devam ettiğinde sistem konuşmayı sıfırdan başlatmaz, kaldığı yerden sürdürür.",
  },
  {
    title: "İnsan kontrolü elinizde",
    text: "Kritik adımlarda onay kuyruğu, denetim izi ve insan temsilciye devir kuralları tanımlıyoruz. Yapay zekâ sınırları belli bir alanda çalışır.",
  },
  {
    title: "Mevcut sistemlerinizle çalışır",
    text: "CRM, ERP, takvim, e-ticaret altyapısı ve özel panelleriniz neyse ona bağlanıyoruz. Sizden yazılımınızı değiştirmenizi istemiyoruz.",
  },
];

const sectors = [
  "Klinik & Sağlık", "Güzellik & Estetik", "Emlak", "Otomotiv", "Otel & Turizm",
  "Restoran & Kafe", "Eğitim & Kurs", "Lojistik & Kargo", "Sigorta", "Teknik Servis",
  "Hukuk & Danışmanlık", "E-ticaret", "Finans", "İnşaat & Proje",
];

const integrations = [
  { head: "CRM", items: "HubSpot, Salesforce, Pipedrive, Zoho, özel CRM" },
  { head: "Takvim", items: "Google Calendar, Outlook, Calendly" },
  { head: "Mesajlaşma", items: "WhatsApp Business API, Instagram, Messenger, Telegram" },
  { head: "İletişim", items: "Telefon santrali, SIP, SMS, e-posta" },
  { head: "E-ticaret", items: "Shopify, WooCommerce, Ticimax, İdeasoft" },
  { head: "Operasyon", items: "ERP, muhasebe yazılımları, veritabanı, özel paneller" },
  { head: "Otomasyon", items: "n8n, Make, Zapier, webhook, REST API" },
  { head: "Yapay zekâ", items: "OpenAI, Anthropic, Google Gemini, açık kaynak modeller" },
];

/* -------------------------------------------------------------------------- */
/*  8 ANA HİZMET KATEGORİSİ                                                    */
/* -------------------------------------------------------------------------- */

const categories = [
  {
    num: "01",
    slug: "sesli-ai-asistanlar",
    title: "Sesli AI Asistanlar",
    short: "Telefonu 7/24 açan, randevu oluşturan, arama yapan sesli yapay zekâ.",
    intro:
      "Telefonu açan, müşteriyi karşılayan, sorularını yanıtlayan, randevu oluşturan ve gerektiğinde insan temsilciye aktaran sesli yapay zekâ asistanları. Kaçan çağrı, mesai dışı kalan müşteri ve meşgul hat problemini ortadan kaldırır.",
    meta: "Telefonlarınızı 7/24 cevaplayan, randevu oluşturan ve giden arama yapabilen sesli yapay zekâ asistanları.",
    groups: [
      {
        title: "Gelen Arama AI Asistanı",
        text: "Mesai saati, öğle arası ve yoğunluk fark etmeksizin her çağrı ilk çalışta yanıtlanır.",
        items: [
          "Telefonları 7/24 cevaplama", "Müşteri karşılama", "Sık sorulan soruları yanıtlama",
          "Hizmet ve fiyat bilgisi verme", "Doğru departmana yönlendirme",
          "İnsan temsilciye canlı aktarma", "Çağrı sonrası özet ve kayıt",
        ],
      },
      {
        title: "Giden Arama AI Asistanı",
        text: "Listeyi verin, aramaları sistem yapsın; sadece anlamlı görüşmeler ekibinize düşsün.",
        items: [
          "Otomatik müşteri arama", "Lead arama ve ön temas", "Kampanya duyuru aramaları",
          "Müşteri geri kazanım aramaları", "Memnuniyet aramaları",
          "Randevu hatırlatma aramaları", "Tahsilat hatırlatmaları",
        ],
      },
      {
        title: "AI Randevu Asistanı",
        text: "Takvime bakar, uygun saati bulur, randevuyu oluşturur ve hatırlatmasını yapar.",
        items: [
          "Randevu oluşturma", "Takvim müsaitlik kontrolü", "Uygun saat önerme",
          "Randevu değiştirme", "Randevu iptali", "Otomatik hatırlatma",
          "Gelmeyen (no-show) müşteriyi tekrar arama",
        ],
      },
      {
        title: "AI Satış Temsilcisi",
        text: "Ön görüşmeyi yapar, ihtiyacı anlar, sıcak müşteriyi satış ekibine hazır teslim eder.",
        items: [
          "Potansiyel müşteriyle ön görüşme", "İhtiyaç analizi", "Lead niteliklendirme",
          "Ürün ve hizmet önerisi", "Sık gelen itirazları karşılama",
          "Teklif görüşmesine yönlendirme", "Sıcak lead'i satış ekibine aktarma",
        ],
      },
      {
        title: "AI Çağrı Merkezi",
        text: "Aynı anda yüzlerce görüşme; kuyruk, bekleme müziği ve kaçan çağrı olmadan.",
        items: [
          "Çoklu eş zamanlı görüşme", "Çok dilli görüşme", "Çağrı yoğunluğu yönetimi",
          "Çağrı kaydı", "Otomatik transkripsiyon", "Görüşme özeti",
          "Görüşme konu ve sonuç sınıflandırması",
        ],
      },
      {
        title: "Voice AI Analiz",
        text: "Her görüşme veriye dönüşür: müşteri ne istedi, nerede kaybettik, kim nasıl konuşuyor.",
        items: [
          "Konuşma duygu analizi", "Müşteri niyet analizi", "Satış fırsatı tespiti",
          "Şikâyet tespiti ve etiketleme", "Görüşme kalite skoru",
          "Temsilci performans analizi", "Konu bazlı çağrı raporları",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — kaçan çağrının randevuya dönmesi",
      steps: ["Gelen çağrı", "AI karşılama", "İhtiyaç tespiti", "Takvim kontrolü", "Randevu", "CRM kaydı", "SMS hatırlatma"],
    },
  },

  {
    num: "02",
    slug: "ai-chatbotlar",
    title: "AI Chatbotlar",
    short: "WhatsApp, Instagram, web ve Telegram'da satış yapan akıllı asistanlar.",
    intro:
      "Kanal kanal kurgulanmış, şirketinizin ürün ve hizmetlerini gerçekten bilen mesajlaşma asistanları. Klasik “anahtar kelime botu” değil; soruyu anlayan, teklif toplayan, randevu oluşturan ve gerektiğinde insana devreden sistemler.",
    meta: "WhatsApp, Instagram, web sitesi ve Telegram için satış ve destek yapan yapay zekâ chatbotları.",
    groups: [
      {
        title: "WhatsApp AI Asistanı",
        text: "Türkiye'de müşterinin ilk yazdığı yer. Cevap süresi saniyeye iner.",
        items: [
          "7/24 WhatsApp müşteri hizmetleri", "Ürün ve hizmet bilgisi", "Randevu oluşturma",
          "Teklif talebi toplama", "Sipariş sorgulama", "Kargo takibi",
          "Lead toplama ve CRM kaydı", "İnsan temsilciye aktarma",
        ],
      },
      {
        title: "Instagram AI Chatbot",
        text: "DM ve yorumlardan gelen talebi kaybetmeden satışa çevirir.",
        items: [
          "DM cevaplama", "Story yanıtlarını yönetme", "Ürün ve fiyat sorularını yanıtlama",
          "Telefon / e-posta bilgisi toplama", "Randevu oluşturma",
          "Yorum otomasyonu: “fiyat” yazana otomatik DM", "Satış temsilcisine yönlendirme",
        ],
      },
      {
        title: "Web Sitesi AI Chatbot",
        text: "Sitenizin tüm içeriğini bilen, ziyaretçiyi müşteriye çeviren danışman.",
        items: [
          "Site içeriğini bilen chatbot", "Ürün danışmanı", "Hizmet danışmanı",
          "Satış odaklı sohbet", "Teknik destek chatbotu", "Lead niteliklendirme",
          "Randevu ve teklif toplama",
        ],
      },
      {
        title: "Messenger & Telegram",
        text: "Topluluk, bayi ve iç operasyon kanallarınız da aynı zekâya bağlanır.",
        items: [
          "Facebook Messenger mesaj yanıtlama", "Kampanya yönlendirme", "Lead toplama",
          "Telegram destek botları", "Topluluk botları",
          "Bildirim ve duyuru sistemleri", "İç operasyon botları",
        ],
      },
      {
        title: "AI Müşteri Hizmetleri",
        text: "Destek ekibinizin tekrar eden yükünü alır, zor işleri insana bırakır.",
        items: [
          "7/24 destek asistanı", "Sorun tespiti ve çözüm önerisi", "Ticket oluşturma ve sınıflandırma",
          "Şikâyet tespiti ve aciliyet skoru", "Otomatik üst kademeye taşıma (escalation)",
          "Müşteri geri bildirim analizi", "Google yorumlarından iyileştirme çıkarımı",
        ],
      },
      {
        title: "Çok Kanallı AI Asistan",
        text: "Bizi klasik chatbot ajanslarından ayıran yer burası: kanal değişir, hafıza değişmez.",
        items: [
          "WhatsApp + Instagram + Web + E-posta + Telefon tek sistemde",
          "Tek müşteri hafızası", "Kanallar arası kesintisiz devam",
          "Tek yerden konuşma yönetimi", "Ortak CRM kaydı",
          "Kanal bazlı performans raporu",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — Instagram yorumundan randevuya",
      steps: ["Yoruma “fiyat” yazıldı", "Otomatik DM", "AI görüşme", "İhtiyaç analizi", "Randevu", "CRM + hatırlatma"],
    },
  },

  {
    num: "03",
    slug: "ai-agentlar",
    title: "AI Agentlar",
    short: "Sadece cevap vermeyen, görevi baştan sona tamamlayan dijital çalışanlar.",
    intro:
      "Bir AI agent; kendisine verilen görevi anlar, gerekli sistemlere bağlanır, adımları sırayla yürütür ve sonucu raporlar. Tek bir asistan değil, birlikte çalışan bir dijital ekip kurarız.",
    meta: "Görevleri baştan sona tamamlayan yapay zekâ agentları ve çoklu ajan (multi-agent) sistemleri.",
    groups: [
      {
        title: "Dijital Çalışanlar",
        text: "Her biri bir departmanın tekrar eden işini üstlenen özel görevli agentlar.",
        items: [
          "Sales Agent — satış sürecini yürütür", "Marketing Agent — kampanya ve içerik",
          "Support Agent — destek taleplerini yönetir", "Operations Agent — operasyonel görevler",
          "Finance Agent — finansal takip", "HR Agent — insan kaynakları süreçleri",
          "Research Agent — araştırma ve rapor", "Reporting Agent — veri analizi ve raporlama",
          "Scheduling Agent — takvim ve randevu", "Procurement Agent — tedarik süreçleri",
          "Logistics Agent — sipariş ve gönderi takibi", "Production Agent — üretim verisi takibi",
        ],
      },
      {
        title: "Çoklu AI Ajan Sistemleri",
        text: "Tek bir yapay zekâ değil; birbirine görev devreden bir AI ekibi kurulur.",
        items: [
          "Agent orkestrasyonu", "Görev devri ve zincirleme akış", "Ajanlar arası ortak hafıza",
          "Paralel görev yürütme", "Hata durumunda yeniden deneme",
          "Sonuçların tek panelde toplanması",
        ],
      },
      {
        title: "İnsan Onaylı Çalışma (Human-in-the-loop)",
        text: "Kurumsal kullanımda kritik olan taraf: sistem hazırlar, insan onaylar.",
        items: [
          "Onay kuyruğu", "Kritik adımda insana devir", "Denetim izi (audit log)",
          "Yetki ve rol bazlı sınırlar", "Güvenlik bariyerleri",
          "Onay öncesi taslak gösterimi",
        ],
      },
      {
        title: "Agent Yetenekleri",
        text: "Agentlar konuşmakla kalmaz; sistemlerinizde gerçek aksiyon alır.",
        items: [
          "CRM ve ERP üzerinde işlem yapma", "Takvim ve randevu yönetimi",
          "E-posta ve mesaj gönderimi", "Doküman ve teklif oluşturma",
          "Veritabanı sorgulama", "Web'den bilgi toplama",
          "Rapor üretme", "Görev ve hatırlatma oluşturma",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — çoklu ajan zinciri",
      steps: ["Lead Agent", "Sales Agent", "Appointment Agent", "CRM Agent", "Follow-up Agent"],
    },
  },

  {
    num: "04",
    slug: "satis-lead-ai",
    title: "Satış & Lead AI",
    short: "Lead'i niteliklendiren, sıcak müşteriyi bulan ve takibi bırakmayan sistemler.",
    intro:
      "Gelen her talebin ilk dakikada karşılandığı, sıcak müşterinin ayrıştırıldığı ve hiçbir takibin unutulmadığı bir satış hattı kurarız. Satış ekibiniz aramaya değer müşteriyle konuşur.",
    meta: "Lead niteliklendirme, lead skorlama, otomatik takip ve AI destekli satış süreçleri.",
    groups: [
      {
        title: "AI Lead Qualification",
        text: "Formdan gelen her talep saniyeler içinde analiz edilip sıraya girer.",
        items: [
          "Web formu ve reklam lead'lerini karşılama", "İhtiyaç ve bütçe analizi",
          "Uygunluk kontrolü", "Otomatik CRM kaydı", "Anında WhatsApp / e-posta / telefon teması",
          "Randevuya dönüştürme", "Satış temsilcisine hazır özet",
        ],
      },
      {
        title: "AI Lead Scoring & Enrichment",
        text: "Hangi lead'in gerçekten alıcı olduğunu tahmin eder, eksik bilgiyi tamamlar.",
        items: [
          "Hot / Warm / Cold sınıflandırma", "Davranış bazlı skorlama",
          "Sektör ve şirket büyüklüğü tespiti", "Web sitesi ve faaliyet alanı analizi",
          "Karar verici bilgisi çıkarma", "Olası ihtiyaç tahmini",
        ],
      },
      {
        title: "AI Outreach & Follow-Up",
        text: "Satışın en çok kaybettiği yer takip. Sistem takibi asla unutmaz.",
        items: [
          "Kişiselleştirilmiş e-posta gönderimi", "WhatsApp outreach",
          "Telefonla otomatik ön temas", "LinkedIn mesaj taslakları",
          "Cevap gelmezse planlı tekrar ulaşma", "Gün gün takip akışı yönetimi",
          "Olumlu cevabı satış ekibine yönlendirme",
        ],
      },
      {
        title: "AI CRM Assistant",
        text: "Satışçının en sevmediği iş olan veri girişi tamamen ortadan kalkar.",
        items: [
          "Otomatik müşteri kaydı", "Görüşme özeti yazma", "Etiketleme ve segmentasyon",
          "Pipeline güncelleme", "Follow-up görevi oluşturma",
          "Satış fırsatı tespiti", "Kayıp neden analizi",
        ],
      },
      {
        title: "E-Ticaret Satış AI",
        text: "Mağazanızda 7/24 çalışan, ürünü tanıyan bir satış danışmanı.",
        items: [
          "AI alışveriş asistanı", "İhtiyaca göre ürün önerisi",
          "Sipariş, kargo, iade ve değişim sorguları", "Sepeti terk eden müşteriyi takip",
          "Upsell ve cross-sell önerileri", "Otomatik ürün açıklaması üretimi",
          "Ürün yorumlarının analizi",
        ],
      },
      {
        title: "AI Pazarlama Sistemleri",
        text: "İçerik üretmekle kalmaz; kampanyanın sonucunu da okur.",
        items: [
          "İçerik fikri ve metin üretimi", "Sosyal medya içerik takvimi",
          "Kampanya brief'i oluşturma", "Google & Meta reklam performans analizi",
          "Yüksek maliyet ve zayıf kampanya uyarısı", "Google yorum yönetimi",
          "Marka itibar takibi",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — reklam lead'inden satışa",
      steps: ["Web formu", "AI analiz", "Lead skoru", "CRM", "WhatsApp / arama", "Randevu", "Satış temsilcisi"],
    },
  },

  {
    num: "05",
    slug: "email-iletisim-ai",
    title: "E-mail & İletişim AI",
    short: "Gelen kutusunu okuyan, sınıflandıran, cevaplayan ve teklif hazırlayan sistem.",
    intro:
      "Kurumsal gelen kutusu günde yüzlerce mesaj alır; çoğu tekrar eder. Yapay zekâ maili okur, ne istendiğini anlar, sınıflandırır, taslağı hazırlar ve doğru kişiye ulaştırır.",
    meta: "Gelen e-postaları okuyan, sınıflandıran, yanıtlayan ve teklif hazırlayan yapay zekâ mail sistemleri.",
    groups: [
      {
        title: "AI Mail Asistanı",
        text: "Her mail okunur, etiketlenir ve doğru kişiye ulaşır.",
        items: [
          "Gelen mailleri okuma ve konuyu anlama", "Konu bazlı sınıflandırma",
          "Önceliklendirme", "Otomatik yanıt taslağı oluşturma",
          "Onaylı otomatik cevaplama", "İlgili departmana aktarma",
          "Cevaplanmamış mail takibi",
        ],
      },
      {
        title: "AI Satış Mail Asistanı",
        text: "Soğuk maili kişiselleştirir, cevabı analiz eder, sıcak fırsatı ekibe verir.",
        items: [
          "Lead'e kişiselleştirilmiş mail", "Planlı follow-up gönderimi",
          "Cevap gelmezse tekrar ulaşma", "Gelen cevabın niyet analizi",
          "Olumlu lead'i satış ekibine aktarma", "Toplu kampanya maili yönetimi",
        ],
      },
      {
        title: "AI Destek Mail Asistanı",
        text: "Destek taleplerini ticket'a çevirir, bilinen sorunu kendi çözer.",
        items: [
          "Destek taleplerini sınıflandırma", "Otomatik ticket oluşturma",
          "Bilgi tabanından cevap bulma", "Acil talepleri yükseltme",
          "Çözüm süresi takibi", "Müşteriye durum bilgilendirmesi",
        ],
      },
      {
        title: "AI Teklif Sistemi",
        text: "“20 kişi için fiyat almak istiyorum” mailinin karşılığı hazır bir teklif olur.",
        items: [
          "Talebi otomatik algılama", "CRM bilgileriyle eşleştirme",
          "Teklif taslağı oluşturma", "PDF teklif üretimi",
          "Yöneticiye onaya gönderme", "Onay sonrası müşteriye iletme",
          "Teklif takibi ve hatırlatma",
        ],
      },
      {
        title: "AI Inbox Manager",
        text: "Sabah gelen kutusunu açtığınızda ne yapılacağı bellidir.",
        items: [
          "Spam ve gereksiz mail ayrıştırma", "Önemli mail tespiti",
          "Günlük özet raporu", "Aksiyon gereken mailleri listeleme",
          "Otomatik görev oluşturma", "Takip edilmeyen konuları hatırlatma",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — teklif talebi maili",
      steps: ["Gelen mail", "AI analiz", "CRM eşleşmesi", "Teklif taslağı", "Yönetici onayı", "Müşteriye gönderim"],
    },
  },

  {
    num: "06",
    slug: "akilli-bilgi-sistemleri",
    title: "Akıllı Bilgi Sistemleri",
    short: "Şirketinizin tüm bilgisini bilen, çalışanlarınıza cevap veren özel yapay zekâ.",
    intro:
      "Şirketinizin dokümanları, prosedürleri, fiyat listeleri ve eğitim içerikleri üzerine kurulan; sadece size ait bir yapay zekâ. Bilgi tek tek kişilerin kafasında değil, herkesin erişebildiği bir sistemde durur.",
    meta: "Şirkete özel ChatGPT, RAG tabanlı bilgi tabanı ve çalışan asistanları.",
    groups: [
      {
        title: "Şirkete Özel ChatGPT",
        text: "Sizin verinizle çalışır, sizin dışınıza çıkmaz.",
        items: [
          "PDF, Word ve Excel dokümanları", "Prosedür ve talimatlar",
          "Ürün ve hizmet katalogları", "Fiyat listeleri", "Web sitesi içeriği",
          "Eğitim dokümanları", "Sık sorulan sorular",
        ],
      },
      {
        title: "AI Knowledge Base",
        text: "RAG tabanlı, kaynak gösteren bilgi sistemi — uydurma cevap değil, belgeye dayalı cevap.",
        items: [
          "Belgeye dayalı cevaplama", "Kaynak ve sayfa referansı",
          "Sürekli güncellenen bilgi tabanı", "Yetki bazlı erişim",
          "Çok dilli soru-cevap", "Cevaplanamayan soruların raporu",
        ],
      },
      {
        title: "Çalışan Asistanları",
        text: "Ekibin “bunu kime soracağım” diye kaybettiği zamanı geri kazandırır.",
        items: [
          "AI çalışan asistanı", "Teknik destek asistanı",
          "Ürün danışmanı: “Bu müşteriye hangi ürün uygun?”",
          "Şirket prosedürü asistanı", "Yeni çalışan oryantasyon asistanı",
          "Şirket içi eğitim asistanı",
        ],
      },
      {
        title: "AI Kurumsal Arama",
        text: "Binlerce dosyada dosya adı değil, anlam üzerinden arama.",
        items: [
          "Doğal dille arama", "Klasör ve sistem fark etmeden tarama",
          "İlgili belgeyi bulma", "Belge özeti çıkarma",
          "Benzer dokümanları eşleştirme", "Erişim izni kontrolü",
        ],
      },
      {
        title: "AI İnsan Kaynakları",
        text: "İK'nın tekrar eden sorularını ve ilk eleme yükünü devralır.",
        items: [
          "Çalışan sorularını yanıtlama (izin, özlük, prosedür)",
          "CV tarama ve sınıflandırma", "Pozisyona uygunluk değerlendirmesi",
          "Ön eleme görüşmeleri", "Mülakat sorusu hazırlama",
          "Görüşme özeti çıkarma", "Yeni çalışan onboarding akışı",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — kurumsal bilgi sorgusu",
      steps: ["Çalışan sorusu", "Belge taraması", "İlgili kaynaklar", "Kaynaklı cevap", "Eksik bilgi raporu"],
    },
  },

  {
    num: "07",
    slug: "ai-is-otomasyonlari",
    title: "AI İş Otomasyonları",
    short: "Mailden CRM'e, formdan teklife kadar uçtan uca yürüyen iş akışları.",
    intro:
      "Tekrar eden işleri baştan sona otomatikleştiririz: bilgi bir yerden gelir, yapay zekâ okur, karar verir, sistemleri günceller ve gerektiğinde insana onaya gönderir. Manuel veri girişi ortadan kalkar.",
    meta: "Uçtan uca AI iş akışı otomasyonu, toplantı asistanı, onay süreçleri ve entegrasyonlar.",
    groups: [
      {
        title: "AI Workflow Automation",
        text: "Ayrı ayrı yapılan onlarca küçük iş tek bir akışa dönüşür.",
        items: [
          "Kanallar arası uçtan uca akış", "Koşullu karar adımları",
          "Sistemler arası veri aktarımı", "Hata durumunda uyarı",
          "Zamanlanmış görevler", "Akış performans raporu",
        ],
      },
      {
        title: "AI Toplantı Asistanı",
        text: "Toplantı bittiğinde özet, karar ve görevler çıkmış olur.",
        items: [
          "Görüşme transkripsiyonu", "Toplantı özeti", "Alınan kararların listesi",
          "Aksiyon maddeleri ve sorumlular", "CRM güncellemesi",
          "Takip görevi oluşturma",
        ],
      },
      {
        title: "AI Veri Girişi",
        text: "Belgeden sisteme kopyala-yapıştır işi tamamen biter.",
        items: [
          "Belge ve formdan otomatik veri girişi", "Fatura ve irsaliye işleme",
          "Excel ve tablo aktarımı", "Veri doğrulama", "Eksik alan tespiti",
          "Mükerrer kayıt kontrolü",
        ],
      },
      {
        title: "AI Görev & Bildirim",
        text: "Konuşmanın ya da mailin içinden çıkan iş, kimsenin aklında tutmasına gerek kalmadan sisteme düşer.",
        items: [
          "Konuşma veya mailden görev oluşturma", "Sorumlu atama",
          "WhatsApp / SMS / e-posta bildirimi", "Slack ve Teams bildirimi",
          "Kritik olay uyarıları", "Günlük ve haftalık özet",
        ],
      },
      {
        title: "AI Onay Süreçleri",
        text: "Yapay zekâ işi hazırlar, karar insanda kalır.",
        items: [
          "Onay kuyruğu yönetimi", "Taslak hazırlama ve gösterme",
          "Çok kademeli onay", "Onay sonrası otomatik işlem",
          "Denetim izi", "Yetki kontrolü",
        ],
      },
      {
        title: "Entegrasyonlar",
        text: "Otomasyon ancak sistemlerinize bağlandığı kadar değerlidir.",
        items: [
          "CRM: HubSpot, Salesforce, Pipedrive, özel CRM",
          "Takvim: Google Calendar, Outlook", "E-ticaret: Shopify, WooCommerce, Ticimax",
          "Mesajlaşma: WhatsApp, Instagram, Telegram, Messenger",
          "İletişim: telefon santrali, SIP, SMS, e-posta",
          "Operasyon: ERP, veritabanı, özel paneller",
          "Otomasyon: n8n, Make, webhook, REST API",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — gelen mailden onaylı teklife",
      steps: ["Mail geldi", "AI okudu", "Müşteri bulundu", "CRM güncellendi", "Teklif oluşturuldu", "Yönetici onayı", "Müşteriye gönderim"],
    },
  },

  {
    num: "08",
    slug: "ai-veri-analiz",
    title: "AI Veri & Analiz Sistemleri",
    short: "Belgeleri okuyan, veriyi analiz eden ve yöneticiye cevap veren sistemler.",
    intro:
      "Belgelerdeki ve sistemlerdeki dağınık veriyi okunabilir bilgiye çeviririz. Yönetici rapor beklemez; doğrudan sorusunu sorar ve cevabını alır.",
    meta: "Doküman okuma, veri çıkarma, iş zekâsı, tahminleme ve anomali tespiti sistemleri.",
    groups: [
      {
        title: "AI Doküman Okuma",
        text: "PDF, Word, Excel, sözleşme, form ve raporlar makine tarafından okunabilir hale gelir.",
        items: [
          "PDF, Word ve Excel okuma", "Taranmış belge ve OCR",
          "El yazısı ve form işleme", "Belge sınıflandırma",
          "Belge özeti çıkarma", "Çok dilli belge desteği",
        ],
      },
      {
        title: "AI Veri Çıkarma",
        text: "Belgedeki alanlar tek tek okunmaz, otomatik olarak alanlara yazılır.",
        items: [
          "İsim, tarih, tutar, adres çıkarma", "Fatura ve fatura no okuma",
          "Ürün ve miktar bilgisi", "Müşteri eşleştirme",
          "ERP / muhasebe sistemine aktarma", "Anomali ve tutarsızlık tespiti",
        ],
      },
      {
        title: "AI Sözleşme & CV Analizi",
        text: "Uzun belgeleri okumak yerine önemli olanı görürsünüz.",
        items: [
          "Sözleşme özeti", "Madde ve yükümlülük çıkarma",
          "Riskli maddelerin işaretlenmesi", "Süre ve yenileme tarihi takibi",
          "CV sınıflandırma ve yetkinlik çıkarma", "Pozisyona uygunluk değerlendirmesi",
        ],
      },
      {
        title: "AI İş Zekâsı",
        text: "“Bu ay neden satış düştü?” sorusunun cevabı rapor beklemeden gelir.",
        items: [
          "Doğal dille veri sorgulama", "Dashboard asistanı",
          "Otomatik yönetici raporu", "Dönemsel karşılaştırma",
          "Grafik ve tablo üretimi", "Düzenli özet gönderimi",
        ],
      },
      {
        title: "Müşteri & Satış Analitiği",
        text: "Kim değerli, kim kaçıyor, ne zaman ne satılacak.",
        items: [
          "Müşteri segmentasyonu", "Churn (kayıp) riski tespiti",
          "Satın alma davranışı analizi", "Satış tahmini",
          "Lead dönüşüm analizi", "Pipeline sağlık analizi",
        ],
      },
      {
        title: "Tahminleme & Anomali Tespiti",
        text: "Sorun rapora düşmeden önce fark edilir.",
        items: [
          "Satış ve talep tahmini", "Stok tahmini",
          "Beklenmeyen satış düşüşü uyarısı", "Maliyet artışı tespiti",
          "İşlem hatası tespiti", "Üretim problemi erken uyarısı",
        ],
      },
    ],
    flow: {
      label: "Örnek akış — fatura işleme",
      steps: ["Gelen fatura", "OCR + okuma", "Veri çıkarma", "Doğrulama", "ERP kaydı", "Anomali uyarısı"],
    },
  },
];


/* -------------------------------------------------------------------------- */
/*  ANA SAYFA — SENARYO KÜTÜPHANESİ, GÜVEN, PAKET SEVİYELERİ                   */
/* -------------------------------------------------------------------------- */

const useCases = [
  { title: "Instagram lead → satış", flow: ["Yoruma “fiyat” yazıldı", "DM açılır", "AI ihtiyacı sorar", "İletişim bilgisi", "CRM kaydı", "Satış ekibine sıcak lead"] },
  { title: "Telefon → randevu", flow: ["Müşteri arar", "Voice AI ihtiyacı anlar", "Takvimde boşluk bulur", "Randevu oluşturur", "WhatsApp onayı"] },
  { title: "Web → omnichannel", flow: ["Web chatbot lead toplar", "Ertesi gün WhatsApp", "AI önceki konuşmayı bilir", "Süreç kaldığı yerden devam eder"] },
  { title: "Mail → teklif", flow: ["Teklif talebi analiz edilir", "CRM bilgisi çekilir", "Teklif taslağı", "Yönetici onayı", "Müşteriye gönderim"] },
  { title: "Destek → ticket", flow: ["Mesaj / telefon", "Problem sınıflandırma", "Bilgi tabanından çözüm", "Çözülemezse ticket + yönlendirme"] },
  { title: "Toplantı → CRM", flow: ["Toplantı transkribe edilir", "Özet + aksiyonlar", "CRM notu", "Follow-up görevi"] },
  { title: "Doküman → veri", flow: ["PDF / fatura / form okunur", "Alanlar çıkarılır", "Doğrulama", "ERP / CRM'e yazılır"] },
  { title: "Multi-agent satış", flow: ["Lead Agent", "Sales Agent", "Booking Agent", "CRM Agent", "Follow-up Agent"] },
];

const trust = [
  { title: "Kritik işlemlerde insan onayı", text: "Teklif, tahsilat, iptal gibi kritik adımlarda sistem işi hazırlar; onay kuyruğundan geçmeden aksiyon alınmaz." },
  { title: "Gerektiğinde insan temsilciye aktarım", text: "Yapay zekâ bilmediği veya emin olmadığı durumda konuşmayı, geçmişiyle birlikte ekibinize devreder." },
  { title: "Yetki kontrollü bilgi erişimi", text: "Hangi kullanıcının hangi bilgiye erişebileceği rol bazlı tanımlanır. Sistem yetkisi dışındaki veriyi görmez." },
  { title: "İşlem ve hata logları", text: "Her aksiyon kayıt altındadır: ne zaman, hangi veriyle, hangi sonuçla. Denetlenebilir bir iz bırakır." },
  { title: "Veri minimizasyonu", text: "Yalnızca işin gerektirdiği veri işlenir; saklama süresi ve silme mekanizması proje başında tanımlanır." },
  { title: "Mevcut sistemlerinize API ile entegrasyon", text: "Verinizi taşımanızı istemeyiz; sistem sizin altyapınıza bağlanır, veri sizde kalır." },
];

const levels = [
  { name: "Starter", text: "Tek kanal, tek ana kullanım senaryosu. Hızlı devreye alma ve ilk sonuçları görmek için." },
  { name: "Growth", text: "2-3 kanal, CRM ve takvim entegrasyonu, otomasyon akışları." },
  { name: "Advanced", text: "Çoklu ajan mimarisi, özel entegrasyonlar ve analitik raporlama." },
  { name: "Enterprise", text: "Özel altyapı, rol bazlı yetkilendirme, SLA, güvenlik gereksinimleri ve yüksek hacim." },
];

/* -------------------------------------------------------------------------- */
/*  HİZMET SAYFASI DETAYLARI                                                   */
/*  problem / solution / channels / scenarios / control / faq                  */
/* -------------------------------------------------------------------------- */

const details = {
  "sesli-ai-asistanlar": {
    problem:
      "Çalan telefonların önemli bir kısmı hiç açılmıyor. Mesai dışı arayan müşteri geri dönmüyor, yoğun saatte hat meşgul kalıyor, randevu hatırlatmaları elle yapılıyor ve giden aramalar için ayrı bir ekip gerekiyor.",
    solution:
      "Sesli AI asistan tüm çağrıları ilk çalışta karşılar, müşterinin ne istediğini anlar, bilgi verir, randevu oluşturur ve gerektiğinde konuşmayı özetiyle birlikte insan temsilciye aktarır. Giden aramalarda ise listeyi kendisi arar, sadece anlamlı görüşmeleri ekibe bırakır.",
    channels: ["Telefon santrali", "SIP", "Mobil hat", "SMS", "WhatsApp bildirimi"],
    scenarios: [
      { s: "Klinik & Estetik", t: "Mesai dışı gelen randevu talebi karşılanır, takvim kontrol edilir, randevu oluşturulur ve gelmeyen hastalar tekrar aranır." },
      { s: "Otel & Restoran", t: "Yoğun saatte gelen rezervasyon çağrıları beklemeye alınmadan, çok dilli olarak karşılanır." },
      { s: "Otomotiv & Servis", t: "Servis randevusu alınır, bakım zamanı gelen müşteriler otomatik olarak aranır." },
      { s: "Emlak", t: "İlan aramaları karşılanır, ihtiyaç anlaşılır, gösterim randevusu planlanır." },
    ],
    control: [
      "Belirlenen konularda görüşme doğrudan temsilciye aktarılır",
      "Fiyat ve taahhüt içeren konularda tanımlı sınırlar dışına çıkılmaz",
      "Tüm görüşmeler kayıt ve transkript olarak saklanır",
      "Müşteri isterse her an insana bağlanabilir",
    ],
    faq: [
      { q: "Müşteri karşısındakinin yapay zekâ olduğunu anlar mı?", a: "Sesin doğallığı yüksektir; ancak biz şeffaflığı öneriyoruz. Görüşmenin başında asistanın dijital olduğunu belirten bir karşılama kullanılabilir, bu tercihi siz belirlersiniz." },
      { q: "Mevcut santralimizi değiştirmemiz gerekir mi?", a: "Hayır. SIP destekleyen santrallere doğrudan bağlanıyoruz; gerekirse numaranıza yönlendirme ile de çalışabiliriz." },
      { q: "Anlamadığı bir soru gelirse ne olur?", a: "Sistem tahmin yürütmez. Tanımlı fallback kuralına göre bilgiyi not eder, temsilciye aktarır veya geri aranma kaydı oluşturur." },
      { q: "Kaç kişi aynı anda arayabilir?", a: "Eş zamanlı görüşme sayısı ihtiyacınıza göre ölçeklenir; kampanya dönemlerinde kuyruk oluşmaz." },
    ],
  },

  "ai-chatbotlar": {
    problem:
      "Mesajlar farklı kanallara dağılıyor, geç yanıtlanıyor ve aynı sorular her gün tekrar ediliyor. Instagram'dan yazan müşteri akşam cevap alamayınca başka firmaya gidiyor; kanallar arasında müşteri geçmişi kayboluyor.",
    solution:
      "Her kanal için ayrı ayrı kurgulanmış, ürün ve hizmetlerinizi gerçekten bilen asistanlar kurarız. Soruyu yanıtlamakla kalmaz; randevu oluşturur, teklif talebi toplar, siparişi sorgular, CRM'e kaydeder ve gerektiğinde temsilciye devreder.",
    channels: ["WhatsApp Business API", "Instagram DM & yorum", "Web sitesi", "Facebook Messenger", "Telegram"],
    scenarios: [
      { s: "E-ticaret", t: "Sipariş ve kargo sorguları otomatik yanıtlanır, iade süreci başlatılır, ürün önerisi yapılır." },
      { s: "Klinik & Estetik", t: "Fiyat ve işlem soruları yanıtlanır, uygun saat bulunur, randevu WhatsApp üzerinden oluşturulur." },
      { s: "Eğitim", t: "Program ve kayıt soruları yanıtlanır, aday öğrenci bilgileri toplanır, danışman görüşmesi planlanır." },
      { s: "Emlak", t: "İlan detayları paylaşılır, bütçe ve ihtiyaç sorulur, nitelikli lead danışmana yönlendirilir." },
    ],
    control: [
      "Temsilci istediği an konuşmaya dahil olabilir",
      "Belirli konularda otomatik insana devir kuralı",
      "Yanıt verilemeyen sorular raporlanır ve bilgi tabanına eklenir",
      "Kampanya ve fiyat bilgileri tek yerden güncellenir",
    ],
    faq: [
      { q: "WhatsApp için resmî API şart mı?", a: "Kalıcı ve kesintisiz çalışma için WhatsApp Business API öneriyoruz. Başvuru ve doğrulama sürecinde size eşlik ediyoruz." },
      { q: "Bot müşteriye yanlış bilgi verir mi?", a: "Asistan yalnızca size ait doğrulanmış bilgi kaynağından cevaplar. Kaynakta olmayan konularda cevap uydurmaz, temsilciye yönlendirir." },
      { q: "Instagram yorumlarına da cevap verebilir mi?", a: "Evet. “Fiyat” gibi belirlediğiniz kelimeleri yakalayıp otomatik DM başlatabilir ve oradan görüşmeyi sürdürebilir." },
      { q: "Konuşmalar tek panelden görülebilir mi?", a: "Evet. Tüm kanallardaki görüşmeler tek akışta izlenebilir, geçmiş kanaldan bağımsız olarak korunur." },
    ],
  },

  "ai-agentlar": {
    problem:
      "Klasik chatbotlar konuşur ama iş yapmaz. Görüşme bittikten sonra kaydı biri açar, CRM'i biri günceller, teklifi biri yazar, takibi biri hatırlar. Zaman bu ara işlerde kayboluyor.",
    solution:
      "AI agentlar sistemlerinize bağlanır ve görevi baştan sona tamamlar. Birden fazla agent birlikte çalışarak bir süreci uçtan uca yürütür; kritik adımlarda karar sizde kalır.",
    channels: ["CRM ve ERP", "Takvim", "E-posta", "Mesajlaşma kanalları", "Veritabanı ve özel paneller"],
    scenarios: [
      { s: "Satış", t: "Lead Agent talebi karşılar, Sales Agent niteliklendirir, Booking Agent randevuyu kurar, CRM Agent kaydı yazar, Follow-up Agent takibi sürdürür." },
      { s: "Operasyon", t: "Gelen sipariş kontrol edilir, stok sorgulanır, eksik durumda ilgili birime görev açılır." },
      { s: "Yönetim", t: "Reporting Agent haftalık performans raporunu hazırlar ve yöneticiye gönderir." },
      { s: "Tedarik & Lojistik", t: "Gönderi durumu takip edilir, gecikmede müşteri otomatik bilgilendirilir." },
    ],
    control: [
      "Kritik aksiyonlar onay kuyruğuna düşer",
      "Her agent yalnızca tanımlı yetkileri kullanır",
      "Tüm işlemler denetim izine yazılır",
      "Hata durumunda süreç durur ve sorumluya bildirilir",
    ],
    faq: [
      { q: "AI agent ile chatbot arasındaki fark nedir?", a: "Chatbot soruya cevap verir; agent görevi tamamlar. Agent sistemlere bağlanır, kayıt oluşturur, mail gönderir, randevu kurar ve sonucu raporlar." },
      { q: "Agent yanlış bir işlem yaparsa?", a: "Kritik adımlar insan onayına bağlanır, her işlem loglanır ve geri alınabilir noktalar tanımlanır." },
      { q: "Kaç agent kurulabilir?", a: "İhtiyaca göre. Genelde tek bir süreçle başlayıp sonuç alındıkça yeni agentlar ekliyoruz." },
      { q: "Mevcut yazılımımızla çalışır mı?", a: "API veya veritabanı erişimi olan her sistemle çalışabilir. Erişim yoksa alternatif entegrasyon yolunu birlikte belirliyoruz." },
    ],
  },

  "satis-lead-ai": {
    problem:
      "Reklama bütçe harcanıyor ama gelen lead'ler saatler sonra aranıyor. Kimin gerçekten alıcı olduğu belli değil, takip unutuluyor ve satışçının zamanı veri girişine gidiyor.",
    solution:
      "Gelen her talep saniyeler içinde karşılanır, ihtiyaç analiz edilir, lead skorlanır ve CRM'e düşer. Sıcak müşteri anında satış ekibine yönlendirilir; geri kalanı sistem takip etmeye devam eder.",
    channels: ["Web formu", "Reklam lead formları", "WhatsApp", "Telefon", "E-posta"],
    scenarios: [
      { s: "Emlak", t: "Portföy ihtiyacı ve bütçe sorulur, uygun ilanlar eşleştirilir, gösterim randevusu planlanır." },
      { s: "Klinik & Estetik", t: "İlgilenilen işlem ve uygunluk tespit edilir, kampanya bilgisi verilir, randevu oluşturulur." },
      { s: "B2B & Danışmanlık", t: "Şirket bilgisi zenginleştirilir, karar verici tespit edilir, keşif görüşmesi planlanır." },
      { s: "E-ticaret", t: "Sepeti terk eden müşteri takip edilir, uygun teklifle geri kazanılır." },
    ],
    control: [
      "Skorlama kuralları sizinle birlikte belirlenir",
      "Satış temsilcisi devraldığı anda otomasyon durur",
      "İletişim sıklığı sınırları tanımlanır",
      "İzin ve iletişim tercihleri kayıt altında tutulur",
    ],
    faq: [
      { q: "Lead skorlaması neye göre yapılıyor?", a: "Sizin satış geçmişiniz ve kriterleriniz üzerinden: bütçe, ihtiyaç netliği, aciliyet, sektör uyumu ve davranış sinyalleri." },
      { q: "Mevcut CRM'imizle çalışır mı?", a: "HubSpot, Salesforce, Pipedrive, Zoho ve API'si olan özel CRM'lerle çalışır." },
      { q: "Müşteriye çok fazla mesaj gider mi?", a: "Hayır. Takip akışının sıklığı ve toplam adım sayısı baştan sınırlandırılır, cevap geldiğinde akış otomatik durur." },
      { q: "Satış ekibimizin yerini alır mı?", a: "Hayır. Amaç satışçının zamanını, aramaya değer müşteriye ayırmasıdır. Ön eleme ve veri girişi sistemde kalır." },
    ],
  },

  "email-iletisim-ai": {
    problem:
      "Kurumsal gelen kutusu günde yüzlerce mail alıyor. Çoğu tekrar eden sorular; arada gerçekten önemli olan talep gözden kaçıyor, teklif hazırlamak saatler alıyor ve cevaplanmayan mailler takip edilmiyor.",
    solution:
      "Yapay zekâ her maili okur, konuyu ve niyeti anlar, önceliklendirir, taslak yanıtı hazırlar ve doğru kişiye yönlendirir. Teklif taleplerinde CRM verisiyle birleştirip hazır bir teklif çıkarır, onayınızdan sonra gönderir.",
    channels: ["Kurumsal e-posta", "Ortak gelen kutuları", "Destek adresleri", "CRM", "Ticket sistemleri"],
    scenarios: [
      { s: "Toptan & B2B", t: "Fiyat talepleri otomatik teklife dönüşür, onaydan sonra müşteriye gönderilir." },
      { s: "Teknik Servis", t: "Arıza bildirimleri sınıflandırılır, ticket açılır, acil olanlar öne alınır." },
      { s: "Turizm", t: "Rezervasyon ve grup talepleri çok dilli olarak yanıtlanır." },
      { s: "Kurumsal", t: "Günlük gelen kutusu özeti ve aksiyon listesi yöneticiye iletilir." },
    ],
    control: [
      "Otomatik gönderim yerine onaylı gönderim seçilebilir",
      "Hangi konuların asla otomatik yanıtlanmayacağı tanımlanır",
      "Tüm taslaklar düzenlenebilir",
      "Gönderilen her yanıt kayıt altındadır",
    ],
    faq: [
      { q: "Maillerimize erişim güvenli mi?", a: "Erişim yetkileri sınırlıdır ve yalnızca tanımlı klasör veya etiketlerle çalışacak şekilde kurulur. Erişim ve işlemler loglanır." },
      { q: "Otomatik cevap vermesini istemiyoruz, mümkün mü?", a: "Evet. Sistem yalnızca taslak hazırlayacak, sınıflandıracak ve yönlendirecek şekilde kurulabilir." },
      { q: "Türkçe dışındaki mailleri anlar mı?", a: "Evet, çok dilli çalışır ve yanıtı geldiği dilde hazırlar." },
      { q: "Teklif formatımızı koruyabilir mi?", a: "Kendi şablonunuz kullanılır; sistem yalnızca içeriği doldurur." },
    ],
  },

  "akilli-bilgi-sistemleri": {
    problem:
      "Bilgi klasörlere, maillere ve kişilerin kafasına dağılmış durumda. Çalışan bir şeyi öğrenmek için birini rahatsız ediyor, yeni gelen aylarca soruyor, güncel prosedürün hangisi olduğu bilinmiyor.",
    solution:
      "Şirketinizin dokümanları, prosedürleri ve fiyat listeleri üzerine kurulu, yalnızca size ait bir yapay zekâ kurarız. Cevabı kaynak göstererek verir; bilmiyorsa uydurmaz.",
    channels: ["Web paneli", "Şirket içi portal", "WhatsApp / Slack / Teams", "Mobil"],
    scenarios: [
      { s: "Satış ekibi", t: "“Bu müşteriye hangi paket uygun?” sorusuna güncel katalog ve fiyat üzerinden yanıt alır." },
      { s: "Teknik ekip", t: "Cihaz kılavuzları ve arıza dokümanları üzerinden hızlı çözüm bulur." },
      { s: "İnsan kaynakları", t: "İzin, özlük ve prosedür soruları otomatik yanıtlanır." },
      { s: "Yeni çalışan", t: "Oryantasyon süreci boyunca sorularını sistemden sorar." },
    ],
    control: [
      "Yetki bazlı erişim: herkes yalnızca yetkili olduğu bilgiye ulaşır",
      "Her cevapta kaynak belge referansı",
      "Bilgi tabanı sürüm takibi",
      "Cevaplanamayan soruların raporlanması",
    ],
    faq: [
      { q: "Verilerimiz model eğitiminde kullanılır mı?", a: "Hayır. Kurulum, verinizin model eğitimine gitmeyeceği şekilde yapılandırılır; kullanılan sağlayıcılar proje bazında sizinle paylaşılır." },
      { q: "Kaç doküman yükleyebiliriz?", a: "Binlerce dokümanla çalışabilir. Format ve hacim proje başında planlanır." },
      { q: "Doküman güncellenince ne oluyor?", a: "Yeni sürüm indekslenir ve sistem güncel belgeye göre cevap verir." },
      { q: "Kendi sunucumuzda çalışabilir mi?", a: "İhtiyaca göre kendi altyapınızda çalışan kurulum seçenekleri değerlendirilebilir." },
    ],
  },

  "ai-is-otomasyonlari": {
    problem:
      "Aynı bilgi beş ayrı yere elle giriliyor. Formdan gelen talep Excel'e, oradan CRM'e, oradan mail'e taşınıyor. Bir adım atlandığında kimse fark etmiyor ve iş takibi kişilere bağlı kalıyor.",
    solution:
      "Tekrar eden süreçleri uçtan uca akışa çeviririz: bilgi gelir, yapay zekâ okur, karar verir, sistemleri günceller, gerekiyorsa onaya sunar ve ilgili kişiye bildirir. Süreç kişiye değil sisteme bağlanır.",
    channels: ["Form ve web", "E-posta", "WhatsApp / Slack / Teams", "CRM & ERP", "Webhook & API"],
    scenarios: [
      { s: "Satış operasyonu", t: "Form → AI analiz → CRM kaydı → teklif taslağı → onay → müşteriye gönderim." },
      { s: "Muhasebe", t: "Gelen fatura okunur, alanlar çıkarılır, doğrulanır ve muhasebe sistemine yazılır." },
      { s: "Toplantı sonrası", t: "Görüşme özetlenir, kararlar ve görevler çıkarılır, CRM güncellenir." },
      { s: "Üretim & Lojistik", t: "Sipariş durumu takip edilir, gecikmede ilgili birim ve müşteri bilgilendirilir." },
    ],
    control: [
      "Çok kademeli onay akışları",
      "Her adımın loglanması",
      "Hata durumunda otomatik uyarı ve durdurma",
      "Manuel müdahale noktalarının tanımlı olması",
    ],
    faq: [
      { q: "Mevcut yazılımlarımızı değiştirmemiz gerekir mi?", a: "Hayır. Otomasyon var olan sistemlerinizin üzerine kurulur, aralarındaki boşlukları kapatır." },
      { q: "n8n veya Make kullanıyoruz, uyumlu mu?", a: "Evet, mevcut otomasyon altyapınızın üzerine yapay zekâ karar katmanı ekleyebiliriz." },
      { q: "Bir akış hata verirse ne olur?", a: "Süreç durur, sorumluya bildirim gider ve işlem tekrar denenebilir. Aynı işin iki kez çalışmaması için koruma vardır." },
      { q: "Ne kadar sürede kurulur?", a: "Tek bir akış genelde birkaç hafta içinde canlıya alınabilir; kapsam büyüdükçe fazlara bölüyoruz." },
    ],
  },

  "ai-veri-analiz": {
    problem:
      "Veri var ama cevap yok. Rapor hazırlamak günler alıyor, belgelerdeki bilgi sisteme elle giriliyor, sorunlar ancak ay sonunda fark ediliyor.",
    solution:
      "Belgeleri okuyup veriye çeviren ve verinin üzerinde doğal dille soru sorulabilen bir katman kurarız. Yönetici raporu beklemez; sorusunu sorar, cevabını ve gerekçesini görür.",
    channels: ["Belge ve arşiv", "ERP & muhasebe", "CRM", "E-ticaret paneli", "Dashboard"],
    scenarios: [
      { s: "Finans & Muhasebe", t: "Fatura ve dekont okunur, alanlar çıkarılır, tutarsızlık uyarısı verilir." },
      { s: "Yönetim", t: "“Bu ay neden satış düştü?” sorusu veriler üzerinden yanıtlanır." },
      { s: "Hukuk & Sözleşme", t: "Sözleşme özetlenir, riskli maddeler işaretlenir, yenileme tarihleri takip edilir." },
      { s: "Perakende & E-ticaret", t: "Talep ve stok tahmini yapılır, anormal düşüşler erkenden bildirilir." },
    ],
    control: [
      "Çıkarılan verinin doğrulama adımı",
      "Düşük güvenli sonuçların insana yönlendirilmesi",
      "Kaynak belge referansı",
      "Raporların yalnızca yetkili kişilere gönderilmesi",
    ],
    faq: [
      { q: "Taranmış (scan) belgeleri okuyabilir mi?", a: "Evet. OCR ile taranmış belgeler ve formlar işlenebilir; el yazısı için doğruluk oranı belge kalitesine bağlıdır." },
      { q: "Yanlış okuma riski var mı?", a: "Kritik alanlarda doğrulama kuralları tanımlanır; sistem emin olmadığı kaydı otomatik işlemez, kontrole düşürür." },
      { q: "Verilerimiz nerede tutuluyor?", a: "Tercihen kendi sistemlerinizde. Sistem veriyi taşımak yerine bağlanarak çalışır." },
      { q: "Hangi kaynaklara bağlanabilir?", a: "ERP, muhasebe yazılımı, CRM, e-ticaret paneli, veritabanı ve Excel dosyaları dahil olmak üzere API veya dosya erişimi olan kaynaklara." },
    ],
  },
};

categories.forEach(function (c) {
  Object.assign(c, details[c.slug] || {});
});

module.exports = { site, process, why, sectors, integrations, categories, useCases, trust, levels };
