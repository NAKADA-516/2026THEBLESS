/* ============================================================
   THE BLESS AWAJI — Main JavaScript
   ============================================================ */

/* ── i18n Translations ── */
const i18n = {
  jp: {
    nav_home: 'Home',
    nav_dining: 'Dining',
    nav_stay: 'Stay',
    nav_spa: 'Spa',
    nav_gallery: 'Gallery',
    nav_reserve: 'Reservation',
    hero_catch: 'A Meal That Moves Your Soul',
    hero_catch_jp: '魂が震える食事',
    hero_sub: '淡路島の恵みを、五感で味わう',
    hero_btn: 'Reserve a Table',
    home_dining_label: 'Dining',
    home_dining_title: 'Farm to Table',
    home_dining_sub: 'ファームトゥテーブル',
    home_dining_body: '淡路島の大地と海が育んだ食材を、JOSPER®薪火グリルで丁寧に仕上げる。世界が認めた炎の料理哲学。',
    home_dining_btn: 'Explore Dining',
    home_stay_label: 'Stay',
    home_stay_title: 'Rest in Silence',
    home_stay_sub: '静寂に包まれた滞在',
    home_stay_body: '全8室、それぞれ異なる表情を持つ客室。海を望む朝は、言葉を失うほど美しい。',
    home_stay_btn: 'View Rooms',
    home_spa_label: 'Spa & Sauna',
    home_spa_title: 'Magma Sauna',
    home_spa_sub: 'マグマサウナ',
    home_spa_body: '富士山溶岩石が放つ遠赤外線。65℃・湿度55%の環境が、細胞の奥まで温め、癒す。',
    home_spa_btn: 'Explore Spa',
    story_title: '"The island breathes."',
    story_body1: '淡路島は、太古から変わらぬ潮の香りと大地の鼓動を持つ。',
    story_body2: 'THE BLESS AWAJIは、その息吹の中に静かに佇む、魂のための宿。',
    story_body3: '食べる、眠る、整う。ただそれだけの時間が、あなたを新しく生まれ変わらせる。',
    dining_hero_title: 'Dining',
    dining_hero_sub: 'ファームトゥテーブル — 淡路島の恵み',
    dining_intro_label: 'Our Philosophy',
    dining_intro_title: 'Fire & Land',
    dining_intro_sub: '炎と大地',
    dining_intro_body: 'JOSPER®グリル——世界で唯一、密閉型薪炭オーブンとグリルを一体化したマシン。日本初導入のこの炎が、淡路島の食材に息を吹き込む。世界一のBBQシェフが監修した9品のフルコースは、食事という体験を超えた、魂の儀式。',
    menu_title: "Tonight's Menu",
    menu_sub: '本日のコース',
    menu_time: '19:00〜（要予約）',
    menu_price: '18,700円（税込・サービス料別）',
    menu_courses: [
      { en: 'Amuse Bouche', jp: 'アミューズ', desc: '淡路島野菜のひと口' },
      { en: 'Cold Appetizer', jp: '冷前菜', desc: '旬魚のカルパッチョ' },
      { en: 'Hot Appetizer', jp: '温前菜', desc: '島野菜のロースト' },
      { en: 'Soup', jp: 'スープ', desc: '浜辺の魚介ビスク' },
      { en: 'Fish', jp: '魚料理', desc: 'JOSPER薪火焼き' },
      { en: 'Sorbet', jp: 'ソルベ', desc: '淡路産レモン' },
      { en: 'Meat', jp: '肉料理', desc: '但馬牛×炭火' },
      { en: 'Cheese', jp: 'チーズ', desc: 'セレクションと島蜂蜜' },
      { en: 'Dessert', jp: 'デザート', desc: '玉ねぎのコンフィ' },
    ],
    wine_title: 'Wine Cellar',
    wine_sub: '600本以上のセレクション',
    wine_body: 'ロマネ・コンティ、ジャック・セロス、サロン——世界の至宝が、あなたの夜を彩る。',
    josper_label: 'The Grill',
    josper_title: 'JOSPER® Grill',
    josper_sub: '日本初導入 — 世界一のBBQシェフ監修',
    josper_body: '炭と薪の二重の炎が、食材の旨味を閉じ込める。密閉オーブン内の独自対流が、外はカリッと、内はジューシーな食感を生み出す。この哲学こそ、THE BLESSのダイニングの核心。',
    stay_hero_title: 'Stay',
    stay_hero_sub: '全8室 — 海と自然に抱かれた滞在',
    rooms_intro_label: 'Accommodation',
    rooms_intro_title: 'Eight Rooms',
    rooms_intro_sub: '8つの物語',
    rooms_intro_body: '全室が異なるデザインと景観を持つ。海の声、潮の香り、朝の光——すべてが部屋の中に招き入れられる。',
    room_ocean_suite: 'Ocean Suite',
    room_junior_suite: 'Junior Suite',
    room_garden: 'Garden View Room',
    room_grand_garden: 'Grand Garden View',
    room_ocean_view: 'Ocean View Room',
    amenity_label: 'Amenities',
    amenity_title: 'Included',
    amenity_sub: '宿泊者特典',
    spa_hero_title: 'Spa',
    spa_hero_sub: 'マグマサウナ — 深部から整う',
    spa_intro_label: 'Sauna Experience',
    spa_intro_title: 'Magma Earth',
    spa_intro_sub: '大地のエネルギー',
    spa_intro_body: '富士山の溶岩石が床・壁全面を覆い、65℃・湿度60%・育成光線の三要素が深い和らぎを生み出す。遠赤外線放射率93%以上と独自開発の3Dヒーティングシステムが、体の深部から自然な発汗を促し、整える。',
    gallery_hero_title: 'Gallery',
    gallery_hero_sub: '写真で見る THE BLESS AWAJI',
    gallery_all: 'All',
    gallery_dining: 'Dining',
    gallery_spa: 'Spa',
    gallery_rooms: 'Rooms',
    gallery_exterior: 'Exterior',
    reserve_hero_title: 'Reservation',
    reserve_hero_sub: 'ご予約・お問い合わせ',
    form_name: 'Name / お名前',
    form_email: 'Email / メールアドレス',
    form_tel: 'Phone / 電話番号',
    form_date: 'Preferred Date / ご希望日',
    form_guests: 'Number of Guests / 人数',
    form_type: 'Type / ご利用区分',
    form_type_stay: '宿泊',
    form_type_dining: 'ダイニング',
    form_type_both: '宿泊+ダイニング',
    form_type_other: 'その他',
    form_message: 'Message / ご要望',
    form_submit: 'Send Inquiry',
    checkin: 'チェックイン 15:00（最終18:00）',
    checkout: 'チェックアウト 11:00',
    address: '兵庫県洲本市炬口247',
    tel: '0799-22-7775',
    email: 'awajiauberge@gmail.com',
    access1_from: '洲本IC',
    access1_time: '10 min',
    access2_from: '新神戸',
    access2_time: '60 min',
    access3_from: '大阪梅田',
    access3_time: '90 min',
    access4_from: '京都',
    access4_time: '120 min',
    footer_reserve: 'Reserve',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© Copyright 2025 THE BLESS AWAJI All Right Reserved',
    cta_title: 'Begin Your Journey',
    cta_sub: '特別な体験をご予約ください',
    cta_btn: 'Reserve Now',
    scroll_down: 'Scroll',
  },
  en: {
    nav_home: 'Home',
    nav_dining: 'Dining',
    nav_stay: 'Stay',
    nav_spa: 'Spa',
    nav_gallery: 'Gallery',
    nav_reserve: 'Reservation',
    hero_catch: 'A Meal That Moves Your Soul',
    hero_catch_jp: 'Farm to Table — Awaji Island',
    hero_sub: 'Taste the blessings of Awaji Island through all five senses',
    hero_btn: 'Reserve a Table',
    home_dining_label: 'Dining',
    home_dining_title: 'Farm to Table',
    home_dining_sub: 'Fire & Craft',
    home_dining_body: 'Ingredients nurtured by the land and sea of Awaji Island, carefully finished on the JOSPER® wood-fire grill. A philosophy of flame recognized by the world.',
    home_dining_btn: 'Explore Dining',
    home_stay_label: 'Stay',
    home_stay_title: 'Rest in Silence',
    home_stay_sub: 'Eight Unique Rooms',
    home_stay_body: 'Eight rooms, each with its own character. The morning view of the ocean leaves you speechless.',
    home_stay_btn: 'View Rooms',
    home_spa_label: 'Spa & Sauna',
    home_spa_title: 'Magma Sauna',
    home_spa_sub: 'Lava Stone Therapy',
    home_spa_body: 'Far-infrared rays from Mt. Fuji lava stones. At 65°C and 55% humidity, the heat reaches deep into every cell.',
    home_spa_btn: 'Explore Spa',
    story_title: '"The island breathes."',
    story_body1: 'Awaji Island carries the scent of ancient tides and the pulse of the earth.',
    story_body2: 'THE BLESS AWAJI stands quietly within that breath — a sanctuary for the soul.',
    story_body3: 'Eat, sleep, restore. These simple acts become a profound transformation.',
    dining_hero_title: 'Dining',
    dining_hero_sub: 'Farm to Table — The Blessings of Awaji',
    dining_intro_label: 'Our Philosophy',
    dining_intro_title: 'Fire & Land',
    dining_intro_sub: 'Flame & Earth',
    dining_intro_body: 'The JOSPER® Grill — the world\'s only sealed wood-charcoal oven and grill in one. Japan\'s first installation. A 9-course dinner supervised by the world\'s greatest BBQ chef transcends the act of eating into a ritual of the soul.',
    menu_title: "Tonight's Menu",
    menu_sub: 'Full Course Dinner',
    menu_time: 'From 19:00 (Reservation required)',
    menu_price: '¥18,700 (Tax included, service charge extra)',
    menu_courses: [
      { en: 'Amuse Bouche', jp: '', desc: 'Awaji vegetable bite' },
      { en: 'Cold Appetizer', jp: '', desc: 'Seasonal fish carpaccio' },
      { en: 'Hot Appetizer', jp: '', desc: 'Roasted island vegetables' },
      { en: 'Soup', jp: '', desc: 'Seafood bisque' },
      { en: 'Fish', jp: '', desc: 'JOSPER wood-fired' },
      { en: 'Sorbet', jp: '', desc: 'Awaji lemon' },
      { en: 'Meat', jp: '', desc: 'Tajima beef × charcoal' },
      { en: 'Cheese', jp: '', desc: 'Selection & island honey' },
      { en: 'Dessert', jp: '', desc: 'Onion confit' },
    ],
    wine_title: 'Wine Cellar',
    wine_sub: 'Over 600 selections',
    wine_body: 'Romanee-Conti, Jacques Selosse, Salon — the world\'s treasures grace your evening.',
    josper_label: 'The Grill',
    josper_title: 'JOSPER® Grill',
    josper_sub: 'Japan\'s First — Supervised by the World\'s Greatest BBQ Chef',
    josper_body: 'Dual flames of charcoal and wood lock in the umami of every ingredient. The unique convection inside the sealed oven creates a perfectly crisp exterior and succulent interior. This philosophy is the heart of THE BLESS dining.',
    stay_hero_title: 'Stay',
    stay_hero_sub: 'Eight Rooms — Embraced by Sea and Nature',
    rooms_intro_label: 'Accommodation',
    rooms_intro_title: 'Eight Rooms',
    rooms_intro_sub: 'Eight Stories',
    rooms_intro_body: 'Each room has its own design and view. The voice of the sea, the scent of the breeze, the light of morning — all welcomed inside.',
    room_ocean_suite: 'Ocean Suite',
    room_junior_suite: 'Junior Suite',
    room_garden: 'Garden View Room',
    room_grand_garden: 'Grand Garden View',
    room_ocean_view: 'Ocean View Room',
    amenity_label: 'Amenities',
    amenity_title: 'Included',
    amenity_sub: 'Guest Benefits',
    spa_hero_title: 'Spa',
    spa_hero_sub: 'Magma Sauna — Restore from Within',
    spa_intro_label: 'Sauna Experience',
    spa_intro_title: 'Magma Earth',
    spa_intro_sub: 'Energy of the Earth',
    spa_intro_body: 'Mt. Fuji lava stones cover every surface, creating a sanctuary at 65°C, 60% humidity, and育成光線 (Ikusei-kosen). With a far-infrared emissivity of 93%+ and a proprietary 3D Heating System, the body is warmed from its deepest core, promoting natural perspiration and profound restoration.',
    gallery_hero_title: 'Gallery',
    gallery_hero_sub: 'Discover THE BLESS AWAJI',
    gallery_all: 'All',
    gallery_dining: 'Dining',
    gallery_spa: 'Spa',
    gallery_rooms: 'Rooms',
    gallery_exterior: 'Exterior',
    reserve_hero_title: 'Reservation',
    reserve_hero_sub: 'Reserve & Inquire',
    form_name: 'Name / お名前',
    form_email: 'Email / メールアドレス',
    form_tel: 'Phone / 電話番号',
    form_date: 'Preferred Date / ご希望日',
    form_guests: 'Number of Guests / 人数',
    form_type: 'Type / ご利用区分',
    form_type_stay: 'Stay',
    form_type_dining: 'Dining',
    form_type_both: 'Stay + Dining',
    form_type_other: 'Other',
    form_message: 'Message / ご要望',
    form_submit: 'Send Inquiry',
    checkin: 'Check-in 15:00 (Last 18:00)',
    checkout: 'Check-out 11:00',
    address: '247 Taikuchi, Sumoto, Hyogo',
    tel: '0799-22-7775',
    email: 'awajiauberge@gmail.com',
    access1_from: 'Sumoto IC',
    access1_time: '10 min',
    access2_from: 'Shin-Kobe',
    access2_time: '60 min',
    access3_from: 'Osaka Umeda',
    access3_time: '90 min',
    access4_from: 'Kyoto',
    access4_time: '120 min',
    footer_reserve: 'Reserve',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© Copyright 2025 THE BLESS AWAJI All Right Reserved',
    cta_title: 'Begin Your Journey',
    cta_sub: 'Reserve your extraordinary experience',
    cta_btn: 'Reserve Now',
    scroll_down: 'Scroll',
  },
};

let currentLang = localStorage.getItem('bless_lang') || 'jp';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('bless_lang', lang);
  applyTranslations();
  updateLangToggle();
}

function t(key) {
  return i18n[currentLang][key] || i18n['jp'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key] !== undefined) {
      el.textContent = i18n[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[currentLang][key] !== undefined) {
      el.placeholder = i18n[currentLang][key];
    }
  });
}

function updateLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    const jpEl = toggle.querySelector('[data-lang="jp"]');
    const enEl = toggle.querySelector('[data-lang="en"]');
    if (jpEl && enEl) {
      jpEl.classList.toggle('active', currentLang === 'jp');
      jpEl.classList.toggle('inactive', currentLang !== 'jp');
      enEl.classList.toggle('active', currentLang === 'en');
      enEl.classList.toggle('inactive', currentLang !== 'en');
    }
  });
}

/* ── Header Scroll Behavior ── */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function updateHeader() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

/* ── Hamburger / Nav Overlay ── */
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.getElementById('nav-overlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('open');
    overlay.classList.toggle('open', !isOpen);
    hamburger.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Dot Navigation ── */
function initDotNav() {
  const dotNav = document.getElementById('dot-nav');
  if (!dotNav) return;

  const sections = document.querySelectorAll('[data-section]');
  const dots = dotNav.querySelectorAll('.dot-nav-item');

  function updateDots() {
    const scrollY = window.scrollY + window.innerHeight / 2;
    let activeIdx = 0;

    sections.forEach((section, idx) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        activeIdx = idx;
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIdx);
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      if (sections[idx]) {
        sections[idx].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', updateDots, { passive: true });
  updateDots();
}

/* ── Scroll Reveal Animation ── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ── Language Toggle Click ── */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      setLang(currentLang === 'jp' ? 'en' : 'jp');
    });
  });
}

/* ── Gallery Filter & Lightbox ── */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          if (cat === 'all' || item.getAttribute('data-cat') === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Sent ✓';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ── Parallax (subtle) ── */
function initParallax() {
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (!parallaxEls.length) return;

  function updateParallax() {
    const scrollY = window.scrollY;
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
      const rect = el.closest('section, .hero, .page-hero')?.getBoundingClientRect();
      if (rect) {
        el.style.transform = `translateY(${scrollY * speed * 0.3}px)`;
      }
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
}

/* ── Floating CTA (Mobile) ── */
function initFloatingCTA() {
  if (window.innerWidth > 768) return;

  const RESERVE_URL = 'https://reserve.489ban.net/client/the-bless/0/plan/availability/daily';
  const TEL = '0799-22-7775';

  const path = window.location.pathname;
  const isPrivate = path.includes('private');

  if (isPrivate) return;

  const cta = document.createElement('div');
  cta.className = 'float-cta';
  cta.setAttribute('role', 'navigation');
  cta.setAttribute('aria-label', '宿泊予約');

  cta.innerHTML = `
    <div class="float-cta-inner">
      <a class="float-cta-primary en" href="${RESERVE_URL}" target="_blank" rel="noopener">
        宿泊予約はこちら
      </a>
      <a class="float-cta-tel" href="tel:${TEL}" aria-label="電話で問い合わせ">
        <span class="float-cta-tel-icon">📞</span>
        <span class="float-cta-tel-label">TEL</span>
      </a>
    </div>
  `;

  document.body.appendChild(cta);

  const hero = document.querySelector('.hero, .page-hero');
  const footer = document.getElementById('site-footer');
  const navOverlay = document.getElementById('nav-overlay');

  function updateCTAVisibility() {
    const scrollY = window.scrollY;
    const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 200;
    const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
    const winBottom = scrollY + window.innerHeight;
    const isNavOpen = navOverlay && navOverlay.classList.contains('open');

    if (isNavOpen) {
      cta.classList.remove('visible');
      return;
    }

    if (scrollY > heroBottom - 100 && winBottom < footerTop + 80) {
      cta.classList.add('visible');
      cta.classList.remove('hidden-behind-footer');
    } else if (winBottom >= footerTop + 80) {
      cta.classList.add('hidden-behind-footer');
      cta.classList.remove('visible');
    } else {
      cta.classList.remove('visible');
      cta.classList.remove('hidden-behind-footer');
    }
  }

  window.addEventListener('scroll', updateCTAVisibility, { passive: true });
  window.addEventListener('resize', updateCTAVisibility, { passive: true });
  updateCTAVisibility();

  if (navOverlay) {
    const observer = new MutationObserver(updateCTAVisibility);
    observer.observe(navOverlay, { attributes: true, attributeFilter: ['class'] });
  }
}

/* ── Hero Slideshow Indicators ── */
function initHeroSlideshow() {
  const indicators = document.querySelectorAll('.hero-indicator');
  if (!indicators.length) return;

  const SLIDE_DURATION = 7000; // must match CSS animation (28s / 4 slides)
  let current = 0;

  function activate(index) {
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
      // Re-trigger CSS progress bar animation
      if (i === index) {
        ind.style.animation = 'none';
        void ind.offsetWidth; // reflow
        ind.style.animation = '';
      }
    });
    current = index;
  }

  // Click to jump
  indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
      activate(i);
      clearInterval(timer);
      timer = setInterval(next, SLIDE_DURATION);
    });
  });

  function next() {
    activate((current + 1) % indicators.length);
  }

  let timer = setInterval(next, SLIDE_DURATION);
  // Kick off initial progress bar
  activate(0);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initNav();
  initDotNav();
  initReveal();
  initLangToggle();
  initGallery();
  initContactForm();
  initParallax();
  initFloatingCTA();
  initHeroSlideshow();
  applyTranslations();
  updateLangToggle();
});
