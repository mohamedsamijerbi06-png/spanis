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
/* ============================================================
   13. GALLERY MODAL DATA & LOGIC
   ============================================================ */

const galleryModalData = {

  chebbi: {
    img: "abu-qasim-al-shabbi-poeta-poesia-tunisia-novecento-romaticismo-arabao-letteratura-cultural-antropologia-amore-indipendenza-primavera-araba-africa-nord-maghreb-francia.webp",
    tag:   { es: "🖋️ Poeta Tunecino", ar: "🖋️ شاعر تونسي", fr: "🖋️ Poète Tunisien", en: "🖋️ Tunisian Poet", it: "🖋️ Poeta Tunisino" },
    title: { es: "Abou El Kacem Chebbi", ar: "أبو القاسم الشابي", fr: "Abou El Kacem Chebbi", en: "Abou El Kacem Chebbi", it: "Abou El Kacem Chebbi" },
    caption: { es: "Fotografía histórica del poeta (1909–1934)", ar: "صورة تاريخية للشاعر (1909–1934)", fr: "Photo historique du poète (1909–1934)", en: "Historic photograph of the poet (1909–1934)", it: "Fotografia storica del poeta (1909–1934)" },
    meta: {
      es: ["📅 1909 – 1934","📍 Tozeur, Túnez","📚 Romanticismo árabe"],
      ar: ["📅 1909 – 1934","📍 توزر، تونس","📚 الرومانسية العربية"],
      fr: ["📅 1909 – 1934","📍 Tozeur, Tunisie","📚 Romantisme arabe"],
      en: ["📅 1909 – 1934","📍 Tozeur, Tunisia","📚 Arab Romanticism"],
      it: ["📅 1909 – 1934","📍 Tozeur, Tunisia","📚 Romanticismo arabo"],
    },
    body: {
      es: "<p>Abou El Kacem Chebbi (1909–1934) es el poeta más célebre de Túnez y una de las voces más importantes de la literatura árabe moderna. Nacido en Tozeur, en el sur de Túnez, demostró un talento literario excepcional desde muy joven.</p><p>Estudió en la Universidad Zitouna de Túnez, donde se empapó de la gran herencia poética árabe clásica, pero al mismo tiempo se inspiró en el romanticismo europeo para forjar un estilo propio, sensible y apasionado.</p><p>Aunque falleció a los 25 años a causa de una enfermedad cardíaca, dejó una obra monumental. Su poema más famoso, <em>«Iradatu al-Hayat»</em> (La voluntad de vivir), se convirtió en himno de la resistencia y de la primavera árabe. Su primer verso figura en el himno nacional de Túnez.</p>",
      ar: "<p>أبو القاسم الشابي (1909–1934) أبرز شعراء تونس وأحد أهم الأصوات في الأدب العربي الحديث. وُلد في توزر جنوب تونس، وأظهر موهبةً أدبية استثنائية منذ صغره.</p><p>درس في جامعة الزيتونة بتونس، حيث تشرّب الإرث الشعري العربي الكلاسيكي، وتأثّر في آنٍ واحد بالرومانسية الأوروبية ليُكوّن أسلوبه الخاص المفعم بالحساسية والشغف.</p><p>على الرغم من وفاته في الخامسة والعشرين من عمره بسبب مرض القلب، خلّف إرثاً أدبياً ضخماً. قصيدته الأشهر «إرادة الحياة» أصبحت نشيداً للمقاومة والربيع العربي، ومطلعها يُزيّن النشيد الوطني التونسي.</p>",
      fr: "<p>Abou El Kacem Chebbi (1909–1934) est le poète le plus célèbre de Tunisie et l'une des voix les plus importantes de la littérature arabe moderne. Né à Tozeur, dans le sud de la Tunisie, il montra un talent littéraire exceptionnel dès son plus jeune âge.</p><p>Il étudia à l'Université Zitouna de Tunis, où il s'imprégna du grand héritage poétique arabe classique tout en s'inspirant du romantisme européen pour forger son propre style, sensible et passionné.</p><p>Bien qu'il soit décédé à 25 ans d'une maladie cardiaque, il a laissé une œuvre monumentale. Son poème le plus célèbre, <em>«Iradat al-Hayat»</em> (La Volonté de vivre), est devenu un hymne à la résistance et au Printemps arabe. Son premier vers figure dans l'hymne national tunisien.</p>",
      en: "<p>Abou El Kacem Chebbi (1909–1934) is Tunisia's most celebrated poet and one of the most important voices in modern Arabic literature. Born in Tozeur, southern Tunisia, he showed exceptional literary talent from a very young age.</p><p>He studied at the Zitouna University in Tunis, where he absorbed the great classical Arab poetic heritage while drawing inspiration from European Romanticism to forge his own sensitive and passionate style.</p><p>Although he died at 25 from a heart condition, he left a monumental body of work. His most famous poem, <em>'Iradat al-Hayat'</em> (The Will to Live), became a hymn of resistance and the Arab Spring. Its opening verse features in the Tunisian national anthem.</p>",
      it: "<p>Abou El Kacem Chebbi (1909–1934) è il poeta più celebre della Tunisia e una delle voci più importanti della letteratura araba moderna. Nato a Tozeur, nel sud della Tunisia, mostrò un talento letterario eccezionale sin da giovane.</p><p>Studiò all'Università Zitouna di Tunisi, dove assorbì la grande eredità poetica araba classica, ispirandosi al romanticismo europeo per forgiare uno stile personale, sensibile e appassionato.</p><p>Sebbene sia morto a 25 anni per una malattia cardiaca, ha lasciato un'opera monumentale. La sua poesia più famosa, <em>«Iradat al-Hayat»</em> (La Volontà di Vivere), è diventata un inno alla resistenza e alla Primavera araba. Il suo primo verso compare nell'inno nazionale tunisino.</p>",
    },
    facts: {
      es: [["Nombre completo","أبو القاسم الشابي / Abou El Kacem Chebbi"],["Nacimiento","24 feb. 1909, Tozeur"],["Fallecimiento","9 oct. 1934, Túnez (25 años)"],["Obra principal","Aghani al-Hayat (Cantos de la vida)"],["Lengua","Árabe"]],
      ar: [["الاسم الكامل","أبو القاسم الشابي"],["الميلاد","24 فبراير 1909، توزر"],["الوفاة","9 أكتوبر 1934، تونس (25 عامًا)"],["أبرز أعماله","أغاني الحياة"],["اللغة","العربية"]],
      fr: [["Nom complet","Abou El Kacem Chebbi"],["Naissance","24 fév. 1909, Tozeur"],["Décès","9 oct. 1934, Tunis (25 ans)"],["Œuvre principale","Aghani al-Hayat (Chants de la vie)"],["Langue","Arabe"]],
      en: [["Full name","Abou El Kacem Chebbi"],["Born","Feb 24, 1909, Tozeur"],["Died","Oct 9, 1934, Tunis (aged 25)"],["Main work","Aghani al-Hayat (Songs of Life)"],["Language","Arabic"]],
      it: [["Nome completo","Abou El Kacem Chebbi"],["Nascita","24 feb. 1909, Tozeur"],["Morte","9 ott. 1934, Tunisi (25 anni)"],["Opera principale","Aghani al-Hayat (Canti della vita)"],["Lingua","Arabo"]],
    },
    quote: {
      es: { text: "Si el pueblo un día quiere vivir, el destino debe responder, y la noche debe desvanecerse, y las cadenas deben romperse.", author: "— Abou El Kacem Chebbi, «Iradat al-Hayat»" },
      ar: { text: "إذا الشعب يوماً أراد الحياة، فلا بدّ أن يستجيب القدر، ولا بدّ لليل أن ينجلي، ولا بدّ للقيد أن ينكسر.", author: "— أبو القاسم الشابي، «إرادة الحياة»" },
      fr: { text: "Si un jour le peuple veut vivre, le destin doit répondre, la nuit doit se dissiper et les chaînes doivent se briser.", author: "— Abou El Kacem Chebbi, «Iradat al-Hayat»" },
      en: { text: "If one day the people will to live, then fate must answer the call, the night must peel away, and the shackles must break.", author: "— Abou El Kacem Chebbi, «Iradat al-Hayat»" },
      it: { text: "Se un giorno il popolo vorrà vivere, il destino dovrà rispondere, la notte dovrà diradarsi e le catene dovranno spezzarsi.", author: "— Abou El Kacem Chebbi, «Iradat al-Hayat»" },
    },
  },

  bandera_tn: {
    img: "bandera-de-túnez-revuelta-cerca.webp",
    tag:   { es: "🏳️ Bandera Nacional", ar: "🏳️ علم وطني", fr: "🏳️ Drapeau National", en: "🏳️ National Flag", it: "🏳️ Bandiera Nazionale" },
    title: { es: "Bandera de Túnez 🇹🇳", ar: "علم تونس 🇹🇳", fr: "Drapeau de la Tunisie 🇹🇳", en: "Flag of Tunisia 🇹🇳", it: "Bandiera della Tunisia 🇹🇳" },
    caption: { es: "La bandera tunecina, símbolo de identidad nacional", ar: "العلم التونسي، رمز الهوية الوطنية", fr: "Le drapeau tunisien, symbole d'identité nationale", en: "The Tunisian flag, symbol of national identity", it: "La bandiera tunisina, simbolo di identità nazionale" },
    meta: {
      es: ["📅 Adoptada: 1831","🎨 Rojo y blanco","⭐ Media luna y estrella"],
      ar: ["📅 اعتُمد: 1831","🎨 الأحمر والأبيض","⭐ الهلال والنجمة"],
      fr: ["📅 Adoptée: 1831","🎨 Rouge et blanc","⭐ Croissant et étoile"],
      en: ["📅 Adopted: 1831","🎨 Red & white","⭐ Crescent & star"],
      it: ["📅 Adottata: 1831","🎨 Rosso e bianco","⭐ Mezzaluna e stella"],
    },
    body: {
      es: "<p>La bandera de Túnez es una de las más reconocibles del mundo árabe. Su fondo rojo intenso evoca la sangre de los mártires que dieron su vida por la independencia del país. En el centro, un círculo blanco contiene una media luna roja y una estrella de cinco puntas, símbolos del islam.</p><p>Esta bandera fue adoptada oficialmente en 1831 durante el reinado de Hussein II Bey. Al proclamarse la república en 1956, tras la independencia de Francia, fue mantenida como símbolo nacional con pequeñas modificaciones.</p><p>El diseño recuerda a la bandera del Imperio Otomano, recordatorio de los tres siglos de soberanía otomana sobre Túnez (1574–1881).</p>",
      ar: "<p>علم تونس من أكثر الرموز الوطنية تميزاً في العالم العربي. يرمز لونه الأحمر القاني إلى دماء الشهداء الذين ضحّوا بأرواحهم من أجل استقلال البلاد. في وسطه دائرة بيضاء تحتضن هلالاً أحمر ونجمة خماسية، وهي رموز إسلامية عريقة.</p><p>اعتُمد هذا العلم رسمياً عام 1831 في عهد الحسين الثاني باي. وعند إعلان الجمهورية عام 1956 عقب الاستقلال عن فرنسا، حُفظ العلم رمزاً وطنياً مع تعديلات طفيفة.</p><p>يستحضر التصميم علم الدولة العثمانية، تذكيراً بثلاثة قرون من السيادة العثمانية على تونس (1574–1881).</p>",
      fr: "<p>Le drapeau de la Tunisie est l'un des plus reconnaissables du monde arabe. Son fond rouge vif évoque le sang des martyrs qui ont donné leur vie pour l'indépendance du pays. Au centre, un cercle blanc contient un croissant rouge et une étoile à cinq branches, symboles de l'islam.</p><p>Ce drapeau a été officiellement adopté en 1831 sous le règne de Hussein II Bey. Lors de la proclamation de la République en 1956, après l'indépendance de la France, il a été conservé comme symbole national avec de légères modifications.</p>",
      en: "<p>Tunisia's flag is one of the most recognizable in the Arab world. Its deep red background evokes the blood of the martyrs who gave their lives for the country's independence. At the center, a white circle contains a red crescent and five-pointed star — symbols of Islam.</p><p>The flag was officially adopted in 1831 during the reign of Hussein II Bey. When the republic was proclaimed in 1956 after independence from France, it was retained as the national symbol with minor modifications.</p>",
      it: "<p>La bandiera della Tunisia è una delle più riconoscibili del mondo arabo. Il suo intenso sfondo rosso evoca il sangue dei martiri che hanno dato la vita per l'indipendenza del paese. Al centro, un cerchio bianco contiene una mezzaluna rossa e una stella a cinque punte, simboli dell'islam.</p><p>Questa bandiera fu adottata ufficialmente nel 1831 sotto il regno di Hussein II Bey. Quando fu proclamata la repubblica nel 1956, dopo l'indipendenza dalla Francia, fu mantenuta come simbolo nazionale con piccole modifiche.</p>",
    },
    facts: {
      es: [["Color principal","Rojo (#E70013) y Blanco"],["Símbolos","Media luna + estrella roja en círculo blanco"],["Proporción","2:3"],["Adoptada","1831 (república: 1956)"],["Significado","Independencia, identidad islámica"]],
      ar: [["اللون الرئيسي","الأحمر (#E70013) والأبيض"],["الرموز","هلال + نجمة حمراء في دائرة بيضاء"],["النسبة","2:3"],["اعتُمد","1831 (الجمهورية: 1956)"],["المعنى","الاستقلال، الهوية الإسلامية"]],
      fr: [["Couleur principale","Rouge (#E70013) et Blanc"],["Symboles","Croissant + étoile rouge dans cercle blanc"],["Proportion","2:3"],["Adoptée","1831 (République: 1956)"],["Signification","Indépendance, identité islamique"]],
      en: [["Main color","Red (#E70013) & White"],["Symbols","Crescent + red star in white circle"],["Ratio","2:3"],["Adopted","1831 (Republic: 1956)"],["Meaning","Independence, Islamic identity"]],
      it: [["Colore principale","Rosso (#E70013) e Bianco"],["Simboli","Mezzaluna + stella rossa in cerchio bianco"],["Proporzione","2:3"],["Adottata","1831 (Repubblica: 1956)"],["Significato","Indipendenza, identità islamica"]],
    },
    quote: { es: null, ar: null, fr: null, en: null, it: null },
  },

  bandera_es: {
    img: "photo-1676286155301-23733df4dc11.webp",
    tag:   { es: "🏳️ Bandera Nacional", ar: "🏳️ علم وطني", fr: "🏳️ Drapeau National", en: "🏳️ National Flag", it: "🏳️ Bandiera Nazionale" },
    title: { es: "Bandera de España 🇪🇸", ar: "علم إسبانيا 🇪🇸", fr: "Drapeau de l'Espagne 🇪🇸", en: "Flag of Spain 🇪🇸", it: "Bandiera della Spagna 🇪🇸" },
    caption: { es: "La Rojigualda, orgullo de España", ar: "الراية الحمراء والصفراء، فخر إسبانيا", fr: "La Rojigualda, fierté de l'Espagne", en: "La Rojigualda, Spain's national pride", it: "La Rojigualda, orgoglio della Spagna" },
    meta: {
      es: ["📅 Diseño actual: 1981","🎨 Rojo y amarillo","👑 Escudo real"],
      ar: ["📅 التصميم الحالي: 1981","🎨 الأحمر والأصفر","👑 الشعار الملكي"],
      fr: ["📅 Design actuel: 1981","🎨 Rouge et jaune","👑 Blason royal"],
      en: ["📅 Current design: 1981","🎨 Red & yellow","👑 Royal coat of arms"],
      it: ["📅 Design attuale: 1981","🎨 Rosso e giallo","👑 Stemma reale"],
    },
    body: {
      es: "<p>La bandera de España, conocida popularmente como la <strong>Rojigualda</strong>, es uno de los símbolos más reconocibles de Europa. Sus franjas roja-amarilla-roja fueron establecidas por el rey Carlos III en 1785 para distinguir los buques de guerra españoles.</p><p>En el centro de la franja amarilla (gualda) se encuentra el Escudo de España, que incluye los castillos de Castilla, los leones de León, las barras de Aragón, las cadenas de Navarra y la granada de Granada. También aparece el águila de San Juan y la corona real.</p><p>El diseño actual fue adoptado con la Constitución española de 1978 y su escudo fue oficialmente aprobado en 1981.</p>",
      ar: "<p>العلم الإسباني، المعروف شعبياً بـ<strong>«روخيغوالدا»</strong> (الأحمر والذهبي)، أحد أكثر الرموز الأوروبية تميزاً. شرائطه الحمراء والصفراء والحمراء أقرّها الملك كارلوس الثالث عام 1785 لتمييز السفن الحربية الإسبانية.</p><p>في وسط الشريط الأصفر يتربّع شعار إسبانيا الذي يضم قلاع قشتالة، وأسود ليون، وخطوط أراغون، وسلاسل نافار، ورمّانة غرناطة، فضلاً عن نسر القديس يوحنا والتاج الملكي.</p>",
      fr: "<p>Le drapeau espagnol, populairement connu sous le nom de <strong>Rojigualda</strong>, est l'un des symboles les plus reconnaissables d'Europe. Ses bandes rouge-jaune-rouge ont été établies par le roi Charles III en 1785 pour distinguer les navires de guerre espagnols.</p><p>Au centre de la bande jaune se trouve l'Écu d'Espagne, qui comprend les châteaux de Castille, les lions de León, les barres d'Aragon, les chaînes de Navarre et la grenade de Grenade, ainsi que l'aigle de Saint-Jean et la couronne royale.</p>",
      en: "<p>The flag of Spain, popularly known as the <strong>Rojigualda</strong> (red-and-gold), is one of Europe's most recognizable symbols. Its red-yellow-red stripes were established by King Charles III in 1785 to distinguish Spanish warships.</p><p>At the center of the yellow stripe sits the Coat of Arms of Spain, featuring the castles of Castile, the lions of León, the bars of Aragon, the chains of Navarre, and the pomegranate of Granada, along with the Eagle of Saint John and the royal crown.</p>",
      it: "<p>La bandiera spagnola, popolarmente nota come <strong>Rojigualda</strong>, è uno dei simboli più riconoscibili d'Europa. Le sue strisce rosso-giallo-rosso furono stabilite dal re Carlo III nel 1785 per distinguere le navi da guerra spagnole.</p><p>Al centro della striscia gialla si trova lo Stemma di Spagna, che include i castelli di Castiglia, i leoni di León, le barre d'Aragona, le catene di Navarra e la melagrana di Granada, con l'Aquila di San Giovanni e la corona reale.</p>",
    },
    facts: {
      es: [["Colores","Rojo (#AA151B) y Amarillo (#F1BF00)"],["Franjas","3 horizontales (rojo-amarillo-rojo, 1:2:1)"],["Escudo","Sí — aprobado en 1981"],["Adoptada","1978 (Constitución)"],["Apodo","La Rojigualda"]],
      ar: [["الألوان","الأحمر (#AA151B) والأصفر (#F1BF00)"],["الشرائط","3 أفقية (أحمر-أصفر-أحمر، 1:2:1)"],["الشعار","نعم — اعتُمد 1981"],["اعتُمد","1978 (الدستور)"],["اللقب","روخيغوالدا"]],
      fr: [["Couleurs","Rouge (#AA151B) et Jaune (#F1BF00)"],["Bandes","3 horizontales (rouge-jaune-rouge, 1:2:1)"],["Écu","Oui — approuvé en 1981"],["Adoptée","1978 (Constitution)"],["Surnom","La Rojigualda"]],
      en: [["Colors","Red (#AA151B) & Yellow (#F1BF00)"],["Stripes","3 horizontal (red-yellow-red, 1:2:1)"],["Coat of arms","Yes — approved 1981"],["Adopted","1978 (Constitution)"],["Nickname","La Rojigualda"]],
      it: [["Colori","Rosso (#AA151B) e Giallo (#F1BF00)"],["Fasce","3 orizzontali (rosso-giallo-rosso, 1:2:1)"],["Stemma","Sì — approvato nel 1981"],["Adottata","1978 (Costituzione)"],["Soprannome","La Rojigualda"]],
    },
    quote: { es: null, ar: null, fr: null, en: null, it: null },
  },

  tauromaquia: {
    img: "bullfighter-and-bull.webp",
    tag:   { es: "🐂 Tradición Española", ar: "🐂 تقليد إسباني", fr: "🐂 Tradition Espagnole", en: "🐂 Spanish Tradition", it: "🐂 Tradizione Spagnola" },
    title: { es: "La Tauromaquia", ar: "مصارعة الثيران", fr: "La Tauromachie", en: "Bullfighting", it: "La Tauromachia" },
    caption: { es: "Un matador enfrenta al toro en la plaza", ar: "مصارع يواجه الثور في الحلبة", fr: "Un matador face au taureau", en: "A matador faces the bull in the arena", it: "Un matador affronta il toro nell'arena" },
    meta: {
      es: ["🗓️ Orígenes: s. XVIII","📍 España, Portugal, Latinoamérica","⚖️ Tema controvertido"],
      ar: ["🗓️ الأصول: القرن 18","📍 إسبانيا، البرتغال، أمريكا اللاتينية","⚖️ موضوع مثير للجدل"],
      fr: ["🗓️ Origines: XVIIIe s.","📍 Espagne, Portugal, Am. latine","⚖️ Sujet controversé"],
      en: ["🗓️ Origins: 18th c.","📍 Spain, Portugal, Latin America","⚖️ Controversial topic"],
      it: ["🗓️ Origini: XVIII sec.","📍 Spagna, Portogallo, Am. latina","⚖️ Argomento controverso"],
    },
    body: {
      es: "<p>La tauromaquia es una tradición centenaria asociada con España, aunque también tiene raíces en Portugal y América Latina. En su forma clásica, el <em>toreo</em> es un arte que se desarrolla en tres partes (tercios) en la plaza de toros.</p><p>El espectáculo comienza con el <em>tercio de varas</em>, donde los picadores a caballo debilitan los músculos del cuello del toro. Sigue el <em>tercio de banderillas</em>, y culmina con el <em>tercio de muerte</em>, en que el matador ejecuta la faena con la muleta roja y el estoque.</p><p>Es un tema profundamente debatido: para muchos es patrimonio cultural inmaterial, arte y símbolo identitario; para otros, una práctica incompatible con el bienestar animal. En 2016, la UNESCO rechazó su inclusión como patrimonio cultural, y varias comunidades autónomas españolas la han restringido o prohibido.</p>",
      ar: "<p>مصارعة الثيران تقليد عريق مرتبط بإسبانيا، وإن كانت جذوره تمتد أيضاً إلى البرتغال وأمريكا اللاتينية. في شكلها الكلاسيكي، تُعدّ فن حلبة الثيران فناً يتطور في ثلاثة أقسام (ثلث).</p><p>يبدأ العرض بـ«ثلث الرماح» حيث يضعف الفرسان عضلات رقبة الثور، يتبعه «ثلث البنادق»، ثم يتوج بـ«ثلث الموت» الذي يُنفّذ فيه المصارع عرضه بالقماشة الحمراء والرمح.</p><p>وهو موضوع يثير جدلاً واسعاً: فريق يراه تراثاً ثقافياً وهوية؛ وآخر يعدّه ممارسةً لا تتوافق مع رفاهية الحيوان.</p>",
      fr: "<p>La tauromachie est une tradition séculaire associée à l'Espagne, bien qu'elle ait également des racines au Portugal et en Amérique latine. Dans sa forme classique, la corrida est un art qui se déroule en trois parties (tiers) dans les arènes.</p><p>Le spectacle commence par le <em>tercio de varas</em>, où les picadors à cheval affaiblissent les muscles du cou du taureau. Suit le <em>tercio de banderilles</em>, et culmine avec le <em>tercio de mort</em>, où le matador exécute sa faena avec la muleta rouge et l'estoc.</p><p>C'est un sujet profondément débattu : pour beaucoup, c'est un patrimoine culturel immatériel et un symbole identitaire ; pour d'autres, une pratique incompatible avec le bien-être animal.</p>",
      en: "<p>Bullfighting is a centuries-old tradition associated with Spain, though it also has roots in Portugal and Latin America. In its classic form, the <em>corrida</em> is an art form that unfolds in three stages (tercios) in the bullring.</p><p>The spectacle begins with the <em>tercio de varas</em>, where mounted picadors weaken the bull's neck muscles. This is followed by the <em>tercio de banderillas</em>, culminating in the <em>tercio de muerte</em>, where the matador performs his faena with the red muleta and sword.</p><p>It is a deeply debated topic: for many it is intangible cultural heritage and a symbol of identity; for others, a practice incompatible with animal welfare. Several Spanish regions have restricted or banned it.</p>",
      it: "<p>La tauromachia è una tradizione secolare associata alla Spagna, sebbene abbia radici anche in Portogallo e America Latina. Nella sua forma classica, la corrida è un'arte che si svolge in tre parti (terzi) nell'arena.</p><p>Lo spettacolo inizia con il <em>tercio de varas</em>, dove i picadors a cavallo indeboliscono i muscoli del collo del toro. Segue il <em>tercio de banderillas</em>, e culmina con il <em>tercio de muerte</em>, dove il matador esegue la faena con la muleta rossa e la spada.</p>",
    },
    facts: {
      es: [["También llamada","Toreo / Corrida de toros"],["Origen","España, s. XVIII (forma moderna)"],["Duración típica","~2 horas (6 toros)"],["Figura principal","El Matador"],["Estado legal","Legal en España (restricciones regionales)"]],
      ar: [["تُعرف أيضاً بـ","ميدان الثيران / الكوريدا"],["الأصل","إسبانيا، القرن 18 (الشكل الحديث)"],["المدة المعتادة","~ساعتان (6 ثيران)"],["الشخصية الرئيسية","المصارع"],["الوضع القانوني","قانونية في إسبانيا (بقيود إقليمية)"]],
      fr: [["Aussi appelée","Corrida de toros / Toreo"],["Origine","Espagne, XVIIIe s. (forme moderne)"],["Durée typique","~2h (6 taureaux)"],["Figure principale","Le Matador"],["Statut légal","Légal en Espagne (restrictions régionales)"]],
      en: [["Also known as","Corrida de toros / Toreo"],["Origin","Spain, 18th c. (modern form)"],["Typical duration","~2 hours (6 bulls)"],["Main figure","The Matador"],["Legal status","Legal in Spain (regional restrictions)"]],
      it: [["Anche chiamata","Corrida de toros / Toreo"],["Origine","Spagna, XVIII sec. (forma moderna)"],["Durata tipica","~2 ore (6 tori)"],["Figura principale","Il Matador"],["Stato legale","Legale in Spagna (restrizioni regionali)"]],
    },
    quote: {
      es: { text: "El toreo es el único arte en que el artista pone en peligro su propia vida.", author: "— Ernest Hemingway, escritor" },
      ar: { text: "مصارعة الثيران الفن الوحيد الذي يُجازف فيه الفنان بحياته.", author: "— إرنست همنغواي، كاتب" },
      fr: { text: "La tauromachie est le seul art où l'artiste met sa propre vie en danger.", author: "— Ernest Hemingway, écrivain" },
      en: { text: "Bullfighting is the only art in which the artist is in danger of death.", author: "— Ernest Hemingway, author" },
      it: { text: "La tauromachia è l'unica arte in cui l'artista mette a rischio la propria vita.", author: "— Ernest Hemingway, scrittore" },
    },
  },

  medina: {
    img: "Medina+de+Túnez19.webp",
    tag:   { es: "🕌 Patrimonio UNESCO", ar: "🕌 تراث اليونسكو", fr: "🕌 Patrimoine UNESCO", en: "🕌 UNESCO Heritage", it: "🕌 Patrimonio UNESCO" },
    title: { es: "Medina de Túnez", ar: "مدينة تونس العتيقة", fr: "Médina de Tunis", en: "Medina of Tunis", it: "Medina di Tunisi" },
    caption: { es: "Los tejados y minaretes de la Medina, declarada Patrimonio Mundial", ar: "أسطح المدينة العتيقة ومآذنها، المصنّفة تراثاً عالمياً", fr: "Les toits et minarets de la Médina, classée au Patrimoine Mondial", en: "Rooftops and minarets of the Medina, a World Heritage Site", it: "Tetti e minareti della Medina, Patrimonio Mondiale" },
    meta: {
      es: ["📅 Fundada: s. VII d.C.","🌍 UNESCO desde 1979","📍 Centro de Túnez"],
      ar: ["📅 التأسيس: القرن 7 م","🌍 يونسكو منذ 1979","📍 وسط تونس"],
      fr: ["📅 Fondée: VIIe s. ap. J.-C.","🌍 UNESCO depuis 1979","📍 Centre de Tunis"],
      en: ["📅 Founded: 7th c. AD","🌍 UNESCO since 1979","📍 Centre of Tunis"],
      it: ["📅 Fondata: VII sec. d.C.","🌍 UNESCO dal 1979","📍 Centro di Tunisi"],
    },
    body: {
      es: "<p>La Medina de Túnez es uno de los centros históricos medievales mejor conservados del mundo árabe. Fundada en el siglo VII por los árabes, alcanzó su apogeo durante la dinastía hafside (siglos XIII-XVI), cuando fue considerada una de las ciudades más importantes del mundo islámico.</p><p>Sus callejuelas laberínticas albergan más de 700 monumentos: palacios, mezquitas, madrasas, mausoleos y fuentes. La Gran Mezquita de Zitouna, fundada en 732, es el corazón espiritual y arquitectónico de la Medina.</p><p>Los zocos tradicionales organizados por gremios (perfumistas, herreros, tejidos…) conservan siglos de artesanía e intercambio comercial. Fue declarada Patrimonio Mundial de la UNESCO en 1979.</p>",
      ar: "<p>المدينة العتيقة لتونس أحد أفضل المراكز التاريخية الأثرية المحفوظة في العالم العربي. أسّسها العرب في القرن السابع الميلادي، وبلغت ذروتها في عهد الدولة الحفصية (القرنان 13–16م)، حين اعتُبرت من أهم المدن في العالم الإسلامي.</p><p>تحتضن أزقّتها المتشعّبة أكثر من 700 معلم أثري: قصوراً ومساجد ومدارس ومقامات وسبلاً. وجامع الزيتونة المؤسَّس عام 732م قلبها الروحي والمعماري.</p><p>أسواقها التقليدية المنظَّمة حسب الحرف (العطّارون، الحدّادون، النسّاجون…) تحفظ قروناً من الحرف اليدوية والتبادل التجاري، وصنّفتها اليونسكو تراثاً عالمياً عام 1979.</p>",
      fr: "<p>La Médina de Tunis est l'un des centres historiques médiévaux les mieux conservés du monde arabe. Fondée au VIIe siècle par les Arabes, elle atteignit son apogée sous la dynastie hafside (XIIIe-XVIe s.), lorsqu'elle était considérée comme l'une des villes les plus importantes du monde islamique.</p><p>Ses ruelles labyrinthiques abritent plus de 700 monuments : palais, mosquées, médersas, mausolées et fontaines. La Grande Mosquée de la Zitouna, fondée en 732, est le cœur spirituel et architectural de la Médina. Classée au Patrimoine Mondial de l'UNESCO en 1979.</p>",
      en: "<p>The Medina of Tunis is one of the best-preserved medieval historic centres in the Arab world. Founded in the 7th century by the Arabs, it reached its peak under the Hafsid dynasty (13th–16th centuries), when it was considered one of the most important cities in the Islamic world.</p><p>Its labyrinthine alleyways contain over 700 monuments: palaces, mosques, madrasas, mausoleums and fountains. The Great Mosque of Zitouna, founded in 732, is the spiritual and architectural heart of the Medina. Declared a UNESCO World Heritage Site in 1979.</p>",
      it: "<p>La Medina di Tunisi è uno dei centri storici medievali meglio conservati del mondo arabo. Fondata nel VII secolo dagli Arabi, raggiunse il suo apice sotto la dinastia hafside (XIII-XVI sec.), quando era considerata una delle città più importanti del mondo islamico.</p><p>I suoi vicoli labirintici ospitano oltre 700 monumenti: palazzi, moschee, madrasse, mausolei e fontane. La Grande Moschea della Zitouna, fondata nel 732, è il cuore spirituale e architettonico della Medina. Dichiarata Patrimonio Mondiale UNESCO nel 1979.</p>",
    },
    facts: {
      es: [["Fundada","s. VII d.C.",""],["Área","270 ha aproximadamente"],["Monumentos","700+"],["Reconocimiento","UNESCO Patrimonio Mundial (1979)"],["Símbolo central","Gran Mezquita de Zitouna (732 d.C.)"]],
      ar: [["التأسيس","القرن 7 م"],["المساحة","نحو 270 هكتاراً"],["المعالم","أكثر من 700"],["الاعتراف","يونسكو تراث عالمي (1979)"],["الرمز المركزي","جامع الزيتونة (732 م)"]],
      fr: [["Fondée","VIIe s. ap. J.-C."],["Superficie","environ 270 ha"],["Monuments","700+"],["Reconnaissance","UNESCO Patrimoine Mondial (1979)"],["Symbole central","Grande Mosquée de la Zitouna (732 ap. J.-C.)"]],
      en: [["Founded","7th c. AD"],["Area","approx. 270 ha"],["Monuments","700+"],["Recognition","UNESCO World Heritage (1979)"],["Central landmark","Great Mosque of Zitouna (732 AD)"]],
      it: [["Fondata","VII sec. d.C."],["Superficie","circa 270 ha"],["Monumenti","700+"],["Riconoscimento","UNESCO Patrimonio Mondiale (1979)"],["Simbolo centrale","Grande Moschea della Zitouna (732 d.C.)"]],
    },
    quote: { es: null, ar: null, fr: null, en: null, it: null },
  },

  sagrada: {
    img: "free-photo-of-sagrada-familia-in-barcelona-under-construction.webp",
    tag:   { es: "⛪ Arquitectura", ar: "⛪ معمار", fr: "⛪ Architecture", en: "⛪ Architecture", it: "⛪ Architettura" },
    title: { es: "La Sagrada Família", ar: "كنيسة الساغرادا فاميليا", fr: "La Sagrada Família", en: "La Sagrada Família", it: "La Sagrada Família" },
    caption: { es: "Las torres de la Sagrada Família en construcción, Barcelona", ar: "أبراج الساغرادا فاميليا قيد الإنشاء، برشلونة", fr: "Les tours de la Sagrada Família en construction, Barcelone", en: "The towers of the Sagrada Família under construction, Barcelona", it: "Le torri della Sagrada Família in costruzione, Barcellona" },
    meta: {
      es: ["📅 Inicio: 1882","📍 Barcelona, España","🌍 UNESCO desde 2005"],
      ar: ["📅 البداية: 1882","📍 برشلونة، إسبانيا","🌍 يونسكو منذ 2005"],
      fr: ["📅 Début: 1882","📍 Barcelone, Espagne","🌍 UNESCO depuis 2005"],
      en: ["📅 Started: 1882","📍 Barcelona, Spain","🌍 UNESCO since 2005"],
      it: ["📅 Inizio: 1882","📍 Barcellona, Spagna","🌍 UNESCO dal 2005"],
    },
    body: {
      es: "<p>La Sagrada Família es la obra maestra del arquitecto catalán Antoni Gaudí y el edificio más visitado de España. Su construcción comenzó en 1882 y continúa hasta hoy, financiada exclusivamente con donaciones y entradas de visitantes.</p><p>Gaudí trabajó en el proyecto durante 43 años —la mayor parte de su vida adulta— hasta su muerte en 1926. Basuló su diseño en formas naturales: columnas que imitan árboles, fachadas que parecen formaciones rocosas, y una simbología cristiana profundamente trabajada.</p><p>El templo tiene tres fachadas: la del Nacimiento (terminada en vida de Gaudí), la de la Pasión y la de la Gloria (aún en construcción). Las torres centrales alcanzarán 172 metros cuando estén terminadas. Fue declarada Patrimonio de la Humanidad en 2005.</p>",
      ar: "<p>الساغرادا فاميليا تحفة المعماري الكاتالوني أنتوني غاودي، وأكثر المباني زيارةً في إسبانيا. بدأ تشييدها عام 1882 ولا يزال مستمراً حتى اليوم، تموّله التبرعات وعائدات الزوار حصراً.</p><p>عمل غاودي على المشروع 43 عاماً —معظم حياته البالغة— حتى وفاته عام 1926. صمّمه مستلهماً الأشكال الطبيعية: أعمدة تحاكي الأشجار، وواجهات تُشبه التشكّلات الصخرية، ورمزية مسيحية راسخة.</p><p>للمعبد ثلاث واجهات: الميلاد (أُنجزت في حياة غاودي)، والآلام، والمجد (قيد الإنشاء). ستبلغ الأبراج المركزية 172 متراً عند اكتمالها، وصُنّف تراثاً إنسانياً عام 2005.</p>",
      fr: "<p>La Sagrada Família est le chef-d'œuvre de l'architecte catalan Antoni Gaudí et le bâtiment le plus visité d'Espagne. Sa construction a commencé en 1882 et se poursuit aujourd'hui, financée exclusivement par des dons et les entrées des visiteurs.</p><p>Gaudí a travaillé sur le projet pendant 43 ans jusqu'à sa mort en 1926. Il a basé sa conception sur des formes naturelles : colonnes imitant des arbres, façades ressemblant à des formations rocheuses et une symbolique chrétienne profondément élaborée.</p>",
      en: "<p>La Sagrada Família is the masterwork of Catalan architect Antoni Gaudí and Spain's most visited building. Construction began in 1882 and continues today, funded exclusively by donations and visitor tickets.</p><p>Gaudí worked on the project for 43 years — most of his adult life — until his death in 1926. He based his design on natural forms: columns that mimic trees, facades that resemble rock formations, and deeply worked Christian symbolism.</p><p>The temple has three facades: the Nativity (completed in Gaudí's lifetime), the Passion, and the Glory (still under construction). The central towers will reach 172 metres when finished. It was declared a UNESCO World Heritage Site in 2005.</p>",
      it: "<p>La Sagrada Família è il capolavoro dell'architetto catalano Antoni Gaudí e l'edificio più visitato della Spagna. La sua costruzione iniziò nel 1882 e continua ancora oggi, finanziata esclusivamente da donazioni e biglietti di ingresso.</p><p>Gaudí lavorò al progetto per 43 anni fino alla sua morte nel 1926. Basò il suo design su forme naturali: colonne che imitano alberi, facciate che ricordano formazioni rocciose e una simbologia cristiana profondamente elaborata. Dichiarata Patrimonio dell'Umanità nel 2005.</p>",
    },
    facts: {
      es: [["Arquitecto","Antoni Gaudí (y sucesores)"],["Inicio","1882"],["Finalización prevista","~2026 (centenario de Gaudí)"],["Altura final","172 m (torre de Jesucristo)"],["UNESCO","Patrimonio Mundial, 2005"]],
      ar: [["المعماري","أنتوني غاودي (ومن خلفوه)"],["البداية","1882"],["الاكتمال المتوقع","~2026 (مئوية غاودي)"],["الارتفاع النهائي","172م (برج المسيح)"],["يونسكو","تراث عالمي، 2005"]],
      fr: [["Architecte","Antoni Gaudí (et successeurs)"],["Début","1882"],["Achèvement prévu","~2026 (centenaire de Gaudí)"],["Hauteur finale","172 m (tour de Jésus-Christ)"],["UNESCO","Patrimoine Mondial, 2005"]],
      en: [["Architect","Antoni Gaudí (and successors)"],["Started","1882"],["Expected completion","~2026 (Gaudí centenary)"],["Final height","172 m (Tower of Jesus Christ)"],["UNESCO","World Heritage, 2005"]],
      it: [["Architetto","Antoni Gaudí (e successori)"],["Inizio","1882"],["Completamento previsto","~2026 (centenario di Gaudí)"],["Altezza finale","172 m (Torre di Gesù Cristo)"],["UNESCO","Patrimonio Mondiale, 2005"]],
    },
    quote: {
      es: { text: "Mi cliente no tiene prisa.", author: "— Antoni Gaudí, sobre la lentitud de la construcción" },
      ar: { text: "موكّلي ليس في عجلة من أمره.", author: "— أنتوني غاودي، عن بطء البناء" },
      fr: { text: "Mon client n'est pas pressé.", author: "— Antoni Gaudí, sur la lenteur de la construction" },
      en: { text: "My client is not in a hurry.", author: "— Antoni Gaudí, on the slow pace of construction" },
      it: { text: "Il mio cliente non ha fretta.", author: "— Antoni Gaudí, sulla lentezza della costruzione" },
    },
  },

  eldjem: {
    img: "amphitheatre-with-el-djem-city-skyline-in-tunisia.webp",
    tag:   { es: "🏛️ Patrimonio UNESCO", ar: "🏛️ تراث اليونسكو", fr: "🏛️ Patrimoine UNESCO", en: "🏛️ UNESCO Heritage", it: "🏛️ Patrimonio UNESCO" },
    title: { es: "Anfiteatro de El Djem", ar: "مدرج الجم", fr: "Amphithéâtre d'El Jem", en: "Amphitheatre of El Jem", it: "Anfiteatro di El Jem" },
    caption: { es: "El imponente anfiteatro romano de El Djem, uno de los mejores conservados del mundo", ar: "مدرج الجم الروماني الشامخ، من أفضل المدرجات المحفوظة في العالم", fr: "L'imposant amphithéâtre romain d'El Jem, l'un des mieux conservés au monde", en: "The imposing Roman amphitheatre of El Jem, one of the best-preserved in the world", it: "L'imponente anfiteatro romano di El Jem, tra i meglio conservati al mondo" },
    meta: {
      es: ["📅 Construido: s. III d.C.","📍 El Djem, Túnez","🌍 UNESCO desde 1979"],
      ar: ["📅 البناء: القرن 3 م","📍 الجم، تونس","🌍 يونسكو منذ 1979"],
      fr: ["📅 Construit: IIIe s. ap. J.-C.","📍 El Jem, Tunisie","🌍 UNESCO depuis 1979"],
      en: ["📅 Built: 3rd c. AD","📍 El Jem, Tunisia","🌍 UNESCO since 1979"],
      it: ["📅 Costruito: III sec. d.C.","📍 El Jem, Tunisia","🌍 UNESCO dal 1979"],
    },
    body: {
      es: "<p>El anfiteatro de El Djem es uno de los monumentos romanos más impresionantes fuera de Italia. Construido alrededor del año 238 d.C. en la ciudad romana de <em>Thysdrus</em>, podía albergar entre 35 000 y 45 000 espectadores para espectáculos de gladiadores y carreras de carros.</p><p>Con sus tres pisos de arcadas de piedra caliza, es el tercer anfiteatro romano más grande del mundo, superado únicamente por el Coliseo de Roma y el anfiteatro de Capua. Su estado de conservación es excepcional, gracias en parte a que fue usado como fortaleza en la Edad Media.</p><p>Hoy alberga el Festival Internacional de Música Sinfónica de El Djem, que aprovecha su extraordinaria acústica. Fue declarado Patrimonio Mundial de la UNESCO en 1979.</p>",
      ar: "<p>مدرج الجم من أعظم المعالم الرومانية خارج إيطاليا. شُيّد نحو عام 238م في المدينة الرومانية <em>ثيسدروس</em>، وكان يستوعب ما بين 35000 و45000 متفرج لمشاهدة عروض المصارعة وسباقات العربات.</p><p>بطوابقه الثلاثة من الأقواس الحجرية الجيرية، يُعدّ ثالث أكبر مدرج روماني في العالم، لا يتخطّاه سوى الكولوسيوم في روما ومدرج كابوا. وحالته الاستثنائية من الحفظ مردّها جزئياً إلى استخدامه قلعةً في العصر الوسيط.</p><p>يحتضن اليوم مهرجان الجم الدولي للموسيقى السيمفونية، مستثمراً خصائصه الصوتية النادرة. صُنّف تراثاً عالمياً عام 1979.</p>",
      fr: "<p>L'amphithéâtre d'El Jem est l'un des monuments romains les plus impressionnants en dehors de l'Italie. Construit vers 238 ap. J.-C. dans la ville romaine de <em>Thysdrus</em>, il pouvait accueillir entre 35 000 et 45 000 spectateurs pour des spectacles de gladiateurs et des courses de chars.</p><p>Avec ses trois étages d'arcades en pierre calcaire, c'est le troisième plus grand amphithéâtre romain du monde. Son état de conservation est exceptionnel et il accueille aujourd'hui le Festival International de Musique Symphonique d'El Jem. Classé au Patrimoine Mondial de l'UNESCO en 1979.</p>",
      en: "<p>The amphitheatre of El Jem is one of the most impressive Roman monuments outside Italy. Built around 238 AD in the Roman city of <em>Thysdrus</em>, it could hold between 35,000 and 45,000 spectators for gladiatorial shows and chariot races.</p><p>With its three floors of limestone arcades, it is the third-largest Roman amphitheatre in the world, surpassed only by the Colosseum in Rome and the amphitheatre of Capua. Its state of preservation is exceptional, partly thanks to its use as a fortress in the Middle Ages.</p><p>Today it hosts the El Jem International Festival of Symphonic Music, exploiting its extraordinary acoustics. It was declared a UNESCO World Heritage Site in 1979.</p>",
      it: "<p>L'anfiteatro di El Jem è uno dei monumenti romani più impressionanti al di fuori dell'Italia. Costruito intorno al 238 d.C. nella città romana di <em>Thysdrus</em>, poteva ospitare tra 35.000 e 45.000 spettatori per spettacoli di gladiatori e corse di carri.</p><p>Con i suoi tre piani di arcate in pietra calcarea, è il terzo anfiteatro romano più grande del mondo. Il suo stato di conservazione è eccezionale e oggi ospita il Festival Internazionale di Musica Sinfonica di El Jem. Dichiarato Patrimonio Mondiale UNESCO nel 1979.</p>",
    },
    facts: {
      es: [["Ciudad romana","Thysdrus"],["Capacidad","35 000 – 45 000 espectadores"],["Dimensiones","148 × 122 m (exterior)"],["Ranking mundial","3.° anfiteatro romano más grande"],["UNESCO","Patrimonio Mundial, 1979"]],
      ar: [["المدينة الرومانية","ثيسدروس"],["الطاقة الاستيعابية","35 000 – 45 000 متفرج"],["الأبعاد","148 × 122 م (الواجهة الخارجية)"],["التصنيف العالمي","ثالث أكبر مدرج روماني"],["يونسكو","تراث عالمي، 1979"]],
      fr: [["Ville romaine","Thysdrus"],["Capacité","35 000 – 45 000 spectateurs"],["Dimensions","148 × 122 m (extérieur)"],["Classement mondial","3e plus grand amphithéâtre romain"],["UNESCO","Patrimoine Mondial, 1979"]],
      en: [["Roman city","Thysdrus"],["Capacity","35,000 – 45,000 spectators"],["Dimensions","148 × 122 m (exterior)"],["World ranking","3rd largest Roman amphitheatre"],["UNESCO","World Heritage, 1979"]],
      it: [["Città romana","Thysdrus"],["Capacità","35.000 – 45.000 spettatori"],["Dimensioni","148 × 122 m (esterno)"],["Classifica mondiale","3° anfiteatro romano più grande"],["UNESCO","Patrimonio Mondiale, 1979"]],
    },
    quote: { es: null, ar: null, fr: null, en: null, it: null },
  },

  farida: {
    img: "download.jpg",
    tag:   { es: "👩‍🏫 Educación", ar: "👩‍🏫 تعليم", fr: "👩‍🏫 Éducation", en: "👩‍🏫 Education", it: "👩‍🏫 Istruzione" },
    title: { es: "Farida Queré", ar: "فريدة كيريه", fr: "Farida Queré", en: "Farida Queré", it: "Farida Queré" },
    caption: { es: "Profesora de español, corazón del proyecto", ar: "أستاذة اللغة الإسبانية، قلب المشروع", fr: "Professeure d'espagnol, cœur du projet", en: "Spanish teacher, heart of the project", it: "Professoressa di spagnolo, cuore del progetto" },
    meta: {
      es: ["📚 Profesora de Español","📍 Túnez","🌟 Fundadora del proyecto"],
      ar: ["📚 أستاذة اللغة الإسبانية","📍 تونس","🌟 مؤسِّسة المشروع"],
      fr: ["📚 Professeure d'Espagnol","📍 Tunisie","🌟 Fondatrice du projet"],
      en: ["📚 Spanish Teacher","📍 Tunisia","🌟 Project Founder"],
      it: ["📚 Professoressa di Spagnolo","📍 Tunisia","🌟 Fondatrice del progetto"],
    },
    body: {
      es: "<p>Farida Queré es la fundadora y alma del proyecto <strong>EspañolTúnez</strong>. Profesora de lengua española con años de experiencia, ha dedicado su carrera a tender puentes culturales entre Túnez y el mundo hispanohablante.</p><p>Su pasión por la lengua y la cultura española la llevó a crear este espacio de encuentro, donde estudiantes tunecinos pueden aprender español de manera accesible, dinámica y culturalmente enriquecedora.</p><p>Su método pedagógico combina el rigor lingüístico con la creatividad cultural, integrando música, literatura, arte y gastronomía española en sus clases. Gracias a su trabajo, cientos de estudiantes han descubierto la riqueza del idioma español.</p>",
      ar: "<p>فريدة كيريه مؤسِّسة وروح مشروع <strong>إسبانيول تونس</strong>. أستاذة ذات خبرة طويلة في تدريس اللغة الإسبانية، كرّست مسيرتها لتجسير الهوّة الثقافية بين تونس والعالم الناطق بالإسبانية.</p><p>دفعها شغفها باللغة والثقافة الإسبانية إلى إنشاء هذا الفضاء حيث يتعلّم الطلاب التونسيون الإسبانية بأسلوب سهل وديناميكي وثري ثقافياً.</p><p>منهجها التعليمي يمزج الدقة اللغوية بالإبداع الثقافي، إذ تُدمج في دروسها الموسيقى والأدب والفن والمطبخ الإسباني. بفضل جهودها، اكتشف مئات الطلاب ثراء اللغة الإسبانية.</p>",
      fr: "<p>Farida Queré est la fondatrice et l'âme du projet <strong>EspagnolTunisie</strong>. Professeure de langue espagnole avec de nombreuses années d'expérience, elle a consacré sa carrière à tisser des ponts culturels entre la Tunisie et le monde hispanophone.</p><p>Sa passion pour la langue et la culture espagnoles l'a amenée à créer cet espace de rencontre, où les étudiants tunisiens peuvent apprendre l'espagnol de manière accessible, dynamique et culturellement enrichissante.</p>",
      en: "<p>Farida Queré is the founder and soul of the <strong>EspañolTúnez</strong> project. A Spanish language teacher with years of experience, she has dedicated her career to building cultural bridges between Tunisia and the Spanish-speaking world.</p><p>Her passion for the Spanish language and culture led her to create this meeting space, where Tunisian students can learn Spanish in an accessible, dynamic and culturally enriching way.</p><p>Her teaching method combines linguistic rigor with cultural creativity, integrating Spanish music, literature, art and gastronomy into her classes. Thanks to her work, hundreds of students have discovered the richness of the Spanish language.</p>",
      it: "<p>Farida Queré è la fondatrice e l'anima del progetto <strong>EspañolTúnez</strong>. Professoressa di lingua spagnola con anni di esperienza, ha dedicato la sua carriera a costruire ponti culturali tra la Tunisia e il mondo ispanofono.</p><p>La sua passione per la lingua e la cultura spagnola l'ha portata a creare questo spazio di incontro, dove gli studenti tunisini possono imparare lo spagnolo in modo accessibile, dinamico e culturalmente arricchente.</p>",
    },
    facts: {
      es: [["Rol","Fundadora y profesora principal"],["Especialidad","Lengua y cultura española"],["Proyecto","EspañolTúnez (desde 2020)"],["Sede","Túnez, Túnez"]],
      ar: [["الدور","مؤسِّسة وأستاذة رئيسية"],["التخصص","اللغة والثقافة الإسبانية"],["المشروع","إسبانيول تونس (منذ 2020)"],["المقر","تونس، تونس"]],
      fr: [["Rôle","Fondatrice et professeure principale"],["Spécialité","Langue et culture espagnoles"],["Projet","EspagnolTunisie (depuis 2020)"],["Siège","Tunis, Tunisie"]],
      en: [["Role","Founder and lead teacher"],["Specialty","Spanish language & culture"],["Project","EspañolTúnez (since 2020)"],["Base","Tunis, Tunisia"]],
      it: [["Ruolo","Fondatrice e insegnante principale"],["Specialità","Lingua e cultura spagnola"],["Progetto","EspañolTúnez (dal 2020)"],["Sede","Tunisi, Tunisia"]],
    },
    quote: {
      es: { text: "Aprender un idioma es abrir una ventana al alma de otro pueblo.", author: "— Filosofía de EspañolTúnez" },
      ar: { text: "تعلّم لغة ما هو فتح نافذة على روح شعب آخر.", author: "— فلسفة إسبانيول تونس" },
      fr: { text: "Apprendre une langue, c'est ouvrir une fenêtre sur l'âme d'un autre peuple.", author: "— Philosophie d'EspagnolTunisie" },
      en: { text: "Learning a language is opening a window onto the soul of another people.", author: "— EspañolTúnez philosophy" },
      it: { text: "Imparare una lingua è aprire una finestra sull'anima di un altro popolo.", author: "— Filosofia di EspañolTúnez" },
    },
  },
};

/* ── Modal open/close helpers ── */
function openGalleryModal(modalKey) {
  const data = galleryModalData[modalKey];
  if (!data) return;
  const lang = currentLang || 'es';
  const l = (obj) => (obj && obj[lang]) ? obj[lang] : (obj && obj['es']) ? obj['es'] : '';

  // Populate
  const img = document.getElementById('galModalImg');
  img.src = data.img;
  img.alt = l(data.title);

  document.getElementById('galModalCaption').textContent = l(data.caption);
  document.getElementById('galModalTag').textContent = l(data.tag);
  document.getElementById('galModalTitle').innerHTML = l(data.title);

  // Meta badges
  const metaEl = document.getElementById('galModalMeta');
  const metaItems = l(data.meta);
  metaEl.innerHTML = Array.isArray(metaItems)
    ? metaItems.map(m => `<span>${m}</span>`).join('')
    : '';

  // Body
  document.getElementById('galModalBody').innerHTML = l(data.body);

  // Facts
  const factsEl = document.getElementById('galModalFacts');
  const facts = l(data.facts);
  factsEl.innerHTML = Array.isArray(facts)
    ? facts.map(([label, val]) =>
        `<div class="fact-row"><span class="fact-label">${label}</span><span class="fact-val">${val}</span></div>`
      ).join('')
    : '';

  // Quote
  const quoteEl = document.getElementById('galModalQuote');
  const q = l(data.quote);
  if (q && q.text) {
    quoteEl.innerHTML = `<p>${q.text}</p><cite>${q.author}</cite>`;
  } else {
    quoteEl.innerHTML = '';
  }

  // Open
  const backdrop = document.getElementById('galModalBackdrop');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  document.getElementById('galModalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Event listeners for modal ── */
document.addEventListener('DOMContentLoaded', () => {
  // Delegate click on gallery items
  document.getElementById('galleryGrid')?.addEventListener('click', (e) => {
    const item = e.target.closest('[data-modal]');
    if (item) openGalleryModal(item.dataset.modal);
  });

  // Close button
  document.getElementById('galModalClose')?.addEventListener('click', closeGalleryModal);

  // Click on backdrop (outside modal)
  document.getElementById('galModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeGalleryModal();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGalleryModal();
  });
});