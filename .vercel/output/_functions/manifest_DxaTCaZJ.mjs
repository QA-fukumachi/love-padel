import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_R2InwBia.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BFcl6HPM.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/User/Desktop/Padel/","cacheDir":"file:///C:/Users/User/Desktop/Padel/node_modules/.astro/","outDir":"file:///C:/Users/User/Desktop/Padel/dist/","srcDir":"file:///C:/Users/User/Desktop/Padel/src/","publicDir":"file:///C:/Users/User/Desktop/Padel/public/","buildClientDir":"file:///C:/Users/User/Desktop/Padel/dist/client/","buildServerDir":"file:///C:/Users/User/Desktop/Padel/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CqFBnG9H.css"},{"type":"inline","content":"#reading-progress[data-astro-cid-mvpdthgs]{will-change:width;transform:translateZ(0)}.content-element[data-astro-cid-mvpdthgs]{transition:opacity 1s cubic-bezier(.19,1,.22,1),transform 1s cubic-bezier(.19,1,.22,1);will-change:opacity,transform}.content-element[data-astro-cid-mvpdthgs].is-visible{opacity:1;transform:translateY(0)}\n"}],"routeData":{"route":"/[locale]/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"locale","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["locale","slug"],"component":"src/pages/[locale]/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CqFBnG9H.css"}],"routeData":{"route":"/[locale]/blog","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/blog\\/?$","segments":[[{"content":"locale","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":["locale"],"component":"src/pages/[locale]/blog/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CqFBnG9H.css"},{"type":"inline","content":".category-block[data-astro-cid-huocp4x6]{scroll-margin-top:100px}\n"}],"routeData":{"route":"/[locale]/faq","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/faq\\/?$","segments":[[{"content":"locale","dynamic":true,"spread":false}],[{"content":"faq","dynamic":false,"spread":false}]],"params":["locale"],"component":"src/pages/[locale]/faq.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.CqFBnG9H.css"}],"routeData":{"route":"/[locale]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"locale","dynamic":true,"spread":false}]],"params":["locale"],"component":"src/pages/[locale]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Desktop/Padel/src/pages/[locale]/faq.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Desktop/Padel/src/pages/[locale]/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/[locale]/blog/[slug]@_@astro":"pages/_locale_/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/[locale]/blog/index@_@astro":"pages/_locale_/blog.astro.mjs","\u0000@astro-page:src/pages/[locale]/faq@_@astro":"pages/_locale_/faq.astro.mjs","\u0000@astro-page:src/pages/[locale]/index@_@astro":"pages/_locale_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DxaTCaZJ.mjs","C:/Users/User/Desktop/Padel/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_X06-jjEL.mjs","C:/Users/User/Desktop/Padel/src/pages/[locale]/blog/[slug].astro?astro&type=script&index=0&lang.ts":"_astro/_slug_.astro_astro_type_script_index_0_lang.DTtgX1rJ.js","C:/Users/User/Desktop/Padel/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.Disub567.js","C:/Users/User/Desktop/Padel/src/components/FAQAccordion.astro?astro&type=script&index=0&lang.ts":"_astro/FAQAccordion.astro_astro_type_script_index_0_lang.adTTQP49.js","C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Bg4Z-lr4.js","C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=1&lang.ts":"_astro/Navbar.astro_astro_type_script_index_1_lang.wYYdQYnN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/User/Desktop/Padel/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"padel-cursor\");let y=-100,p=-100,a=-100,c=-100;document.addEventListener(\"mousemove\",e=>{y=e.clientX,p=e.clientY});function f(){a+=(y-a)*.18,c+=(p-c)*.18,o.style.transform=`translate(${a-18}px, ${c-18}px)`,requestAnimationFrame(f)}f();const B=document.querySelectorAll('nav a, header div.hidden.md\\\\:flex a[href*=\"/contact\"]');B.forEach(e=>{e.addEventListener(\"mouseenter\",()=>o.classList.add(\"cursor-hover\")),e.addEventListener(\"mouseleave\",()=>o.classList.remove(\"cursor-hover\"))});const L=document.querySelectorAll(\"iframe\");L.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{o.style.opacity=\"0\"}),e.addEventListener(\"mouseleave\",()=>{o.style.opacity=\"1\"})});const m=document.getElementById(\"scroll-progress\"),l=document.getElementById(\"main-scroll\"),s=document.getElementById(\"scroll-indicator\");let u=!1;l&&m&&l.addEventListener(\"scroll\",()=>{const{scrollTop:e,scrollHeight:n,clientHeight:r}=l,h=n===r?0:e/(n-r)*100;m.style.width=h+\"%\",!u&&e>40&&s&&(u=!0,s.style.transition=\"opacity 0.6s ease, transform 0.6s ease\",s.style.opacity=\"0\",s.style.transform=\"translateX(-50%) translateY(12px)\");const t=document.getElementById(\"footer-container\"),i=document.getElementById(\"footer-spacer\");if(t&&i){const d=t.offsetHeight;i.style.height=`${d}px`,t.style.transition=\"opacity 0.25s ease-out, transform 0.25s ease-out\";const v=e<=5,E=Math.ceil(e+r)>=n-2,g=document.body.dataset.hideFooterAtTop===\"true\";E||!g&&v?(t.style.opacity=\"1\",t.style.pointerEvents=\"auto\",t.style.transform=\"translateY(0)\"):(t.style.opacity=\"0\",t.style.pointerEvents=\"none\",t.style.transform=`translateY(${d}px)`)}},{passive:!0});"],["C:/Users/User/Desktop/Padel/src/components/FAQAccordion.astro?astro&type=script&index=0&lang.ts","function n(){document.querySelectorAll(\".faq-item\").forEach(t=>{const e=t.querySelector(\".faq-question\"),a=t.querySelector(\".faq-answer-container\"),r=t.querySelector(\".icon-vertical\");e?.addEventListener(\"click\",()=>{e.getAttribute(\"aria-expanded\")===\"true\"?(e.setAttribute(\"aria-expanded\",\"false\"),a.style.maxHeight=\"0\",r.style.transform=\"rotate(0deg)\"):(e.setAttribute(\"aria-expanded\",\"true\"),a.style.maxHeight=a.scrollHeight+\"px\",r.style.transform=\"rotate(90deg)\")})})}n();document.addEventListener(\"astro:page-load\",n);"],["C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const g=document.getElementById(\"about-dropdown-btn-desktop\"),t=document.getElementById(\"about-dropdown-menu-desktop\"),a=document.getElementById(\"main-header\"),E=document.getElementById(\"events-dropdown-btn-desktop\"),n=document.getElementById(\"events-dropdown-menu-desktop\");function d(){t&&(t.classList.add(\"opacity-0\",\"invisible\",\"translate-y-2\"),t.classList.remove(\"opacity-100\",\"visible\",\"translate-y-0\"))}function c(){n&&(n.classList.add(\"opacity-0\",\"invisible\",\"translate-y-2\"),n.classList.remove(\"opacity-100\",\"visible\",\"translate-y-0\"))}function l(){a&&a.classList.remove(\"pb-16\",\"md:pb-20\")}function I(){a&&a.classList.add(\"pb-16\",\"md:pb-20\")}g&&t&&g.addEventListener(\"click\",s=>{s.stopPropagation();const o=!t.classList.contains(\"invisible\");c(),o?(d(),l()):(t.classList.remove(\"opacity-0\",\"invisible\",\"translate-y-2\"),t.classList.add(\"opacity-100\",\"visible\",\"translate-y-0\"),I())});E&&n&&E.addEventListener(\"click\",s=>{s.stopPropagation();const o=!n.classList.contains(\"invisible\");d(),o?(c(),l()):(n.classList.remove(\"opacity-0\",\"invisible\",\"translate-y-2\"),n.classList.add(\"opacity-100\",\"visible\",\"translate-y-0\"),I())});document.addEventListener(\"click\",()=>{d(),c(),l()});const L=document.getElementById(\"about-dropdown-btn-mobile\"),B=document.getElementById(\"about-dropdown-menu-mobile\");L&&B&&L.addEventListener(\"click\",()=>{B.classList.toggle(\"hidden\")});const h=document.getElementById(\"events-dropdown-btn-mobile\"),k=document.getElementById(\"events-dropdown-menu-mobile\");h&&k&&h.addEventListener(\"click\",()=>{k.classList.toggle(\"hidden\")});document.querySelectorAll('a[href*=\"#\"]').forEach(s=>{s.addEventListener(\"click\",function(o){const i=new URL(s.href);if(i.pathname===window.location.pathname&&i.hash&&document.getElementById(i.hash.substring(1))){const w=i.hash.substring(1),p=document.getElementById(w);if(p){o.preventDefault(),d(),c(),l();const m=document.getElementById(\"mobile-menu\");m&&!m.classList.contains(\"hidden\")&&m.classList.add(\"hidden\");const r=document.getElementById(\"main-scroll\");if(r){let M=function(e){return 1- --e*e*e*e},b=function(e){u===null&&(u=e);const f=e-u,P=Math.min(f/y,1);r.scrollTop=v+A*M(P),f<y&&requestAnimationFrame(b)};const D=p.offsetTop,v=r.scrollTop,A=D-v,y=800;let u=null;requestAnimationFrame(b)}}}})});"],["C:/Users/User/Desktop/Padel/src/components/Navbar.astro?astro&type=script&index=1&lang.ts","const e=document.querySelector(\".mobile-menu-btn\"),n=document.getElementById(\"mobile-menu\");e&&n&&e.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\")});"]],"assets":["/_astro/_slug_.CqFBnG9H.css","/favicon.ico","/favicon.svg","/padel-ball.png","/docs/terms_en.pdf","/docs/terms_ka.pdf","/fonts/bpg_nino_mtavruli_bold-50137711009.otf","/fonts/bpg_nino_mtavruli_book-50137711009.otf","/fonts/bpg_nino_mtavruli_normal-50137711009.otf","/images/hero-bg.png","/images/logo-red.png","/_astro/_slug_.astro_astro_type_script_index_0_lang.DTtgX1rJ.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"nGJM6iwFTNpX+ElkxUT3ykLJqZGy5xPsFBOfIjlwK8M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
