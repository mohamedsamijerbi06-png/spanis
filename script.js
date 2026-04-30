/* ============================================================
   EspañolTúnez – script.js
   Features:
   - Multi-language translation (ES / AR / FR / EN / IT)
   - Smooth scroll & active nav highlighting
   - Forum posting (frontend simulation)
   - Gallery filtering + image upload
   - Form validation
   - Scroll-triggered animations
   - Navbar shrink on scroll
   - Back-to-top button
   ============================================================ */

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const translations = {

  /* ── SPANISH (default) ── */
  es: {
    brand:          "EspañolTúnez",
    nav_inicio:     "Inicio",
    nav_foro:       "Foro",
    nav_galeria:    "Galería",
    nav_local:      "Local",
    nav_grupo:      "Grupo",
    nav_contacto:   "Contacto",
    hero_badge:     "🌟 Proyecto Cultural",
    hero_title:     "Aprende Español<br/><em>Fácilmente</em>",
    hero_subtitle:  "Un puente cultural entre Túnez y España. Descubre el idioma, la cultura y la amistad que nos une.",
    hero_cta1:      "Únete al Foro",
    hero_cta2:      "Ver Galería",
    stat1: "Estudiantes", stat2: "Lecciones", stat3: "Culturas",
    foro_tag:   "Comunidad",
    foro_title: "Foro de Discusión",
    foro_sub:   "Comparte tus experiencias, preguntas y consejos sobre el español.",
    foro_name_ph: "Tu nombre...",
    foro_msg_ph:  "Escribe tu mensaje aquí...",
    foro_hint:    "Sé amable y respetuoso 🙏",
    foro_post:    "Publicar",
    galeria_tag:  "Visual",
    galeria_title:"Galería Cultural",
    galeria_sub:  "Imágenes que celebran la unión entre dos culturas.",
    gal_all:      "Todo", gal_cultura:"Cultura", gal_banderas:"Banderas",
    gal_personas: "Personas", gal_naturaleza:"Naturaleza",
    gal_tn:       "🇹🇳 Bandera de Túnez",
    gal_es:       "🇪🇸 Bandera de España",
    gal_toro:     "🐂 El Toro Español",
    gal_medina:   "🕌 Medina de Túnez",
    gal_sagrada:  "⛪ Sagrada Familia, Barcelona",
    gal_eldjem:   "🏛️ Anfiteatro de El Djem",
    gal_upload:   "Subir imagen",
    chebbi_role:  "Poeta Tunecino",  chebbi_desc: "Gran poeta tunecino",
    farida_role:  "Profesora de Español", farida_desc: "Profesora inspiradora",
    local_tag:    "Ubicación",
    local_title:  "Nuestros Locales",
    local_sub:    "Lugares donde impartimos cursos y organizamos eventos culturales.",
    local_featured:"⭐ Principal",
    local1_title: "Centro Cultural",
    local1_desc:  "Avenida Habib Bourguiba, Túnez. Clases todos los sábados de 10h a 12h.",
    local1_time:  "Sáb 10:00–12:00", local1_cap: "20 plazas",
    local2_title: "Instituto Cervantes Túnez",
    local2_desc:  "Rue de Rome, Túnez. Sede principal de nuestros cursos avanzados y eventos.",
    local2_time:  "Lun–Vie 9:00–17:00", local2_cap: "50 plazas",
    local3_title: "Clases Online",
    local3_desc:  "Plataforma virtual disponible 24/7. Accede desde cualquier lugar de Túnez o España.",
    local3_time:  "24/7 Disponible", local3_cap: "Ilimitado",
    grupo_tag:    "Equipo",
    grupo_title:  "Nuestro Grupo",
    grupo_sub:    "Las personas apasionadas que hacen posible este proyecto.",
    m1_role: "Coordinadora del Proyecto", m2_role: "Profesor de Español",
    m3_role: "Embajadora Cultural",       m4_role: "Diseñador Web",
    tribute_title:"Homenaje: Abou El Kacem Chebbi",
    tribute_quote: '"Si el pueblo un día quiere vivir, el destino debe responder…" — Gran poeta tunecino (1909–1934), símbolo de la resistencia y la belleza del alma árabe.',
    contacto_tag:  "Contacto",
    contacto_title:"¡Escríbenos!",
    contacto_sub:  "¿Tienes preguntas o quieres unirte? Estamos aquí para ayudarte.",
    ci_email:"Correo", ci_phone:"Teléfono", ci_addr:"Dirección", ci_hours:"Horario",
    ci_addr_val:  "Rue de Rome, Túnez 1002",
    ci_hours_val: "Lunes – Sábado: 9h–17h",
    form_name:    "Nombre completo",
    form_name_ph: "Tu nombre...",
    form_email:   "Correo electrónico",
    form_email_ph:"tu@correo.com",
    form_msg:     "Mensaje",
    form_msg_ph:  "Escribe tu mensaje...",
    form_submit:  "Enviar Mensaje",
    form_name_err:"Por favor, escribe tu nombre.",
    form_email_err:"Introduce un correo válido.",
    form_msg_err: "Por favor, escribe un mensaje.",
    form_success: "✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
    footer_desc:  "Un proyecto cultural que une Túnez y España a través del idioma y la amistad.",
    footer_links: "Enlaces rápidos",
    footer_follow:"Síguenos",
    footer_copy:  "© 2025 EspañolTúnez. Todos los derechos reservados.",
    footer_made:  "Hecho con ❤️ en Túnez & España",
    post_like: "👍 Me gusta", post_reply: "💬 Responder", post_share: "🔗 Compartir",
  },

  /* ── ARABIC ── */
  ar: {
    brand:          "إسبانيول تونس",
    nav_inicio:     "الرئيسية",
    nav_foro:       "المنتدى",
    nav_galeria:    "المعرض",
    nav_local:      "المقر",
    nav_grupo:      "الفريق",
    nav_contacto:   "تواصل",
    hero_badge:     "🌟 مشروع ثقافي",
    hero_title:     "تعلّم الإسبانية<br/><em>بسهولة</em>",
    hero_subtitle:  "جسر ثقافي بين تونس وإسبانيا. اكتشف اللغة والثقافة والصداقة التي تجمعنا.",
    hero_cta1:      "انضم للمنتدى",
    hero_cta2:      "شاهد المعرض",
    stat1: "طالب", stat2: "درس", stat3: "ثقافتان",
    foro_tag:   "المجتمع",
    foro_title: "منتدى النقاش",
    foro_sub:   "شارك تجاربك وأسئلتك ونصائحك حول اللغة الإسبانية.",
    foro_name_ph: "اسمك...",
    foro_msg_ph:  "اكتب رسالتك هنا...",
    foro_hint:    "كن لطيفاً ومحترماً 🙏",
    foro_post:    "نشر",
    galeria_tag:  "مرئي",
    galeria_title:"المعرض الثقافي",
    galeria_sub:  "صور تحتفل بالوحدة بين ثقافتين.",
    gal_all:"الكل", gal_cultura:"ثقافة", gal_banderas:"أعلام",
    gal_personas:"أشخاص", gal_naturaleza:"طبيعة",
    gal_tn: "🇹🇳 علم تونس", gal_es: "🇪🇸 علم إسبانيا",
    gal_toro: "🐂 الثور الإسباني", gal_medina: "🕌 مدينة تونس",
    gal_sagrada: "⛪ ساغرادا فاميليا، برشلونة",
    gal_eldjem: "🏛️ المدرج الروماني الجم",
    gal_upload: "رفع صورة",
    chebbi_role: "شاعر تونسي", chebbi_desc: "شاعر تونسي عظيم",
    farida_role: "أستاذة اللغة الإسبانية", farida_desc: "مُعلمة ملهمة",
    local_tag:"الموقع", local_title:"مقارّنا", local_sub:"الأماكن التي ندرّس فيها وننظّم الفعاليات الثقافية.",
    local_featured:"⭐ رئيسي",
    local1_title:"المركز الثقافي", local1_desc:"شارع الحبيب بورقيبة، تونس. دروس كل سبت من 10 إلى 12.",
    local1_time:"السبت 10:00–12:00", local1_cap:"20 مقعد",
    local2_title:"معهد سيرفانتس تونس", local2_desc:"شارع روما، تونس. المقر الرئيسي لدوراتنا المتقدمة.",
    local2_time:"الإثنين–الجمعة 9:00–17:00", local2_cap:"50 مقعد",
    local3_title:"دروس أونلاين", local3_desc:"منصة افتراضية متاحة 24/7 من أي مكان.",
    local3_time:"متاح 24/7", local3_cap:"غير محدود",
    grupo_tag:"الفريق", grupo_title:"فريقنا", grupo_sub:"الأشخاص المتحمّسون الذين يجعلون هذا المشروع ممكناً.",
    m1_role:"منسّقة المشروع", m2_role:"أستاذ إسبانية", m3_role:"سفيرة ثقافية", m4_role:"مصمم ويب",
    tribute_title:"تكريم: أبو القاسم الشابي",
    tribute_quote: '"إذا الشعب يوماً أراد الحياة، فلا بدّ أن يستجيب القدر…" — شاعر تونسي عظيم (1909–1934)، رمز المقاومة وجمال الروح العربية.',
    contacto_tag:"تواصل", contacto_title:"اكتب لنا!", contacto_sub:"هل لديك أسئلة أو تريد الانضمام؟ نحن هنا لمساعدتك.",
    ci_email:"البريد", ci_phone:"الهاتف", ci_addr:"العنوان", ci_hours:"التوقيت",
    ci_addr_val:"شارع روما، تونس 1002", ci_hours_val:"الاثنين – السبت: 9–17",
    form_name:"الاسم الكامل", form_name_ph:"اسمك...",
    form_email:"البريد الإلكتروني", form_email_ph:"بريدك@مثال.com",
    form_msg:"الرسالة", form_msg_ph:"اكتب رسالتك...",
    form_submit:"إرسال الرسالة",
    form_name_err:"الرجاء كتابة اسمك.",
    form_email_err:"أدخل بريداً إلكترونياً صالحاً.",
    form_msg_err:"الرجاء كتابة رسالة.",
    form_success:"✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    footer_desc:"مشروع ثقافي يجمع تونس وإسبانيا باللغة والصداقة.",
    footer_links:"روابط سريعة", footer_follow:"تابعنا",
    footer_copy:"© 2025 إسبانيول تونس. جميع الحقوق محفوظة.",
    footer_made:"صُنع بـ ❤️ في تونس وإسبانيا",
    post_like: "👍 إعجاب", post_reply: "💬 رد", post_share: "🔗 مشاركة",
  },

  /* ── FRENCH ── */
  fr: {
    brand:          "EspagnolTunisie",
    nav_inicio:     "Accueil",
    nav_foro:       "Forum",
    nav_galeria:    "Galerie",
    nav_local:      "Local",
    nav_grupo:      "Groupe",
    nav_contacto:   "Contact",
    hero_badge:     "🌟 Projet Culturel",
    hero_title:     "Apprends l'Espagnol<br/><em>Facilement</em>",
    hero_subtitle:  "Un pont culturel entre la Tunisie et l'Espagne. Découvrez la langue, la culture et l'amitié qui nous unit.",
    hero_cta1:      "Rejoindre le Forum",
    hero_cta2:      "Voir la Galerie",
    stat1:"Étudiants", stat2:"Leçons", stat3:"Cultures",
    foro_tag:   "Communauté",
    foro_title: "Forum de Discussion",
    foro_sub:   "Partagez vos expériences, questions et conseils sur l'espagnol.",
    foro_name_ph:"Votre nom...", foro_msg_ph:"Écrivez votre message ici...",
    foro_hint:"Soyez aimable et respectueux 🙏", foro_post:"Publier",
    galeria_tag:"Visuel", galeria_title:"Galerie Culturelle",
    galeria_sub:"Des images qui célèbrent l'union entre deux cultures.",
    gal_all:"Tout", gal_cultura:"Culture", gal_banderas:"Drapeaux",
    gal_personas:"Personnes", gal_naturaleza:"Nature",
    gal_tn:"🇹🇳 Drapeau de la Tunisie", gal_es:"🇪🇸 Drapeau de l'Espagne",
    gal_toro:"🐂 Le Taureau Espagnol", gal_medina:"🕌 Médina de Tunis",
    gal_sagrada:"⛪ Sagrada Família, Barcelone",
    gal_eldjem:"🏛️ Amphithéâtre d'El Jem",
    gal_upload:"Télécharger une image",
    chebbi_role:"Poète Tunisien", chebbi_desc:"Grand poète tunisien",
    farida_role:"Professeure d'Espagnol", farida_desc:"Professeure inspirante",
    local_tag:"Emplacement", local_title:"Nos Locaux",
    local_sub:"Lieux où nous dispensons des cours et organisons des événements culturels.",
    local_featured:"⭐ Principal",
    local1_title:"Centre Culturel", local1_desc:"Avenue Habib Bourguiba, Tunis. Cours chaque samedi de 10h à 12h.",
    local1_time:"Sam 10:00–12:00", local1_cap:"20 places",
    local2_title:"Institut Cervantes Tunis", local2_desc:"Rue de Rome, Tunis. Siège principal de nos cours avancés.",
    local2_time:"Lun–Ven 9:00–17:00", local2_cap:"50 places",
    local3_title:"Cours en Ligne", local3_desc:"Plateforme virtuelle disponible 24h/7j de partout.",
    local3_time:"24/7 Disponible", local3_cap:"Illimité",
    grupo_tag:"Équipe", grupo_title:"Notre Groupe",
    grupo_sub:"Les personnes passionnées qui rendent ce projet possible.",
    m1_role:"Coordinatrice du Projet", m2_role:"Professeur d'Espagnol",
    m3_role:"Ambassadrice Culturelle", m4_role:"Designer Web",
    tribute_title:"Hommage: Abou El Kacem Chebbi",
    tribute_quote: '"Si un jour le peuple veut vivre, le destin doit répondre…" — Grand poète tunisien (1909–1934), symbole de la résistance et de la beauté de l\'âme arabe.',
    contacto_tag:"Contact", contacto_title:"Écrivez-nous!",
    contacto_sub:"Des questions ou envie de rejoindre? Nous sommes là pour vous aider.",
    ci_email:"Email", ci_phone:"Téléphone", ci_addr:"Adresse", ci_hours:"Horaires",
    ci_addr_val:"Rue de Rome, Tunis 1002", ci_hours_val:"Lundi – Samedi: 9h–17h",
    form_name:"Nom complet", form_name_ph:"Votre nom...",
    form_email:"Adresse email", form_email_ph:"vous@email.com",
    form_msg:"Message", form_msg_ph:"Écrivez votre message...",
    form_submit:"Envoyer le Message",
    form_name_err:"Veuillez entrer votre nom.",
    form_email_err:"Entrez un email valide.",
    form_msg_err:"Veuillez écrire un message.",
    form_success:"✅ Message envoyé avec succès! Nous vous contacterons bientôt.",
    footer_desc:"Un projet culturel qui unit la Tunisie et l'Espagne par la langue et l'amitié.",
    footer_links:"Liens rapides", footer_follow:"Suivez-nous",
    footer_copy:"© 2025 EspagnolTunisie. Tous droits réservés.",
    footer_made:"Fait avec ❤️ en Tunisie & Espagne",
    post_like:"👍 J'aime", post_reply:"💬 Répondre", post_share:"🔗 Partager",
  },

  /* ── ENGLISH ── */
  en: {
    brand:          "SpanishTunisia",
    nav_inicio:     "Home",
    nav_foro:       "Forum",
    nav_galeria:    "Gallery",
    nav_local:      "Location",
    nav_grupo:      "Group",
    nav_contacto:   "Contact",
    hero_badge:     "🌟 Cultural Project",
    hero_title:     "Learn Spanish<br/><em>Easily</em>",
    hero_subtitle:  "A cultural bridge between Tunisia and Spain. Discover the language, culture and friendship that unites us.",
    hero_cta1:      "Join the Forum",
    hero_cta2:      "View Gallery",
    stat1:"Students", stat2:"Lessons", stat3:"Cultures",
    foro_tag:  "Community",
    foro_title:"Discussion Forum",
    foro_sub:  "Share your experiences, questions and tips about Spanish.",
    foro_name_ph:"Your name...", foro_msg_ph:"Write your message here...",
    foro_hint:"Be kind and respectful 🙏", foro_post:"Post",
    galeria_tag:"Visual", galeria_title:"Cultural Gallery",
    galeria_sub:"Images celebrating the union of two cultures.",
    gal_all:"All", gal_cultura:"Culture", gal_banderas:"Flags",
    gal_personas:"People", gal_naturaleza:"Nature",
    gal_tn:"🇹🇳 Tunisian Flag", gal_es:"🇪🇸 Spanish Flag",
    gal_toro:"🐂 The Spanish Bull", gal_medina:"🕌 Medina of Tunis",
    gal_sagrada:"⛪ Sagrada Família, Barcelona",
    gal_eldjem:"🏛️ El Jem Amphitheatre",
    gal_upload:"Upload Image",
    chebbi_role:"Tunisian Poet", chebbi_desc:"Great Tunisian poet",
    farida_role:"Spanish Teacher", farida_desc:"Inspiring teacher",
    local_tag:"Location", local_title:"Our Locations",
    local_sub:"Places where we hold courses and cultural events.",
    local_featured:"⭐ Main",
    local1_title:"Cultural Centre", local1_desc:"Habib Bourguiba Ave, Tunis. Classes every Saturday 10am–12pm.",
    local1_time:"Sat 10:00–12:00", local1_cap:"20 seats",
    local2_title:"Cervantes Institute Tunis", local2_desc:"Rue de Rome, Tunis. Main venue for advanced courses and events.",
    local2_time:"Mon–Fri 9:00–17:00", local2_cap:"50 seats",
    local3_title:"Online Classes", local3_desc:"Virtual platform available 24/7 from anywhere in Tunisia or Spain.",
    local3_time:"24/7 Available", local3_cap:"Unlimited",
    grupo_tag:"Team", grupo_title:"Our Group",
    grupo_sub:"The passionate people who make this project possible.",
    m1_role:"Project Coordinator", m2_role:"Spanish Teacher",
    m3_role:"Cultural Ambassador", m4_role:"Web Designer",
    tribute_title:"Tribute: Abou El Kacem Chebbi",
    tribute_quote: '"If the people one day wish to live, fate must respond…" — Great Tunisian poet (1909–1934), symbol of resistance and the beauty of the Arab soul.',
    contacto_tag:"Contact", contacto_title:"Write to Us!",
    contacto_sub:"Questions or want to join? We're here to help you.",
    ci_email:"Email", ci_phone:"Phone", ci_addr:"Address", ci_hours:"Hours",
    ci_addr_val:"Rue de Rome, Tunis 1002", ci_hours_val:"Monday – Saturday: 9am–5pm",
    form_name:"Full name", form_name_ph:"Your name...",
    form_email:"Email address", form_email_ph:"you@email.com",
    form_msg:"Message", form_msg_ph:"Write your message...",
    form_submit:"Send Message",
    form_name_err:"Please enter your name.",
    form_email_err:"Enter a valid email address.",
    form_msg_err:"Please write a message.",
    form_success:"✅ Message sent successfully! We'll get back to you soon.",
    footer_desc:"A cultural project uniting Tunisia and Spain through language and friendship.",
    footer_links:"Quick Links", footer_follow:"Follow Us",
    footer_copy:"© 2025 SpanishTunisia. All rights reserved.",
    footer_made:"Made with ❤️ in Tunisia & Spain",
    post_like:"👍 Like", post_reply:"💬 Reply", post_share:"🔗 Share",
  },

  /* ── ITALIAN ── */
  it: {
    brand:          "SpagnoloTunisia",
    nav_inicio:     "Home",
    nav_foro:       "Forum",
    nav_galeria:    "Galleria",
    nav_local:      "Luogo",
    nav_grupo:      "Gruppo",
    nav_contacto:   "Contatto",
    hero_badge:     "🌟 Progetto Culturale",
    hero_title:     "Impara lo Spagnolo<br/><em>Facilmente</em>",
    hero_subtitle:  "Un ponte culturale tra Tunisia e Spagna. Scopri la lingua, la cultura e l'amicizia che ci unisce.",
    hero_cta1:      "Unisciti al Forum",
    hero_cta2:      "Vedi la Galleria",
    stat1:"Studenti", stat2:"Lezioni", stat3:"Culture",
    foro_tag:  "Comunità",
    foro_title:"Forum di Discussione",
    foro_sub:  "Condividi le tue esperienze, domande e consigli sullo spagnolo.",
    foro_name_ph:"Il tuo nome...", foro_msg_ph:"Scrivi il tuo messaggio qui...",
    foro_hint:"Sii gentile e rispettoso 🙏", foro_post:"Pubblica",
    galeria_tag:"Visivo", galeria_title:"Galleria Culturale",
    galeria_sub:"Immagini che celebrano l'unione tra due culture.",
    gal_all:"Tutto", gal_cultura:"Cultura", gal_banderas:"Bandiere",
    gal_personas:"Persone", gal_naturaleza:"Natura",
    gal_tn:"🇹🇳 Bandiera della Tunisia", gal_es:"🇪🇸 Bandiera della Spagna",
    gal_toro:"🐂 Il Toro Spagnolo", gal_medina:"🕌 Medina di Tunisi",
    gal_sagrada:"⛪ Sagrada Família, Barcellona",
    gal_eldjem:"🏛️ Anfiteatro di El Jem",
    gal_upload:"Carica immagine",
    chebbi_role:"Poeta Tunisino", chebbi_desc:"Grande poeta tunisino",
    farida_role:"Professoressa di Spagnolo", farida_desc:"Insegnante ispiratrice",
    local_tag:"Posizione", local_title:"I Nostri Locali",
    local_sub:"Luoghi dove teniamo corsi ed eventi culturali.",
    local_featured:"⭐ Principale",
    local1_title:"Centro Culturale", local1_desc:"Viale Habib Bourguiba, Tunisi. Lezioni ogni sabato dalle 10 alle 12.",
    local1_time:"Sab 10:00–12:00", local1_cap:"20 posti",
    local2_title:"Istituto Cervantes Tunisi", local2_desc:"Rue de Rome, Tunisi. Sede principale dei corsi avanzati.",
    local2_time:"Lun–Ven 9:00–17:00", local2_cap:"50 posti",
    local3_title:"Lezioni Online", local3_desc:"Piattaforma virtuale disponibile 24/7 da qualsiasi luogo.",
    local3_time:"24/7 Disponibile", local3_cap:"Illimitato",
    grupo_tag:"Team", grupo_title:"Il Nostro Gruppo",
    grupo_sub:"Le persone appassionate che rendono possibile questo progetto.",
    m1_role:"Coordinatrice del Progetto", m2_role:"Professore di Spagnolo",
    m3_role:"Ambasciatrice Culturale", m4_role:"Web Designer",
    tribute_title:"Omaggio: Abou El Kacem Chebbi",
    tribute_quote: '"Se un giorno il popolo vuole vivere, il destino deve rispondere…" — Grande poeta tunisino (1909–1934), simbolo della resistenza e della bellezza dell\'anima araba.',
    contacto_tag:"Contatto", contacto_title:"Scrivici!",
    contacto_sub:"Hai domande o vuoi unirti? Siamo qui per aiutarti.",
    ci_email:"Email", ci_phone:"Telefono", ci_addr:"Indirizzo", ci_hours:"Orario",
    ci_addr_val:"Rue de Rome, Tunisi 1002", ci_hours_val:"Lunedì – Sabato: 9–17",
    form_name:"Nome completo", form_name_ph:"Il tuo nome...",
    form_email:"Indirizzo email", form_email_ph:"tu@email.com",
    form_msg:"Messaggio", form_msg_ph:"Scrivi il tuo messaggio...",
    form_submit:"Invia Messaggio",
    form_name_err:"Per favore inserisci il tuo nome.",
    form_email_err:"Inserisci un'email valida.",
    form_msg_err:"Per favore scrivi un messaggio.",
    form_success:"✅ Messaggio inviato con successo! Ti risponderemo presto.",
    footer_desc:"Un progetto culturale che unisce Tunisia e Spagna attraverso lingua e amicizia.",
    footer_links:"Link rapidi", footer_follow:"Seguici",
    footer_copy:"© 2025 SpagnoloTunisia. Tutti i diritti riservati.",
    footer_made:"Fatto con ❤️ in Tunisia & Spagna",
    post_like:"👍 Mi piace", post_reply:"💬 Rispondi", post_share:"🔗 Condividi",
  }
};

/* ============================================================
   2. LANGUAGE SWITCHER
   ============================================================ */
let currentLang = 'es';

/**
 * Apply a given language to all translatable elements.
 * Elements use data-key="translation_key" on text nodes,
 * or data-key-ph="translation_key" for placeholders.
 */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;

  // Update document language attribute
  document.documentElement.lang = lang;

  // RTL support for Arabic
  document.body.classList.toggle('rtl', lang === 'ar');

  // Translate all text nodes
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (!t[key]) return;

    // Hero title uses innerHTML for <br/> and <em>
    if (key === 'hero_title' || key === 'tribute_quote') {
      el.innerHTML = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-key-ph]').forEach(el => {
    const key = el.getAttribute('data-key-ph');
    if (t[key]) el.placeholder = t[key];
  });

  // Update forum placeholder attributes
  const forumAuthor = document.getElementById('forumAuthor');
  const forumMessage = document.getElementById('forumMessage');
  if (forumAuthor && t.foro_name_ph) forumAuthor.placeholder = t.foro_name_ph;
  if (forumMessage && t.foro_msg_ph)  forumMessage.placeholder = t.foro_msg_ph;

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Re-render forum posts with updated button labels
  renderForumPosts();
}

// Bind language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* ============================================================
   3. FORUM (Frontend Simulation)
   ============================================================ */

// Seed data — starter posts
let forumPosts = [
  {
    id: 1,
    author: "Farida Quere",
    avatar: "F",
    time: "Hace 2 horas",
    body: "¡Bienvenidos al foro! Este es un espacio para aprender juntos. No duden en hacer preguntas sobre el español. 😊",
    likes: 12,
    pinned: true
  },
  {
    id: 2,
    author: "Ahmed Ben Ali",
    avatar: "A",
    time: "Hace 4 horas",
    body: "¿Cuál es la diferencia entre 'ser' y 'estar'? Es uno de los temas más confusos para los estudiantes arabófonos.",
    likes: 8,
    pinned: false
  },
  {
    id: 3,
    author: "María García",
    avatar: "M",
    time: "Hace 1 día",
    body: "¡Hola a todos desde España! Estoy muy contenta de participar en este proyecto cultural tan bonito. 🇪🇸🇹🇳",
    likes: 15,
    pinned: false
  }
];

let postIdCounter = forumPosts.length + 1;

/**
 * Render all forum posts to the DOM.
 */
function renderForumPosts() {
  const container = document.getElementById('forumPosts');
  if (!container) return;
  const t = translations[currentLang];

  container.innerHTML = forumPosts.map(post => `
    <div class="forum-post ${post.pinned ? 'pinned' : ''}" id="post-${post.id}">
      <div class="post-header">
        <div class="post-author">
          <div class="post-ava">${post.avatar}</div>
          <div>
            <div class="post-name">${escHtml(post.author)}</div>
            <div class="post-time">${escHtml(post.time)}</div>
          </div>
        </div>
        ${post.pinned ? `<span class="section-tag" style="font-size:0.68rem;padding:2px 10px;">📌 Fijo</span>` : ''}
      </div>
      <div class="post-body">${escHtml(post.body)}</div>
      <div class="post-actions">
        <button class="post-action-btn" onclick="likePost(${post.id})">
          ${t.post_like || '👍 Me gusta'} <span class="like-count">(${post.likes})</span>
        </button>
        <button class="post-action-btn">${t.post_reply || '💬 Responder'}</button>
        <button class="post-action-btn">${t.post_share || '🔗 Compartir'}</button>
      </div>
    </div>
  `).join('');
}

/**
 * Like a post.
 */
function likePost(id) {
  const post = forumPosts.find(p => p.id === id);
  if (post) {
    post.likes++;
    renderForumPosts();
  }
}

/**
 * Post a new message to the forum.
 */
document.getElementById('postBtn')?.addEventListener('click', () => {
  const authorInput = document.getElementById('forumAuthor');
  const msgInput    = document.getElementById('forumMessage');
  const author = authorInput.value.trim();
  const body   = msgInput.value.trim();

  if (!author || !body) {
    if (!author) authorInput.style.borderColor = 'var(--red)';
    if (!body)   msgInput.style.borderColor = 'var(--red)';
    return;
  }

  // Reset border
  authorInput.style.borderColor = '';
  msgInput.style.borderColor = '';

  // Add new post at the top (after pinned ones)
  const firstNonPinned = forumPosts.findIndex(p => !p.pinned);
  const newPost = {
    id: postIdCounter++,
    author,
    avatar: author.charAt(0).toUpperCase(),
    time: "Ahora mismo",
    body,
    likes: 0,
    pinned: false
  };

  if (firstNonPinned === -1) {
    forumPosts.push(newPost);
  } else {
    forumPosts.splice(firstNonPinned, 0, newPost);
  }

  authorInput.value = '';
  msgInput.value = '';
  renderForumPosts();

  // Scroll to new post
  setTimeout(() => {
    document.getElementById(`post-${newPost.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
});

/**
 * Escape HTML to prevent XSS in forum posts.
 */
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ============================================================
   4. GALLERY FILTERING
   ============================================================ */

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    document.querySelectorAll('.gallery-item').forEach(item => {
      const cat = item.getAttribute('data-cat');
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
        item.style.animation = 'none';
        item.offsetHeight; // reflow
        item.style.animation = 'fadeInUp 0.5s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ============================================================
   5. IMAGE UPLOAD HANDLER
   ============================================================ */

/**
 * Handle image upload from the gallery placeholder.
 * Creates a new gallery item with the uploaded image.
 */
function handleUpload(event) {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith('image/')) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const grid = document.getElementById('galleryGrid');
    const uploadItem = document.querySelector('[data-cat="cultura"] .upload-placeholder')?.closest('.gallery-item');

    // Create new gallery item
    const newItem = document.createElement('div');
    newItem.className = 'gallery-item';
    newItem.setAttribute('data-cat', 'cultura');
    newItem.innerHTML = `
      <div class="gal-img-wrap">
        <img src="${e.target.result}" alt="${escHtml(file.name)}" />
        <div class="gal-overlay">
          <span>📷 ${escHtml(file.name)}</span>
        </div>
      </div>
    `;
    newItem.style.animation = 'fadeInUp 0.5s ease forwards';

    // Insert before the upload placeholder
    if (uploadItem) {
      grid.insertBefore(newItem, uploadItem);
    } else {
      grid.appendChild(newItem);
    }

    // Reset file input
    event.target.value = '';
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   6. CONTACT FORM VALIDATION
   ============================================================ */

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const t = translations[currentLang];

  const nameEl  = document.getElementById('cName');
  const emailEl = document.getElementById('cEmail');
  const msgEl   = document.getElementById('cMsg');
  const success = document.getElementById('formSuccess');

  let valid = true;

  // Validate name
  if (!nameEl.value.trim()) {
    nameEl.classList.add('is-invalid');
    valid = false;
  } else {
    nameEl.classList.remove('is-invalid');
    nameEl.classList.add('is-valid');
  }

  // Validate email
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(emailEl.value.trim())) {
    emailEl.classList.add('is-invalid');
    valid = false;
  } else {
    emailEl.classList.remove('is-invalid');
    emailEl.classList.add('is-valid');
  }

  // Validate message
  if (!msgEl.value.trim()) {
    msgEl.classList.add('is-invalid');
    valid = false;
  } else {
    msgEl.classList.remove('is-invalid');
    msgEl.classList.add('is-valid');
  }

  if (valid) {
    // Simulate form submission
    const submitBtn = this.querySelector('.btn-submit');
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      success.textContent = t.form_success || '✅ ¡Mensaje enviado con éxito!';
      success.classList.remove('d-none');
      submitBtn.innerHTML = `<i class="bi bi-send me-2"></i><span>${t.form_submit || 'Enviar Mensaje'}</span>`;
      submitBtn.disabled = false;

      // Reset form fields
      nameEl.value = '';
      emailEl.value = '';
      msgEl.value = '';
      [nameEl, emailEl, msgEl].forEach(el => {
        el.classList.remove('is-valid');
      });

      // Hide success after 5s
      setTimeout(() => success.classList.add('d-none'), 5000);
    }, 1200);
  }
});

/* ============================================================
   7. NAVBAR SHRINK ON SCROLL
   ============================================================ */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
});

/* ============================================================
   8. BACK-TO-TOP BUTTON
   ============================================================ */
const backBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (backBtn) {
    backBtn.classList.toggle('visible', window.scrollY > 400);
  }
});

backBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   9. ACTIVE NAV LINK ON SCROLL (Intersection Observer)
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

/* ============================================================
   10. SCROLL-TRIGGERED ANIMATIONS
   ============================================================ */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Observe cards and headers for animation
document.querySelectorAll(
  '.local-card, .member-card, .forum-post, .gallery-item, .section-header, .tribute-card, .contact-info'
).forEach(el => animObserver.observe(el));

/* ============================================================
   11. SMOOTH SCROLL FOR NAV LINKS (polyfill for older browsers)
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Close mobile menu if open
      const navCollapse = document.getElementById('navMenu');
      if (navCollapse && navCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    }
  });
});

/* ============================================================
   12. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render initial forum posts
  renderForumPosts();

  // Apply default language (Spanish)
  applyLanguage('es');

  // Animate hero content on load
  document.querySelector('.hero-content')?.classList.add('animate-in');
});