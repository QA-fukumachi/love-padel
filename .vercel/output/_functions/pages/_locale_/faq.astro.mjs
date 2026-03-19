import '../../chunks/page-ssr_DdKxNcrx.mjs';
import { e as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, h as createAstro, l as renderComponent, g as addAttribute } from '../../chunks/astro/server_R2InwBia.mjs';
import 'piccolore';
import { i as isValidLocale, $ as $$BaseLayout, g as getTranslations } from '../../chunks/BaseLayout_CrsnqwSz.mjs';
import 'clsx';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$FAQAccordion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQAccordion;
  const { question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="faq-item border-b border-gray-800 last:border-0"> <button type="button" class="faq-question w-full flex justify-between items-center py-6 text-left hover:text-[var(--color-brand-blue)] transition-colors group" aria-expanded="false"> <span class="text-xl md:text-2xl font-bold tracking-tight">${question}</span> <span class="faq-icon relative w-6 h-6 shrink-0 ml-4"> <span class="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2"></span> <span class="icon-vertical absolute top-0 left-1/2 w-0.5 h-full bg-current -translate-x-1/2 transition-transform duration-300"></span> </span> </button> <div class="faq-answer-container overflow-hidden max-h-0 transition-all duration-300 ease-in-out"> <div class="faq-answer pb-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl"> ${answer} </div> </div> </div> ${renderScript($$result, "C:/Users/User/Desktop/Padel/src/components/FAQAccordion.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/Padel/src/components/FAQAccordion.astro", void 0);

const $$Astro = createAstro();
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { locale } = Astro2.params;
  if (!locale || !isValidLocale(locale)) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const t = getTranslations(locale);
  const faqCategories = [
    {
      id: "general",
      title: t["faq.category.general"],
      items: [
        { q: t["faq.general.q1"], a: t["faq.general.a1"] },
        { q: t["faq.general.q2"], a: t["faq.general.a2"] },
        { q: t["faq.general.q3"], a: t["faq.general.a3"] },
        { q: t["faq.general.q4"], a: t["faq.general.a4"] },
        { q: t["faq.general.q5"], a: t["faq.general.a5"] }
      ]
    },
    {
      id: "booking",
      title: t["faq.category.booking"],
      items: [
        { q: t["faq.booking.q1"], a: t["faq.booking.a1"] },
        { q: t["faq.booking.q2"], a: t["faq.booking.a2"] },
        { q: t["faq.booking.q3"], a: t["faq.booking.a3"] }
      ]
    },
    {
      id: "equipment",
      title: t["faq.category.equipment"],
      items: [
        { q: t["faq.equipment.q1"], a: t["faq.equipment.a1"] },
        { q: t["faq.equipment.q2"], a: t["faq.equipment.a2"] },
        { q: t["faq.equipment.q3"], a: t["faq.equipment.a3"] }
      ]
    },
    {
      id: "lessons",
      title: t["faq.category.lessons"],
      items: [
        { q: t["faq.lessons.q1"], a: t["faq.lessons.a1"] },
        { q: t["faq.lessons.q2"], a: t["faq.lessons.a2"] },
        { q: t["faq.lessons.q3"], a: t["faq.lessons.a3"] }
      ]
    },
    {
      id: "facilities",
      title: t["faq.category.facilities"],
      items: [
        { q: t["faq.facilities.q1"], a: t["faq.facilities.a1"] },
        { q: t["faq.facilities.q2"], a: t["faq.facilities.a2"] },
        { q: t["faq.facilities.q3"], a: t["faq.facilities.a3"] }
      ]
    },
    {
      id: "events",
      title: t["faq.category.events"],
      items: [
        { q: t["faq.events.q1"], a: t["faq.events.a1"] },
        { q: t["faq.events.q2"], a: t["faq.events.a2"] },
        { q: t["faq.events.q3"], a: t["faq.events.a3"] }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${t["faq.title"]} | Love Padel`, "description": t["faq.title"], "locale": locale, "hideScrollIndicator": true, "data-astro-cid-huocp4x6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full bg-black pt-32 pb-20" data-astro-cid-huocp4x6> <div class="max-w-[1600px] mx-auto px-6 lg:px-12" data-astro-cid-huocp4x6> <h1 class="text-4xl md:text-7xl font-bold text-[var(--color-brand-red)] mb-16 tracking-tight uppercase" data-astro-cid-huocp4x6> ${t["faq.title"]} </h1> <div class="space-y-20" data-astro-cid-huocp4x6> ${faqCategories.map((category) => renderTemplate`<div${addAttribute(category.id, "id")} class="category-block" data-astro-cid-huocp4x6> <h2 class="text-2xl md:text-3xl font-bold text-[var(--color-brand-blue)] mb-8 uppercase tracking-wider border-l-4 border-[var(--color-brand-blue)] pl-6" data-astro-cid-huocp4x6> ${category.title} </h2> <div class="border-t border-gray-800" data-astro-cid-huocp4x6> ${category.items.map((item) => renderTemplate`${renderComponent($$result2, "FAQAccordion", $$FAQAccordion, { "question": item.q, "answer": item.a, "data-astro-cid-huocp4x6": true })}`)} </div> </div>`)} </div> </div> </section> ` })} `;
}, "C:/Users/User/Desktop/Padel/src/pages/[locale]/faq.astro", void 0);

const $$file = "C:/Users/User/Desktop/Padel/src/pages/[locale]/faq.astro";
const $$url = "/[locale]/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
