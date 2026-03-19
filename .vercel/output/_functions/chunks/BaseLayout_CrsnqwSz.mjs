import { e as createComponent, m as maybeRenderHead, g as addAttribute, n as renderScript, r as renderTemplate, h as createAstro, p as renderHead, l as renderComponent, k as renderSlot, o as Fragment } from './astro/server_R2InwBia.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const en = {
  "nav.about": "About",
  "nav.about.whoWeAre": "Who we are",
  "nav.about.aboutPadel": "About padel",
  "nav.about.contactUs": "Contact us",
  "nav.about.faq": "FAQ",
  "nav.book": "Book now",
  "nav.events": "Events",
  "nav.events.openPlay": "Open Play",
  "nav.events.blog": "Blog",
  "nav.coaching": "Coaching",
  "nav.bookButton": "BOOK NOW",
  "footer.policies": "Policies: terms and conditions, privacy policy.",
  "footer.socials": "Socials: Facebook, Tiktok, instagram.",
  "footer.contact": "Contact us: +995 598 321 555, Nikea st.N7, Kutaisi, Lovepadelkutaisi@gmail.com",
  "home.hero.title": "PLAY PADEL IN KUTAISI",
  "home.hero.subtitle": "Experience the fastest growing sport in the world at our premier courts.",
  "home.hero.cta": "CONTACT US",
  "home.whoWeAre.part1": "",
  "home.whoWeAre.part2": "WHO WE ARE",
  "home.aboutPadel.part1": "",
  "home.aboutPadel.part2": "ABOUT PADEL",
  "home.contactUs": "CONTACT US",
  "blog.title": "Our Blog",
  "blog.empty": "No posts yet.",
  "blog.readIn": "Read in Georgian",
  "contact.title": "Contact Us",
  "contact.phone.label": "Phone",
  "contact.address.label": "Address",
  "contact.address.value": "Nikea st. 7, Kutaisi",
  "contact.email.label": "Email",
  "contact.hours.label": "Opening Hours",
  "contact.hours.value": "Mon-Sun: 08:00 - 23:00",
  "footer.policies.title": "Policies",
  "footer.terms": "Terms & Conditions",
  "footer.privacy": "Privacy Policy",
  "footer.socials.title": "Socials",
  "footer.contactUs.title": "Contact us",
  "footer.address.value": "Nikea st. 7, Kutaisi",
  "faq.title": "Frequently asked questions",
  "faq.category.general": "General Questions",
  "faq.general.q1": "What is padel?",
  "faq.general.a1": "Padel is a fast-growing racket sport that combines elements of tennis and squash. It is played in doubles on an enclosed court surrounded by glass and mesh walls, which players can use during play.",
  "faq.general.q2": "Do I need experience to play?",
  "faq.general.a2": "Not at all! Padel is beginner-friendly and easy to learn. Many of our players are trying it for the first time.",
  "faq.general.q3": "How many people play on one court?",
  "faq.general.a3": "Padel is usually played as doubles, meaning 4 players per court (2 vs 2).",
  "faq.general.q4": "How long does a typical game last?",
  "faq.general.a4": "Most bookings are 60, 90 or 120 minutes, which is enough time for a full match.",
  "faq.general.q5": "Where is the padel club located in Kutaisi?",
  "faq.general.a5": "Our club is conveniently located on 7 Nikea Street with easy access from central Kutaisi by bus or car",
  "faq.category.booking": "Booking",
  "faq.booking.q1": "How do I book a court?",
  "faq.booking.a1": "Courts can be booked directly through our online booking system on the website",
  "faq.booking.q2": "How far in advance can I book?",
  "faq.booking.a2": "Courts can typically be booked up to 7 days in advance.",
  "faq.booking.q3": "What is your cancellation policy?",
  "faq.booking.a3": "Bookings can usually be cancelled or changed up to 24 hours before the start time. After that, the booking may be charged.",
  "faq.category.equipment": "Equipment",
  "faq.equipment.q1": "Do I need to bring my own racket?",
  "faq.equipment.a1": "No. Padel rackets are available for rent free of charge at the club.",
  "faq.equipment.q2": "Do you sell equipment?",
  "faq.equipment.a2": "Yes, we offer padel rackets, balls, grips, and accessories at our club shop.",
  "faq.equipment.q3": "What should I wear?",
  "faq.equipment.a3": "Comfortable sportswear and non-marking court shoes are recommended.",
  "faq.category.lessons": "Lessons & Coaching",
  "faq.lessons.q1": "Do you offer coaching?",
  "faq.lessons.a1": "Yes. We offer private lessons, group classes, and beginner sessions with certified padel coaches.",
  "faq.lessons.q2": "How do I book a lesson?",
  "faq.lessons.a2": "Lessons can be booked through the website or by contacting the club directly",
  "faq.lessons.q3": "Do you offer lessons for children?",
  "faq.lessons.a3": "Yes, we have junior programs and training sessions for kids and teenagers.",
  "faq.category.facilities": "Facilities",
  "faq.facilities.q1": "Do you have changing rooms?",
  "faq.facilities.a1": "Yes, our club includes changing rooms and bathrooms. ",
  "faq.facilities.q2": "Is there parking available?",
  "faq.facilities.a2": "Yes, we provide on-site parking for all guests",
  "faq.facilities.q3": "Do you have a café or lounge area?",
  "faq.facilities.a3": "Yes, players can relax in our club lounge/café area before or after matches.",
  "faq.category.events": "Events & Community",
  "faq.events.q1": "Do you organize tournaments?",
  "faq.events.a1": "Yes! We regularly host social tournaments, leagues, and club events for all skill levels.",
  "faq.events.q2": "Can I join games if I don’t have a partner?",
  "faq.events.a2": "Yes. Our player matching system helps connect players looking for partners or games.",
  "faq.events.q3": "Do you host corporate or private events?",
  "faq.events.a3": "Yes, we offer corporate events, team-building sessions, and private court bookings.",
};

const ka = {
  "nav.about": "ჩვენს შესახებ",
  "nav.about.whoWeAre": "ვინ ვართ ჩვენ",
  "nav.about.aboutPadel": "პადელის შესახებ",
  "nav.about.contactUs": "კონტაქტი",
  "nav.about.faq": "ხშირად დასმული შეკითხვები",
  "nav.book": "დაჯავშნა",
  "nav.events": "ღონისძიებები",
  "nav.events.openPlay": "ღია თამაში",
  "nav.events.blog": "ბლოგი",
  "nav.coaching": "წვრთნა",
  "nav.bookButton": "დაჯავშნა",
  "footer.policies": "წესები: პირობები, კონფიდენციალურობა.",
  "footer.socials": "სოციალური: Facebook, Tiktok, instagram.",
  "footer.contact": "კონტაქტი: +995 598 321 555, ნიკეას ქ. N7, ქუთაისი, Lovepadelkutaisi@gmail.com",
  "home.hero.title": "ითამაშე პადელი ქუთაისში",
  "home.hero.subtitle": "გამოცადე მსოფლიოში ყველაზე სწრაფად მზარდი სპორტი ჩვენთან.",
  "home.hero.cta": "კონტაქტი",
  "home.whoWeAre.part1": "",
  "home.whoWeAre.part2": "ვინ ვართ ჩვენ",
  "home.aboutPadel.part1": "",
  "home.aboutPadel.part2": "პადელის შესახებ",
  "home.contactUs": "კონტაქტი",
  "blog.title": "ბლოგი",
  "blog.empty": "პოსტები არ არის.",
  "blog.readIn": "Read in English",
  "contact.title": "კონტაქტი",
  "contact.phone.label": "ტელეფონი",
  "contact.address.label": "მისამართი",
  "contact.address.value": "ნიკეას ქუჩა ნ.7, ქუთაისი",
  "contact.email.label": "ელ-ფოსტა",
  "contact.hours.label": "სამუშაო საათები",
  "contact.hours.value": "ორშ-კვი: 08:00 - 23:00",
  "footer.policies.title": "პოლიტიკა",
  "footer.terms": "წესები და პირობები",
  "footer.privacy": "კონფიდენციალურობის პოლიტიკა",
  "footer.socials.title": "სოც ქსელები",
  "footer.contactUs.title": "კონტაქტი",
  "footer.address.value": "ნიკეას ქუჩა ნ.7, ქუთაისი",
  "faq.title": "ხშირად დასმული შეკითხვები",
  "faq.category.general": "ზოგადი კითხვები",
  "faq.general.q1": "რა არის პადელი?",
  "faq.general.a1": "პადელი არის სწრაფად მზარდი რაკეტის სპორტი, რომელიც აერთიანებს ტენისისა და სქვოშის ელემენტებს. ითამაშება წყვილებში, დახურულ კორტზე, რომელიც გარშემორტყმულია შუშისა და ბადის კედლებით, რომლებიც თამაშის დროსაც გამოიყენება.",
  "faq.general.q2": "საჭიროა გამოცდილება სათამაშოდ?",
  "faq.general.a2": "სულაც არა! პადელი დამწყებთათვის ძალიან მარტივია და სწრაფად ისწავლება. ჩვენს ბევრ მოთამაშეს პირველად აქვს ამ სპორტთან შეხება.",
  "faq.general.q3": "რამდენი ადამიანი თამაშობს ერთ კორტზე?",
  "faq.general.a3": "პადელი ჩვეულებრივ წყვილებში ითამაშება — ანუ ერთ კორტზე თამაშობს 4 მოთამაშე (2 vs 2).",
  "faq.general.q4": "რამდენ ხანს გრძელდება ჩვეულებრივი თამაში?",
  "faq.general.a4": "დაჯავშნები ჩვეულებრივ არის 60, 90 ან 120 წუთი, რაც საკმარისია სრული მატჩისთვის.",
  "faq.general.q5": "სად მდებარეობს პადელის კლუბი ქუთაისში?",
  "faq.general.a5": "ჩვენი კლუბი მდებარეობს ნიკეას ქუჩა 7-ზე, ქუთაისის ცენტრიდან მარტივად მისადგომ ადგილზე — ავტობუსით ან ავტომობილით.",
  "faq.category.booking": "დაჯავშნა",
  "faq.booking.q1": "როგორ დავჯავშნო კორტი?",
  "faq.booking.a1": "კორტის დაჯავშნა შესაძლებელია პირდაპირ ჩვენი ვებგვერდის ონლაინ დაჯავშნის სისტემის საშუალებით.",
  "faq.booking.q2": "რამდენი დღით ადრე შეიძლება დაჯავშნა?",
  "faq.booking.a2": "როგორც წესი, კორტის დაჯავშნა შესაძლებელია 7 დღით ადრე.",
  "faq.booking.q3": "როგორია გაუქმების პოლიტიკა?",
  "faq.booking.a3": "დაჯავშნის გაუქმება ან ცვლილება შესაძლებელია ჩვეულებრივ თამაშის დაწყებამდე 24 საათით ადრე. ამის შემდეგ დაჯავშნის საფასური ჩამოგეჭრებათ.",
  "faq.category.equipment": "ინვენტარი",
  "faq.equipment.q1": "საჭიროა საკუთარი რაკეტის მოტანა?",
  "faq.equipment.a1": "არა. პადელის რაკეტები კლუბში ხელმისაწვდომია უფასო გაქირავებით.",
  "faq.equipment.q2": "ყიდით თუ არა ინვენტარს?",
  "faq.equipment.a2": "დიახ, ჩვენს კლუბის მაღაზიაში შეგიძლიათ შეიძინოთ პადელის რაკეტები, ბურთები, გრიპები და სხვა აქსესუარები.",
  "faq.equipment.q3": "რა უნდა ჩავიცვა თამაშისთვის?",
  "faq.equipment.a3": "რეკომენდებულია კომფორტული სპორტული ტანსაცმელი და კორტისთვის განკუთვნილი non-marking (ნიშნების არდამტოვებელი) სპორტული ფეხსაცმელი.",
  "faq.category.lessons": "გაკვეთილები და მწვრთნელობა",
  "faq.lessons.q1": "გთავაზობთ თუ არა მწვრთნელობას?",
  "faq.lessons.a1": "დიახ. ჩვენ ვთავაზობთ ინდივიდუალურ გაკვეთილებს, ჯგუფურ ვარჯიშებს და დამწყებთათვის სესიებს სერტიფიცირებულ პადელის მწვრთნელებთან.",
  "faq.lessons.q2": "როგორ დავჯავშნო გაკვეთილი?",
  "faq.lessons.a2": "გაკვეთილის დაჯავშნა შესაძლებელია ვებგვერდის საშუალებით ან კლუბთან პირდაპირ დაკავშირებით.",
  "faq.lessons.q3": "გაქვთ თუ არა გაკვეთილები ბავშვებისთვის?",
  "faq.lessons.a3": "დიახ, გვაქვს სპეციალური პროგრამები და სავარჯიშო სესიები ბავშვებისა და მოზარდებისთვის.",
  "faq.category.facilities": "ინფრასტრუქტურა",
  "faq.facilities.q1": "გაქვთ თუ არა გამოსაცვლელი ოთახები?",
  "faq.facilities.a1": "დიახ, ჩვენს კლუბში არის ორი გამოსაცვლელი ოთახი და ორი სველი წერტილი.",
  "faq.facilities.q2": "არის თუ არა პარკინგი ხელმისაწვდომი?",
  "faq.facilities.a2": "დიახ, ყველა სტუმრისთვის ხელმისაწვდომია ადგილზე პარკინგი.",
  "faq.facilities.q3": "გაქვთ თუ არა კაფე ან დასასვენებელი სივრცე?",
  "faq.facilities.a3": "დიახ, მოთამაშეებს შეუძლიათ დაისვენონ კლუბის ლაუნჯ/კაფე სივრცეში თამაშამდე ან თამაშის შემდეგ.",
  "faq.category.events": "ღონისძიებები და საზოგადოება",
  "faq.events.q1": "აწყობთ თუ არა ტურნირებს?",
  "faq.events.a1": "დიახ! რეგულარულად ვმართავთ სოციალურ ტურნირებს, ლიგებს და კლუბის ღონისძიებებს ყველა დონის მოთამაშისთვის.",
  "faq.events.q2": "შემიძლია ვითამაშო თუ პარტნიორი არ მყავს?",
  "faq.events.a2": "დიახ. ჩვენი მოთამაშეების დაკავშირების სისტემა ეხმარება მოთამაშეებს პარტნიორების ან თამაშების პოვნაში.",
  "faq.events.q3": "მართავთ თუ არა კორპორატიულ ან კერძო ღონისძიებებს?",
  "faq.events.a3": "დიახ, ვთავაზობთ კორპორატიულ ღონისძიებებს, team-building აქტივობებს და კორტის კერძო დაჯავშნას.",
};

const translations = { en, ka };
function getTranslations(locale) {
  if (!isValidLocale(locale)) return translations.en;
  return translations[locale];
}
function isValidLocale(locale) {
  return locale === "en" || locale === "ka";
}
function buildLocalizedPath(path, targetLocale) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length > 0 && (segments[0] === "en" || segments[0] === "ka")) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return `/${segments.join("/")}`;
}
function getTranslatedSlugPath(path, targetLocale, translatedSlug) {
  if (translatedSlug) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "ka")) {
      segments[0] = targetLocale;
    }
    if (segments.length > 2 && segments[1] === "blog") {
      segments[segments.length - 1] = translatedSlug;
    }
    return `/${segments.join("/")}`;
  }
  return buildLocalizedPath(path, targetLocale);
}

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { locale, translatedSlug, isBlogDetail } = Astro2.props;
  const t = getTranslations(locale);
  const currentPath = Astro2.url.pathname;
  const otherLocale = locale === "en" ? "ka" : "en";
  let switcherUrl = buildLocalizedPath(currentPath, otherLocale);
  if (isBlogDetail && translatedSlug) {
    switcherUrl = getTranslatedSlugPath(currentPath, otherLocale, translatedSlug);
  } else if (isBlogDetail) {
    switcherUrl = `/${otherLocale}/blog`;
  }
  const bookButtonOffset = {
    en: "-mt-1",
    // ← English offset: adjust to move EN text up/down
    ka: "-mt-1"
    // ← Georgian offset: adjust to move KA text up/down
  };
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class="w-full bg-black pt-0 pb-2 -mt-4 transition-all duration-300 ease-out"> <div class="max-w-[1600px] mx-auto px-6 lg:px-12"> <div class="flex justify-between items-center"> <!-- Logo: Image --> <div class="flex-shrink-0"> <a${addAttribute(`/${locale}`, "href")} class="block -ml-4 lg:-ml-8"> <img src="/images/logo-red.png" alt="Love Padel" class="h-24 sm:h-28 lg:h-44 w-auto object-contain"> </a> </div> <!-- Desktop Nav --> <nav${addAttribute(`hidden lg:flex space-x-6 xl:space-x-8 items-center font-bold -mt-8 lg:-mt-8 ${locale === "ka" ? "text-lg xl:text-xl" : "text-lg xl:text-xl"}`, "class")}> <!-- About Dropdown --> <div class="relative" id="about-dropdown-desktop"> <button type="button" class="nav-link-awwwards text-[var(--color-brand-blue)]" id="about-dropdown-btn-desktop"${addAttribute(t["nav.about"], "data-text")}> <span>${t["nav.about"]}</span> </button> <div id="about-dropdown-menu-desktop" class="absolute left-0 top-full mt-0 min-w-[200px] flex flex-col gap-3 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 pt-4"> <a${addAttribute(`/${locale}#who-we-are`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.whoWeAre"]}</a> <a${addAttribute(`/${locale}#about-padel`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.aboutPadel"]}</a> <a${addAttribute(`/${locale}#contact-us`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.contactUs"]}</a> <a${addAttribute(`/${locale}/faq`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.faq"]}</a> </div> </div> <a${addAttribute(`/${locale}#book`, "href")} class="nav-link-awwwards text-[var(--color-brand-red)]"${addAttribute(t["nav.book"], "data-text")}><span>${t["nav.book"]}</span></a> <!-- Events Dropdown --> <div class="relative" id="events-dropdown-desktop"> <button type="button" class="nav-link-awwwards text-[var(--color-brand-blue)]" id="events-dropdown-btn-desktop"${addAttribute(t["nav.events"], "data-text")}> <span>${t["nav.events"]}</span> </button> <div id="events-dropdown-menu-desktop" class="absolute left-0 top-full mt-0 min-w-[200px] flex flex-col gap-3 opacity-0 invisible translate-y-2 transition-all duration-200 z-50 pt-4"> <a${addAttribute(`/${locale}#open-play`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.events.openPlay"]}</a> <a${addAttribute(`/${locale}/blog`, "href")} class="block text-base font-medium text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.events.blog"]}</a> </div> </div> <a${addAttribute(`/${locale}#coaching`, "href")} class="nav-link-awwwards text-[var(--color-brand-red)]"${addAttribute(t["nav.coaching"], "data-text")}><span>${t["nav.coaching"]}</span></a> </nav> <!-- Right Actions: CTA & Switcher --> <div class="hidden lg:flex items-center space-x-8 xl:space-x-12 ml-auto -mt-8 lg:-mt-8"> <a${addAttribute(`/${locale}/contact`, "href")}${addAttribute(`border-4 border-[var(--color-brand-blue)] text-[var(--color-brand-red)] text-2xl xl:text-3xl px-8 xl:px-10 py-2 xl:py-2.5 rounded-[3rem] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all inline-flex items-center justify-center ${locale === "ka" ? "font-medium" : "font-semibold"}`, "class")}> <span${addAttribute(bookButtonOffset[locale], "class")}>${t["nav.book"]}</span> </a> <div class="flex flex-col text-sm font-bold text-[var(--color-brand-red)]"> <a${addAttribute(locale === "en" ? "#" : switcherUrl, "href")}${addAttribute(`hover:text-white transition-colors ${locale === "en" ? "opacity-100 cursor-default" : "opacity-50"}`, "class")}>
ENG
</a> <a${addAttribute(locale === "ka" ? "#" : switcherUrl, "href")}${addAttribute(`hover:text-white transition-colors ${locale === "ka" ? "opacity-100 cursor-default" : "opacity-50"}`, "class")}>
ქარ
</a> </div> </div> <!-- Mobile menu button --> <div class="flex lg:hidden items-center text-[var(--color-brand-red)] space-x-4"> <div class="flex flex-col text-xs font-bold text-[var(--color-brand-red)] border-r border-[#333] pr-4"> <a${addAttribute(locale === "en" ? "#" : switcherUrl, "href")}${addAttribute(`${locale === "en" ? "opacity-100" : "opacity-50"}`, "class")}>ENG</a> <a${addAttribute(locale === "ka" ? "#" : switcherUrl, "href")}${addAttribute(`${locale === "ka" ? "opacity-100" : "opacity-50"}`, "class")}>ქარ</a> </div> <button type="button" class="mobile-menu-btn p-2" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile menu --> <div class="lg:hidden hidden bg-black border-t border-gray-800 mt-4 max-h-[70vh] overflow-y-auto" id="mobile-menu"> <div class="px-6 pt-4 pb-6 flex flex-col items-start space-y-4"> <!-- About Dropdown (Mobile) --> <div id="about-dropdown-mobile"> <button type="button" class="nav-link-awwwards text-2xl font-bold text-[var(--color-brand-blue)] w-full text-left" id="about-dropdown-btn-mobile"${addAttribute(t["nav.about"], "data-text")}> <span>${t["nav.about"]}</span> </button> <div id="about-dropdown-menu-mobile" class="hidden pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-[var(--color-brand-blue)]"> <a${addAttribute(`/${locale}#who-we-are`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.whoWeAre"]}</a> <a${addAttribute(`/${locale}#about-padel`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.aboutPadel"]}</a> <a${addAttribute(`/${locale}#contact-us`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.contactUs"]}</a> <a${addAttribute(`/${locale}/faq`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.about.faq"]}</a> </div> </div> <a${addAttribute(`/${locale}#book`, "href")} class="nav-link-awwwards text-2xl font-bold text-[var(--color-brand-red)]"${addAttribute(t["nav.book"], "data-text")}><span>${t["nav.book"]}</span></a> <!-- Events Dropdown (Mobile) --> <div id="events-dropdown-mobile"> <button type="button" class="nav-link-awwwards text-2xl font-bold text-[var(--color-brand-blue)] w-full text-left" id="events-dropdown-btn-mobile"${addAttribute(t["nav.events"], "data-text")}> <span>${t["nav.events"]}</span> </button> <div id="events-dropdown-menu-mobile" class="hidden pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-[var(--color-brand-blue)]"> <a${addAttribute(`/${locale}#open-play`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.events.openPlay"]}</a> <a${addAttribute(`/${locale}/blog`, "href")} class="text-lg text-[var(--color-brand-blue)] hover:text-white transition-colors whitespace-nowrap">${t["nav.events.blog"]}</a> </div> </div> <a${addAttribute(`/${locale}#coaching`, "href")} class="nav-link-awwwards text-2xl font-bold text-[var(--color-brand-red)]"${addAttribute(t["nav.coaching"], "data-text")}><span>${t["nav.coaching"]}</span></a> <a${addAttribute(`/${locale}/contact`, "href")} class="w-fit mx-auto mt-8 border-[3px] border-[var(--color-brand-blue)] text-[var(--color-brand-red)] px-10 rounded-[3rem] font-semibold text-3xl inline-flex items-center justify-center py-3 hover:bg-[var(--color-brand-blue)] hover:text-white transition-colors"> <span${addAttribute(bookButtonOffset[locale], "class")}>${t["nav.book"]}</span> </a> </div> </div> </header> ${renderScript($$result, "C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/User/Desktop/Padel/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { locale } = Astro2.props;
  const t = getTranslations(locale);
  (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black py-4 border-t border-[#111] shrink-0"> <div class="max-w-[1600px] mx-auto px-4 lg:px-12"> <!-- Desktop: flex end, Mobile: grid with columns --> <div class="flex flex-col lg:flex-row lg:justify-end gap-8 lg:gap-32 w-full"> <!-- Container for Mobile row / Desktop items --> <div class="grid grid-cols-3 gap-2 sm:gap-4 lg:flex lg:flex-row lg:gap-32 w-full lg:w-auto text-center lg:text-left justify-items-center lg:justify-items-auto"> <!-- Policies --> <div class="flex flex-col space-y-1 items-center lg:items-start text-center lg:text-left"> <h3 class="text-base lg:text-lg font-bold text-[var(--color-brand-red)] mb-0"> ${t["footer.policies.title"]} </h3> <a${addAttribute(locale === "ka" ? "/docs/terms_ka.pdf" : "/docs/terms_en.pdf", "href")} target="_blank" rel="noopener noreferrer" class="text-[var(--color-brand-red)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity whitespace-normal lg:whitespace-nowrap">${t["footer.terms"]}</a> <a${addAttribute(locale === "ka" ? "/docs/terms_ka.pdf" : "/docs/terms_en.pdf", "href")} target="_blank" rel="noopener noreferrer" class="text-[var(--color-brand-red)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity break-words hyphens-auto text-center lg:text-left">${t["footer.privacy"]}</a> <a${addAttribute(`/${locale}/faq`, "href")} class="text-[var(--color-brand-red)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity whitespace-normal lg:whitespace-nowrap break-words text-center lg:text-left">${t["nav.about.faq"]}</a> </div> <!-- Socials --> <div class="flex flex-col space-y-1 items-center lg:items-start text-center lg:text-left"> <h3 class="text-base lg:text-lg font-bold text-[var(--color-brand-blue)] mb-0"> ${t["footer.socials.title"]} </h3> <a href="https://www.instagram.com/lovepadelkutaisi/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-brand-blue)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity">Instagram</a> <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="text-[var(--color-brand-blue)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity">Tiktok</a> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-[var(--color-brand-blue)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity">Facebook</a> </div> <!-- Contact us --> <div class="flex flex-col space-y-1 items-center lg:items-start text-center lg:text-left"> <h3 class="text-base lg:text-lg font-bold text-[var(--color-brand-red)] mb-0 whitespace-normal lg:whitespace-nowrap"> ${t["footer.contactUs.title"]} </h3> <a href="tel:+995598321555" class="text-[var(--color-brand-red)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity whitespace-normal lg:whitespace-nowrap cursor-pointer">+995 598 321 555</a> <p class="text-[var(--color-brand-red)] text-[10px] lg:text-sm whitespace-normal lg:whitespace-nowrap break-words hyphens-auto"> ${t["footer.address.value"]} </p> <a href="mailto:lovepadelkutaisi@gmail.com" class="text-[var(--color-brand-red)] text-[10px] lg:text-sm hover:opacity-80 transition-opacity break-all lg:break-normal cursor-pointer">lovepadelkutaisi<br class="lg:hidden">@gmail.com</a> </div> </div> </div> </div> </footer>`;
}, "C:/Users/User/Desktop/Padel/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Padel Court in Kutaisi",
    locale,
    translatedSlug,
    isBlogDetail = false,
    hideScrollIndicator = false,
    hideFooterAtTop = false
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Georgian:wght@100..900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col h-[100dvh] overflow-hidden font-sans text-white bg-black"${addAttribute(hideFooterAtTop ? "true" : "false", "data-hide-footer-at-top")}> <!-- Scroll progress bar --> <div id="scroll-progress" aria-hidden="true"></div> <!-- Custom Padel Ball Cursor --> <div id="padel-cursor" aria-hidden="true"></div> ${renderComponent($$result, "Navbar", $$Navbar, { "locale": locale, "translatedSlug": translatedSlug, "isBlogDetail": isBlogDetail })} <main class="flex-grow flex flex-col overflow-y-auto relative" id="main-scroll"> ${renderSlot($$result, $$slots["default"])} <!-- Scroll down indicator (shown over hero, hidden after first scroll) --> ${!hideScrollIndicator && renderTemplate`<div id="scroll-indicator" aria-hidden="true"> <div class="si-mouse"> <div class="si-dot"></div> </div> <div class="si-chevrons"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <i></i> <i></i> <i></i> ` })} </div> <span>scroll</span> </div>`} <!-- Add empty space at the absolute bottom of the scroll container so content isn't covered by the footer when stopped --> <div id="footer-spacer" class="w-full shrink-0"></div> </main> <!-- Footer container overlay to prevent reserving empty flex space --> <div id="footer-container"${addAttribute(`fixed bottom-0 left-0 w-full z-40 transition-all duration-300 ease-out ${hideFooterAtTop ? "opacity-0 pointer-events-none translate-y-full" : "opacity-100 transform translate-y-0"}`, "class")}> ${renderComponent($$result, "Footer", $$Footer, { "locale": locale })} </div> ${renderScript($$result, "C:/Users/User/Desktop/Padel/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/User/Desktop/Padel/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getTranslations as g, isValidLocale as i };
