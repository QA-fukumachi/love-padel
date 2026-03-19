import '../../chunks/page-ssr_DdKxNcrx.mjs';
import { e as createComponent, m as maybeRenderHead, g as addAttribute, l as renderComponent, o as Fragment, r as renderTemplate, h as createAstro } from '../../chunks/astro/server_R2InwBia.mjs';
import 'piccolore';
import { i as isValidLocale, $ as $$BaseLayout, g as getTranslations } from '../../chunks/BaseLayout_CrsnqwSz.mjs';
import { u as urlFor, s as sanityClient, a as getBlogPostsQuery } from '../../chunks/queries_DoFInNQC.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, slug, excerpt, image, publishDate, author, locale } = Astro2.props;
  let imageUrl = "/images/placeholder-blog.jpg";
  if (image) {
    imageUrl = urlFor(image).width(800).height(500).url();
  }
  const formattedDate = new Date(publishDate).toLocaleDateString(
    locale === "ka" ? "ka-GE" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  );
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${locale}/blog/${slug}`, "href")} class="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col h-full"> <div class="aspect-w-16 aspect-h-10 w-full overflow-hidden bg-gray-100 relative"> <img${addAttribute(imageUrl, "src")}${addAttribute(image?.alt || title, "alt")} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"> </div> <div class="p-6 flex-grow flex flex-col justify-between"> <div> <div class="flex items-center gap-2 mb-2"> <p class="text-sm !text-gray-500">${formattedDate}</p> ${author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="!text-gray-300">•</span> <p class="text-sm font-medium !text-gray-700">${author}</p> ` })}`} </div> <h3 class="text-xl font-bold !text-gray-900 group-hover:!text-[var(--color-brand-blue)] transition-colors line-clamp-2 mb-3"> ${title} </h3> ${excerpt && renderTemplate`<p class="!text-gray-600 line-clamp-3 text-sm leading-relaxed"> ${excerpt} </p>`} </div> </div> </a>`;
}, "C:/Users/User/Desktop/Padel/src/components/BlogCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locale } = Astro2.params;
  if (!locale || !isValidLocale(locale)) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const t = getTranslations(locale);
  const posts = await sanityClient.fetch(getBlogPostsQuery, { locale });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${t["blog.title"]} | Love Padel`, "description": t["blog.title"], "locale": locale, "hideScrollIndicator": true, "hideFooterAtTop": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-16 md:py-24"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-extrabold text-[var(--color-brand-blue)] uppercase"> ${t["blog.title"]} </h1> </div> ${posts.length === 0 ? renderTemplate`<div class="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100"> <p class="text-xl text-gray-500 font-medium">${t["blog.empty"]}</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.title, "slug": post.slug.current, "excerpt": post.excerpt, "image": post.image, "publishDate": post.publishDate, "author": post.author, "locale": locale })}`)} </div>`} </div> ` })}`;
}, "C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/index.astro", void 0);

const $$file = "C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/index.astro";
const $$url = "/[locale]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
