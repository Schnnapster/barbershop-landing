/* =========================================================
   IRON BLADE — інтерактив
   1) Перемикач мови UA / EN (i18n)
   2) Бургер-меню
   3) Відправка форми (заглушка)
   4) Поява карток при скролі
   ========================================================= */

/* ---------- Словник перекладів ----------
   Ключі збігаються зі значеннями data-i18n у розмітці.
   uk — українська (за замовчуванням), en — англійська.       */
const TRANSLATIONS = {
  uk: {
    'nav.about': 'Про нас',
    'nav.services': 'Послуги',
    'nav.masters': 'Майстри',
    'nav.reviews': 'Відгуки',
    'nav.book': 'Записатися',

    'hero.pre': 'З 2012 року · Без компромісів',
    'hero.title': 'СТРИЖКА,<br>ЯКА ГОВОРИТЬ<br>ЗА ТЕБЕ',
    'hero.subtitle': 'Чоловічий барбершоп для тих, хто цінує характер, точність і хорошу розмову в кріслі майстра.',
    'hero.cta': 'Записатися',

    'about.label': 'Про барбершоп',
    'about.title': 'МІСЦЕ З ХАРАКТЕРОМ',
    'about.photo': "ФОТО ІНТЕР'ЄРУ",
    'about.text1': 'IRON BLADE — це цегла, шкіра, сталь і запах хорошого тоніка. Ми не женемось за модою заради моди: ми робимо стрижку, яка пасує саме тобі.',
    'about.text2': 'Наші майстри — це ремісники з багаторічним досвідом. Заходь за стрижкою, а отримуєш ще міцну каву, чесну пораду та півгодини тиші від міської метушні.',
    'about.stat1': 'років на ринку',
    'about.stat2': 'задоволених клієнтів',
    'about.stat3': 'рейтинг на картах',

    'services.label': 'Що ми робимо',
    'services.title': 'ПОСЛУГИ ТА ЦІНИ',
    'service1.name': 'Чоловіча стрижка',
    'service1.desc': 'Класика або фейд — стрижка машинкою та ножицями під форму голови й стиль.',
    'service2.name': 'Оформлення бороди',
    'service2.desc': 'Моделювання, окантовка небезпечною бритвою та догляд гарячим рушником.',
    'service3.name': 'Стрижка + борода',
    'service3.desc': 'Повний комплекс: голова та борода в єдиному образі. Вигідніше, ніж окремо.',
    'service4.name': 'Дитяча стрижка',
    'service4.desc': 'Акуратно та без стресу для юного джентльмена до 12 років.',

    'masters.label': 'Команда',
    'masters.title': 'НАШІ МАЙСТРИ',
    'master.photo': 'ФОТО',
    'master1.role': 'Топ-барбер · фейди та класика',
    'master2.role': 'Барбер · борода та небезпечна бритва',
    'master3.role': 'Барбер · дитячі та молодіжні стрижки',

    'reviews.label': 'Відгуки',
    'reviews.title': 'ЩО КАЖУТЬ КЛІЄНТИ',
    'review1.text': '«Ходжу сюди третій рік. Жодного разу не вийшов незадоволеним — майстри реально слухають, що ти хочеш.»',
    'review2.text': '«Атмосфера — топ. Кава, музика, розмова. Борода тепер завжди в порядку.»',
    'review3.text': '«Водив сина на дитячу стрижку — зробили швидко й без сліз. Рекомендую.»',

    'booking.label': 'Запис',
    'booking.title': 'ЗАПИШИСЬ У КРІСЛО',
    'booking.lead': 'Залиш заявку — передзвонимо й підтвердимо зручний час.',
    'form.name': "Ім'я",
    'form.namePh': 'Як вас звати?',
    'form.phone': 'Телефон',
    'form.service': 'Послуга',
    'form.servicePh': 'Оберіть послугу',
    'form.time': 'Зручний час',
    'form.timePh': 'Коли вам зручно?',
    'form.morning': 'Ранок (10:00–12:00)',
    'form.day': 'День (12:00–17:00)',
    'form.evening': 'Вечір (17:00–21:00)',
    'form.submit': 'Надіслати заявку',
    'form.success': "Дякуємо! Ми зв'яжемося з вами для підтвердження запису.",

    'footer.tagline': 'Чоловічий барбершоп з характером.',
    'footer.contacts': 'Контакти',
    'footer.address': 'м. Київ, вул. Сталева, 7',
    'footer.hours': 'Щодня 10:00 – 21:00',
    'footer.socials': 'Соцмережі',
    'footer.rights': '© 2026 IRON BLADE. Усі права захищені.'
  },

  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.masters': 'Barbers',
    'nav.reviews': 'Reviews',
    'nav.book': 'Book now',

    'hero.pre': 'Since 2012 · No compromises',
    'hero.title': 'A HAIRCUT<br>THAT SPEAKS<br>FOR YOU',
    'hero.subtitle': 'A men’s barbershop for those who value character, precision and a good talk in the barber’s chair.',
    'hero.cta': 'Book now',

    'about.label': 'About the shop',
    'about.title': 'A PLACE WITH CHARACTER',
    'about.photo': 'INTERIOR PHOTO',
    'about.text1': 'IRON BLADE is brick, leather, steel and the scent of good tonic. We don’t chase trends for the sake of trends — we make the cut that suits exactly you.',
    'about.text2': 'Our barbers are craftsmen with years of experience. Come for a haircut and get strong coffee, honest advice and half an hour of quiet from the city rush.',
    'about.stat1': 'years in business',
    'about.stat2': 'happy clients',
    'about.stat3': 'rating on maps',

    'services.label': 'What we do',
    'services.title': 'SERVICES & PRICES',
    'service1.name': 'Men’s haircut',
    'service1.desc': 'Classic or fade — clipper and scissor cut shaped to your head and style.',
    'service2.name': 'Beard grooming',
    'service2.desc': 'Shaping, straight-razor lining and a hot-towel treatment.',
    'service3.name': 'Haircut + beard',
    'service3.desc': 'Full combo: head and beard in one look. Cheaper than separately.',
    'service4.name': 'Kids’ haircut',
    'service4.desc': 'Neat and stress-free for a young gentleman up to 12 years old.',

    'masters.label': 'The team',
    'masters.title': 'OUR BARBERS',
    'master.photo': 'PHOTO',
    'master1.role': 'Top barber · fades & classics',
    'master2.role': 'Barber · beard & straight razor',
    'master3.role': 'Barber · kids & youth cuts',

    'reviews.label': 'Reviews',
    'reviews.title': 'WHAT CLIENTS SAY',
    'review1.text': '“I’ve been coming here for three years. Never left unhappy — the barbers really listen to what you want.”',
    'review2.text': '“The vibe is top. Coffee, music, conversation. My beard is always on point now.”',
    'review3.text': '“Took my son for a kids’ cut — done fast and without tears. Highly recommend.”',

    'booking.label': 'Booking',
    'booking.title': 'TAKE THE CHAIR',
    'booking.lead': 'Leave a request — we’ll call back and confirm a convenient time.',
    'form.name': 'Name',
    'form.namePh': 'What’s your name?',
    'form.phone': 'Phone',
    'form.service': 'Service',
    'form.servicePh': 'Choose a service',
    'form.time': 'Preferred time',
    'form.timePh': 'When suits you?',
    'form.morning': 'Morning (10:00–12:00)',
    'form.day': 'Daytime (12:00–17:00)',
    'form.evening': 'Evening (17:00–21:00)',
    'form.submit': 'Send request',
    'form.success': 'Thank you! We’ll get in touch to confirm your booking.',

    'footer.tagline': 'A men’s barbershop with character.',
    'footer.contacts': 'Contacts',
    'footer.address': '7 Staleva St., Kyiv',
    'footer.hours': 'Daily 10:00 – 21:00',
    'footer.socials': 'Social',
    'footer.rights': '© 2026 IRON BLADE. All rights reserved.'
  }
};

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Перемикач мови ---------- */
  const langBox = document.getElementById('lang');
  const langButtons = langBox.querySelectorAll('.lang__btn');

  // Застосувати переклад для обраної мови
  function applyLang(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Звичайний текст
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // Елементи з розміткою всередині (напр. заголовок hero з <br>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Плейсхолдери полів
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    // Атрибут мови сторінки + активна кнопка
    document.documentElement.setAttribute('lang', lang);
    langButtons.forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });

    // Запам'ятовуємо вибір
    try { localStorage.setItem('iron-lang', lang); } catch (e) {}
  }

  // Клік по кнопці мови
  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  // Відновлюємо збережену мову (за замовчуванням — українська)
  let savedLang = 'uk';
  try { savedLang = localStorage.getItem('iron-lang') || 'uk'; } catch (e) {}
  applyLang(savedLang);


  /* ---------- 2. Бургер-меню ---------- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Закриваємо меню після кліку по посиланню (зручно на мобільних)
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });


  /* ---------- 3. Форма запису (JS-заглушка, без бекенду) ---------- */
  const form = document.getElementById('bookingForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', function (e) {
    e.preventDefault();  // скасовуємо реальну відправку

    // Проста перевірка обов'язкових полів
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Показуємо повідомлення про успіх і очищаємо форму
    success.hidden = false;
    form.reset();
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Ховаємо повідомлення через 6 секунд
    setTimeout(function () { success.hidden = true; }, 6000);
  });


  /* ---------- 4. Поява карток при скролі (Intersection Observer) ---------- */
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);  // анімуємо один раз
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    // Фолбек для старих браузерів — просто показуємо все
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

});
