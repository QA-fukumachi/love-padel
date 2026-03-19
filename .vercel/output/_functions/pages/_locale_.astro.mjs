import '../chunks/page-ssr_DdKxNcrx.mjs';
import { e as createComponent, l as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_R2InwBia.mjs';
import 'piccolore';
import { i as isValidLocale, $ as $$BaseLayout, g as getTranslations } from '../chunks/BaseLayout_CrsnqwSz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  if (!locale || !isValidLocale(locale)) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const t = getTranslations(locale);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${t["home.hero.title"]} | Love Padel`, "description": t["home.hero.subtitle"], "locale": locale }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative w-full min-h-screen flex-grow overflow-hidden"> <!-- Hero Background Image --> <div class="absolute inset-0 z-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center"> <div class="absolute inset-0 bg-black bg-opacity-40"></div> </div> </div> <section id="who-we-are" class="w-full bg-black py-20"> <div class="max-w-[1600px] mx-auto px-6 lg:px-12"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase"> ${t["home.whoWeAre.part1"]}<span class="text-[var(--color-brand-red)]">${t["home.whoWeAre.part2"]}</span> </h2> <p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
</p> </div> </section> <section id="about-padel" class="w-full bg-black py-20"> <div class="max-w-[1600px] mx-auto px-6 lg:px-12"> <h2 class="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight uppercase"> ${t["home.aboutPadel.part1"]}<span class="text-[var(--color-brand-blue)]">${t["home.aboutPadel.part2"]}</span> </h2> <!-- Responsive 16:9 YouTube embed --> <div class="relative w-full aspect-video max-w-4xl rounded-2xl overflow-hidden border border-gray-800"> <iframe src="https://www.youtube.com/embed/l5SxKnaTYHw" title="About Padel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="absolute inset-0 w-full h-full" loading="lazy"></iframe> </div> </div> </section> <section id="contact-us" class="w-full bg-black py-20 border-t border-gray-900"> <div class="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start gap-12"> <div> <h2 class="text-4xl md:text-5xl font-bold text-[var(--color-brand-red)] mb-8 tracking-tight uppercase"> ${t["home.contactUs"]} </h2> <div class="flex flex-col space-y-4"> <a href="tel:+995598321555" class="text-[var(--color-brand-blue)] text-lg md:text-xl hover:text-[var(--color-brand-red)] transition-colors inline-block w-fit cursor-pointer">
+995 598 321 555
</a> <p class="text-[var(--color-brand-blue)] text-lg md:text-xl"> ${t["contact.address.value"] || "Nikea st. 7, Kutaisi"} </p> <a href="mailto:lovepadelkutaisi@gmail.com" class="text-[var(--color-brand-blue)] text-lg md:text-xl hover:text-[var(--color-brand-red)] transition-colors inline-block w-fit cursor-pointer">
lovepadelkutaisi@gmail.com
</a> </div> </div> <!-- Google Maps Embed for Nikea st. 7, Kutaisi --> <div class="w-full lg:w-2/3 lg:max-w-3xl aspect-video lg:aspect-[21/9] rounded-2xl border border-gray-800 overflow-hidden relative"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.6974102983193!2d42.6841203!3d42.2472719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d0674f17dfd%3A0xc3afbf6ee90fc367!2s7%20Nikea%20St%2C%20Kutaisi%2C%20Georgia!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" class="absolute inset-0 w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe> </div> </div> </section> ` })}`;
}, "C:/Users/User/Desktop/Padel/src/pages/[locale]/index.astro", void 0);

const $$file = "C:/Users/User/Desktop/Padel/src/pages/[locale]/index.astro";
const $$url = "/[locale]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
