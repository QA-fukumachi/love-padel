import '../../../chunks/page-ssr_DdKxNcrx.mjs';
import { e as createComponent, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, r as renderTemplate, l as renderComponent, h as createAstro, g as addAttribute, n as renderScript, o as Fragment } from '../../../chunks/astro/server_R2InwBia.mjs';
import 'piccolore';
import { i as isValidLocale, $ as $$BaseLayout, g as getTranslations } from '../../../chunks/BaseLayout_CrsnqwSz.mjs';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import { s as sanityClient, g as getSingleBlogPostQuery, u as urlFor } from '../../../chunks/queries_DoFInNQC.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function usePortableText(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$8 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$7 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$6 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$5 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$Astro$4 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Text;
  const { node } = Astro2.props;
  return renderTemplate`${node.text}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/Text.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$3 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      text: $$Text,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type, fallbackComponent) => {
    const component = ((component2) => {
      return component2[type] || component2;
    })(components[nodeType]);
    if (isComponent(component)) {
      return component;
    }
    missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
    return fallbackComponent;
  };
  const cachedNodes = /* @__PURE__ */ new WeakMap();
  function cacheNode(node, Default, Unknown) {
    cachedNodes.set(node, { Default, Unknown });
  }
  let fallbackRenderOptions;
  const portableTextRender = (options, isInline) => {
    if (!fallbackRenderOptions) {
      throw new Error(
        "[PortableText portableTextRender] fallbackRenderOptions is undefined"
      );
    }
    const renderChildren = (children, inline = false) => {
      return children?.map(portableTextRender(options, inline)) ?? [];
    };
    const renderOptions = { ...fallbackRenderOptions, ...options ?? {} };
    return function renderNode(node, index) {
      function run(handler, props) {
        if (!isComponent(handler)) {
          throw new Error(
            `[PortableText render] No handler found for node type ${node._type}.`
          );
        }
        return handler(props);
      }
      if (isPortableTextToolkitList(node)) {
        const UnknownComponent2 = components.unknownList ?? $$UnknownList;
        cacheNode(node, $$List, UnknownComponent2);
        return run(renderOptions.list, {
          Component: provideComponent("list", node.listItem, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: renderChildren(node.children, false)
        });
      }
      if (isPortableTextListItemBlock(node)) {
        const { listItem, ...blockNode } = node;
        const isStyled = node.style && node.style !== "normal";
        node.children = isStyled ? renderNode(blockNode, index) : buildMarksTree(node);
        const UnknownComponent2 = components.unknownListItem ?? $$UnknownListItem;
        cacheNode(node, $$ListItem, UnknownComponent2);
        return run(renderOptions.listItem, {
          Component: provideComponent(
            "listItem",
            node.listItem,
            UnknownComponent2
          ),
          props: asComponentProps(node, index, false),
          children: isStyled ? node.children : renderChildren(node.children, true)
        });
      }
      if (isPortableTextToolkitSpan(node)) {
        const UnknownComponent2 = components.unknownMark ?? $$UnknownMark;
        cacheNode(node, $$Mark, UnknownComponent2);
        return run(renderOptions.mark, {
          Component: provideComponent("mark", node.markType, UnknownComponent2),
          props: asComponentProps(node, index, true),
          children: renderChildren(node.children, true)
        });
      }
      if (isPortableTextBlock(node)) {
        node.style ??= "normal";
        node.children = buildMarksTree(node);
        const UnknownComponent2 = components.unknownBlock ?? $$UnknownBlock;
        cacheNode(node, $$Block, UnknownComponent2);
        return run(renderOptions.block, {
          Component: provideComponent("block", node.style, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: renderChildren(node.children, true)
        });
      }
      if (isPortableTextToolkitTextNode(node)) {
        const isHardBreak = "\n" === node.text;
        const props = asComponentProps(node, index, true);
        if (isHardBreak) {
          return run(renderOptions.hardBreak, {
            Component: isComponent(components.hardBreak) ? components.hardBreak : $$HardBreak,
            props
          });
        }
        return run(renderOptions.text, {
          Component: isComponent(components.text) ? components.text : $$Text,
          props
        });
      }
      const UnknownComponent = components.unknownType ?? $$UnknownType;
      return run(renderOptions.type, {
        Component: provideComponent("type", node._type, UnknownComponent),
        props: asComponentProps(
          node,
          index,
          isInline ?? false
          /* default to block */
        )
      });
    };
  };
  globalThis[key] = (node) => ({
    getDefaultComponent: provideDefaultComponent.bind(null, node),
    getUnknownComponent: provideUnknownComponent.bind(null, node),
    render: (options) => node.children?.map(portableTextRender(options))
  });
  const provideDefaultComponent = (node) => {
    const DefaultComponent = cachedNodes.get(node)?.Default;
    if (DefaultComponent) return DefaultComponent;
    if (isPortableTextToolkitList(node)) return $$List;
    if (isPortableTextListItemBlock(node)) return $$ListItem;
    if (isPortableTextToolkitSpan(node)) return $$Mark;
    if (isPortableTextBlock(node)) return $$Block;
    if (isPortableTextToolkitTextNode(node)) {
      return "\n" === node.text ? $$HardBreak : $$Text;
    }
    return $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    const UnknownComponent = cachedNodes.get(node)?.Unknown;
    if (UnknownComponent) return UnknownComponent;
    if (isPortableTextToolkitList(node)) {
      return components.unknownList ?? $$UnknownList;
    }
    if (isPortableTextListItemBlock(node)) {
      return components.unknownListItem ?? $$UnknownListItem;
    }
    if (isPortableTextToolkitSpan(node)) {
      return components.unknownMark ?? $$UnknownMark;
    }
    if (isPortableTextBlock(node)) {
      return components.unknownBlock ?? $$UnknownBlock;
    }
    if (!isPortableTextToolkitTextNode(node)) {
      return components.unknownType ?? $$UnknownType;
    }
    throw new Error(
      `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
    );
  };
  const blocks = Array.isArray(value) ? value : value ? [value] : [];
  const nodes = nestLists(blocks, listNestingMode);
  const render = (options) => {
    fallbackRenderOptions = options;
    return portableTextRender(options);
  };
  const createSlotRenderer = (slotName) => Astro2.slots.render.bind(Astro2.slots, slotName);
  const slots = [
    "type",
    "block",
    "list",
    "listItem",
    "mark",
    "text",
    "hardBreak"
  ].reduce(
    (obj, name) => {
      obj[name] = Astro2.slots.has(name) ? createSlotRenderer(name) : void 0;
      return obj;
    },
    {}
  );
  return renderTemplate`${(() => {
    const renderNode = (slotRenderer) => {
      return ({ Component, props, children }) => slotRenderer?.([{ Component, props, children }]) ?? renderTemplate`${renderComponent($$result, "Component", Component, { ...props }, { "default": ($$result2) => renderTemplate`${children}` })}`;
    };
    return nodes.map(
      render({
        type: renderNode(slots.type),
        block: renderNode(slots.block),
        list: renderNode(slots.list),
        listItem: renderNode(slots.listItem),
        mark: renderNode(slots.mark),
        text: renderNode(slots.text),
        hardBreak: renderNode(slots.hardBreak)
      })
    );
  })()}`;
}, "C:/Users/User/Desktop/Padel/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="prose prose-lg md:prose-xl mx-auto prose-blue
  prose-headings:font-bold prose-headings:text-[var(--color-text-primary)] prose-headings:tracking-tight
  prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-4xl
  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
  prose-a:text-[var(--color-brand-blue)] prose-a:font-semibold prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:text-blue-400 hover:prose-a:decoration-[var(--color-brand-blue)]
  prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-12
  prose-blockquote:border-l-[var(--color-brand-blue)] prose-blockquote:bg-blue-900/20 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-gray-300 prose-blockquote:font-medium prose-blockquote:italic
  prose-strong:text-white prose-strong:font-bold
  prose-li:text-gray-300 prose-li:marker:text-[var(--color-brand-blue)]
  max-w-none text-lg md:text-xl text-gray-300"> ${renderComponent($$result, "PortableTextComponent", $$PortableText$1, { "value": value })} </div>`;
}, "C:/Users/User/Desktop/Padel/src/components/PortableText.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { locale, slug } = Astro2.params;
  if (!locale || !isValidLocale(locale) || !slug) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  const t = getTranslations(locale);
  const post = await sanityClient.fetch(getSingleBlogPostQuery, {
    locale,
    slug
  });
  if (!post) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }
  let imageUrl = "/images/placeholder-blog.jpg";
  if (post.image) {
    imageUrl = urlFor(post.image).width(1920).auto("format").url();
  }
  const formattedDate = new Date(post.publishDate).toLocaleDateString(
    locale === "ka" ? "ka-GE" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  );
  const isGeorgian = locale === "ka";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} | Love Padel`, "description": post.title, "locale": locale, "translatedSlug": post.translatedSlug, "isBlogDetail": true, "hideScrollIndicator": true, "hideFooterAtTop": true, "data-astro-cid-mvpdthgs": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div id="reading-progress" class="fixed top-0 left-0 h-1 bg-[var(--color-brand-blue)] z-50 transition-all duration-150 ease-out w-0" data-astro-cid-mvpdthgs></div> <article class="w-full relative bg-[var(--color-bg-primary)] overflow-x-hidden" data-astro-cid-mvpdthgs>  <header class="relative flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-8 md:pb-16 pt-0" id="blog-hero" data-astro-cid-mvpdthgs> <div class="absolute top-0 right-0 w-full max-w-3xl h-full max-h-3xl bg-brandPrimary/10 blur-[140px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/4" data-astro-cid-mvpdthgs></div> <div class="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-8 lg:items-end justify-between" data-astro-cid-mvpdthgs>  <div class="w-full lg:w-4/5 xl:w-5/6 flex flex-col items-start text-left" data-astro-cid-mvpdthgs> <div class="hero-element transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform mb-6" data-astro-cid-mvpdthgs> <span class="inline-block px-4 py-1.5 rounded-full border border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase" data-astro-cid-mvpdthgs>\nBlog\n</span> </div> <h1', " data-astro-cid-mvpdthgs> ", ' </h1>  <div class="hero-element transition-all duration-1000 delay-200 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform flex flex-wrap justify-start items-center gap-6 md:gap-8" data-astro-cid-mvpdthgs> <div class="flex items-center gap-4" data-astro-cid-mvpdthgs> ', ' <div data-astro-cid-mvpdthgs> <p class="text-[var(--color-text-primary)] font-bold text-lg leading-tight" data-astro-cid-mvpdthgs> ', ' </p> <p class="text-brandSecondary font-medium text-sm" data-astro-cid-mvpdthgs> ', " </p> </div> </div> ", " ", ' </div> </div> </div> </header>  <div class="w-full px-6 md:px-8 lg:px-12 mb-20 lg:mb-32" data-astro-cid-mvpdthgs> <div class="w-full max-w-[1400px] mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden will-change-transform shadow-2xl relative bg-black flex items-center justify-center" id="hero-image-container" data-astro-cid-mvpdthgs> <div class="absolute inset-0 bg-brandPrimary/5 mix-blend-multiply z-10 pointer-events-none" data-astro-cid-mvpdthgs></div> <img', "", ' id="hero-image" class="max-w-full h-auto max-h-[60vh] md:max-h-[85vh] object-contain rounded-[2rem] md:rounded-[3rem] will-change-transform shadow-lg" data-astro-cid-mvpdthgs> </div> </div>  <div class="w-full max-w-4xl mx-auto px-6 pb-32" data-astro-cid-mvpdthgs> <div class="content-element w-full" data-astro-cid-mvpdthgs> ', ' </div>  <div class="mt-24 pt-12 border-t border-[var(--color-border)] flex flex-col items-center justify-center text-center" data-astro-cid-mvpdthgs> <p class="text-2xl font-bold text-[var(--color-text-primary)] mb-6" data-astro-cid-mvpdthgs> ', ' </p> <div class="flex flex-wrap justify-center gap-6 mt-4" data-astro-cid-mvpdthgs>  <button class="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-blue)] hover:border-[var(--color-brand-blue)] transition-colors group" data-astro-cid-mvpdthgs> <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 transition-colors" data-astro-cid-mvpdthgs><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" data-astro-cid-mvpdthgs></path></svg> </button>  <button class="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 transition-colors group" data-astro-cid-mvpdthgs> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 transition-colors" data-astro-cid-mvpdthgs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-mvpdthgs></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-mvpdthgs></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-mvpdthgs></line></svg> </button>  <button onclick="copyArticleLink(this)" class="relative w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors group" data-astro-cid-mvpdthgs> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 transition-colors" data-astro-cid-mvpdthgs><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-astro-cid-mvpdthgs></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-astro-cid-mvpdthgs></path></svg> </button> </div> </div> </div> </article>  ', ' <script>\n    function copyArticleLink(btn) {\n      var url = window.location.href;\n\n      // Copy to clipboard with fallback\n      if (navigator.clipboard && window.isSecureContext) {\n        navigator.clipboard.writeText(url);\n      } else {\n        var ta = document.createElement("textarea");\n        ta.value = url;\n        ta.style.position = "fixed";\n        ta.style.left = "-9999px";\n        document.body.appendChild(ta);\n        ta.focus();\n        ta.select();\n        document.execCommand("copy");\n        ta.remove();\n      }\n\n      // Remove old tooltip if exists\n      var old = document.getElementById("copy-toast");\n      if (old) old.remove();\n\n      // Create tooltip element\n      var toast = document.createElement("div");\n      toast.id = "copy-toast";\n      toast.textContent =\n        document.documentElement.lang === "ka"\n          ? "\u10DA\u10D8\u10DC\u10D9\u10D8 \u10D3\u10D0\u10D9\u10DD\u10DE\u10D8\u10E0\u10D3\u10D0!"\n          : "Link Copied!";\n      toast.style.cssText =\n        "position:fixed;z-index:99999;background:#38a1da;color:#fff;font-size:13px;font-weight:700;padding:10px 20px;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.4);pointer-events:none;transition:opacity 0.3s ease,transform 0.3s ease;opacity:0;transform:translate(-50%,8px);white-space:nowrap;";\n\n      document.body.appendChild(toast);\n\n      // Position above button\n      var r = btn.getBoundingClientRect();\n      toast.style.top = r.top - 50 + "px";\n      toast.style.left = r.left + r.width / 2 + "px";\n\n      // Animate in\n      requestAnimationFrame(function () {\n        requestAnimationFrame(function () {\n          toast.style.opacity = "1";\n          toast.style.transform = "translate(-50%, 0)";\n        });\n      });\n\n      // Fade out after 2s\n      setTimeout(function () {\n        toast.style.opacity = "0";\n        toast.style.transform = "translate(-50%, 8px)";\n        setTimeout(function () {\n          toast.remove();\n        }, 400);\n      }, 2000);\n    }\n  <\/script> '])), maybeRenderHead(), addAttribute(`hero-element transition-all duration-1000 delay-100 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[var(--color-text-primary)] leading-[1.0] tracking-tight mb-8 ${isGeorgian ? "font-georgian" : ""}`, "class"), post.title, post.author?.imageUrl && renderTemplate`<div class="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-bg-primary)] shadow-md" data-astro-cid-mvpdthgs> <img${addAttribute(post.author.imageUrl, "src")}${addAttribute(post.author.name, "alt")} class="w-full h-full object-cover" data-astro-cid-mvpdthgs> </div>`, post.author?.name || "Love Padel", formattedDate, post.translatedSlug && renderTemplate`<div class="w-px h-10 bg-gray-200 hidden md:block" data-astro-cid-mvpdthgs></div>`, post.translatedSlug && renderTemplate`<a${addAttribute(`/${locale === "en" ? "ka" : "en"}/blog/${post.translatedSlug}`, "href")} class="group flex items-center gap-2 bg-[var(--color-bg-secondary)] hover:bg-[var(--color-brand-blue)] px-6 py-3 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-brandPrimary/30" data-astro-cid-mvpdthgs> <span class="text-[var(--color-text-primary)] group-hover:text-white font-bold transition-colors" data-astro-cid-mvpdthgs> ${t["blog.readIn"]} </span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-[var(--color-brand-blue)] group-hover:text-white transition-colors" data-astro-cid-mvpdthgs> ${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-mvpdthgs": true }, { "default": async ($$result3) => renderTemplate` <path d="m5 8 6 6" data-astro-cid-mvpdthgs></path> <path d="m4 14 6-6 2-3" data-astro-cid-mvpdthgs></path> <path d="M2 5h12" data-astro-cid-mvpdthgs></path> <path d="M7 2h1" data-astro-cid-mvpdthgs></path> <path d="m22 22-5-10-5 10" data-astro-cid-mvpdthgs></path> <path d="M14 18h6" data-astro-cid-mvpdthgs></path> ` })} </svg> </a>`, addAttribute(imageUrl, "src"), addAttribute(post.image?.alt || post.title, "alt"), renderComponent($$result2, "PortableText", $$PortableText, { "value": post.content, "data-astro-cid-mvpdthgs": true }), isGeorgian ? "\u10DB\u10DD\u10D2\u10D4\u10EC\u10DD\u10DC\u10D0\u10D7 \u10D1\u10DA\u10DD\u10D2\u10D8?" : "Enjoyed this reading?", renderScript($$result2, "C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/[slug].astro?astro&type=script&index=0&lang.ts")) })}`;
}, "C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/[slug].astro", void 0);

const $$file = "C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/[slug].astro";
const $$url = "/[locale]/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
