// Gera o site estático em dist/ a partir de links.json. Sem dependências: `node build.mjs`.
// Use `node build.mjs --strict` para falhar o build se ainda houver [PREENCHER].
// Use `--file-links` para links internos com index.html explícito (abrir o arquivo direto no navegador).
import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync, existsSync } from "node:fs";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { icons } from "./src/icons.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const INDEX = process.argv.includes("--file-links") ? "index.html" : "";
const cfg = JSON.parse(readFileSync(join(ROOT, "links.json"), "utf8"));
const css = readFileSync(join(SRC, "fonts.css"), "utf8") + readFileSync(join(SRC, "style.css"), "utf8");
const js = readFileSync(join(SRC, "app.js"), "utf8");

const pending = [];
const isPending = (v) => typeof v !== "string" || v.trim() === "" || /^\[PREENCHER/i.test(v.trim());
const flag = (where, value) => { pending.push(`${where}: ${value ?? "(vazio)"}`); return true; };

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const asset = (p) => existsSync(join(SRC, p));
const withScheme = (u) => (/^[a-z]+:/i.test(u) ? u : `https://${u.replace(/^\/+/, "")}`);
const addUtm = (u, utm) => (utm ? `${u}${u.includes("?") ? "&" : "?"}${utm}` : u);
const icon = (name) => icons[name] ?? icons.chevron;
const pendingTag = (text = "PREENCHER") => `<span class="pending-tag">${esc(text)}</span>`;

const waNumber = isPending(cfg.whatsappNumber) ? null : cfg.whatsappNumber.replace(/\D/g, "");
const waLink = (msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

// Resolve o destino de um cartão. Retorna { href, external } ou null se estiver pendente.
function resolve(item, where, base, utm) {
  if (item.page) return { href: `${base}${item.page}/${INDEX}`, external: false };
  if (item.whatsappMessage !== undefined) {
    if (!waNumber) return flag(`${where} → whatsappNumber`, cfg.whatsappNumber) && null;
    return { href: waLink(item.whatsappMessage), external: true };
  }
  if (isPending(item.href)) return flag(where, item.href) && null;
  return { href: addUtm(withScheme(item.href.trim()), utm), external: true };
}

const linkAttrs = (dest, track) =>
  `href="${esc(dest.href)}"${dest.external ? ' target="_blank" rel="noopener"' : ""} data-track="${esc(track)}"`;

function card({ id, title, subtitle, iconHTML, iconClass = "", highlight, dest }) {
  const cls = `card${highlight ? " card--highlight" : ""}${dest ? "" : " is-pending"}`;
  const ext = dest?.external ? '<span class="sr-only"> (abre em nova aba)</span>' : "";
  const inner = `
      <span class="card__icon${iconClass}">${iconHTML}</span>
      <span class="card__text">
        <span class="card__title">${esc(title)}${ext}</span>
        <span class="card__sub">${esc(subtitle)}</span>${dest ? "" : `\n        ${pendingTag("PREENCHER: link")}`}
      </span>
      <span class="card__chev">${icons.chevron}</span>`;
  const el = dest
    ? `<a class="${cls}" ${linkAttrs(dest, id)}>${inner}\n    </a>`
    : `<div class="${cls}" aria-disabled="true">${inner}\n    </div>`;
  // o CTA fica dentro de uma moldura com a luz girando na borda (como em theseller.com.br/links)
  return `  <li${highlight ? ' class="cta-wrap"' : ""}>\n    ${el}\n  </li>`;
}

function picture(path, alt, attrs, prefix = "") {
  const webp = path.replace(/\.(png|jpe?g)$/i, ".webp");
  // variante menor opcional (<nome>-600.webp) para telas de celular
  const small = webp.replace(/\.webp$/, "-600.webp");
  const set = asset(small) ? `${esc(prefix + small)} 600w, ${esc(prefix + webp)} 857w` : esc(prefix + webp);
  const sizes = asset(small) ? ' sizes="(max-width: 560px) 80vw, 340px"' : "";
  const source = webp !== path && asset(webp) ? `<source srcset="${set}"${sizes} type="image/webp">` : "";
  return `<picture>${source}<img src="${esc(prefix + path)}" alt="${esc(alt)}" ${attrs}></picture>`;
}

const nameHTML = (p, tag) =>
  `<${tag} class="name">${esc(p.name)}${p.verified ? `${icons.verified}<span class="sr-only">Perfil verificado</span>` : ""}</${tag}>`;

// Silhueta provisória enquanto a foto recortada não existe.
const SILHOUETTE = `<svg class="hero__placeholder" viewBox="0 0 300 300" fill="currentColor" aria-hidden="true"><circle cx="150" cy="105" r="58"/><path d="M30 300c4-70 54-118 120-118s116 48 120 118Z"/></svg>`;

// Retrato grande no topo, fundindo no fundo da página.
function portrait(p) {
  if (asset(p.heroImage)) {
    const img = picture(p.heroImage, p.heroAlt, 'width="857" height="1200" fetchpriority="high" decoding="async"');
    return `<div class="hero__photo">${img}</div>`;
  }
  flag("profile.heroImage (arquivo não encontrado)", `src/${p.heroImage}`);
  return `<div class="hero__photo">${SILHOUETTE}${pendingTag("PREENCHER: foto recortada")}</div>`;
}

function social(list) {
  const items = list.map((s) => {
    if (isPending(s.href)) {
      flag(`social.${s.id}`, s.href);
      return `  <li><span class="is-pending" role="img" aria-label="${esc(s.label)} (link pendente)" title="PREENCHER">${icon(s.icon)}</span></li>`;
    }
    return `  <li><a href="${esc(withScheme(s.href))}" target="_blank" rel="noopener" aria-label="${esc(s.label)} (abre em nova aba)" data-track="social-${esc(s.id)}">${icon(s.icon)}</a></li>`;
  });
  return `<ul class="social" aria-label="Redes sociais">\n${items.join("\n")}\n</ul>`;
}

function analytics(a = {}) {
  if (a.provider === "plausible" && a.plausibleDomain) {
    return `<script defer data-domain="${esc(a.plausibleDomain)}" src="https://plausible.io/js/script.js"></script>
<script>window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}</script>`;
  }
  if (a.provider === "ga4" && a.ga4Id) {
    return `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(a.ga4Id)}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config",${JSON.stringify(a.ga4Id)});</script>`;
  }
  return "<!-- analytics desativado: veja links.json → analytics -->";
}

function layout({ title, prefix, body, path }) {
  const s = cfg.site;
  const siteUrl = isPending(s.url) ? "" : s.url.replace(/\/+$/, "");
  const og = siteUrl ? `${siteUrl}/${s.ogImage}` : `${prefix}${s.ogImage}`;
  return `<!doctype html>
<html lang="${esc(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(s.description)}">
<meta name="theme-color" content="#0F1620">
<meta name="color-scheme" content="dark">
${siteUrl ? `<link rel="canonical" href="${esc(siteUrl + path)}">\n` : ""}<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${esc(s.title)}">
<meta property="og:description" content="${esc(s.description)}">
<meta property="og:image" content="${esc(og)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
${siteUrl ? `<meta property="og:url" content="${esc(siteUrl + path)}">\n` : ""}<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${prefix}favicon.svg" type="image/svg+xml">
<link rel="icon" href="${prefix}favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${prefix}apple-touch-icon.png">
<link rel="preload" href="${prefix}fonts/poppins-700.woff2" as="font" type="font/woff2" crossorigin>
<style>
${css.replaceAll("url(fonts/", `url(${prefix}fonts/`)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
</style>
${analytics(cfg.analytics)}
</head>
<body>
<div class="bg" aria-hidden="true"><span class="blob blob--1"></span><span class="blob blob--2"></span><span class="blob blob--3"></span></div>
<div class="page${prefix ? " page--sub" : ""}">
${body}
<footer class="footer">
${social(cfg.social)}
<p class="footer__copy">${esc(cfg.footer)}</p>
</footer>
</div>
<script>
${js}</script>
</body>
</html>
`;
}

// ---------- Página principal ----------
const p = cfg.profile;
if (cfg.cards.length > 4) throw new Error("No máximo 4 cartões na página principal.");
if (cfg.cards.filter((c) => c.highlight).length > 1) throw new Error("Só um cartão pode ter \"highlight\": true.");
for (const c of cfg.cards) if (!c.title?.trim()) throw new Error(`Cartão "${c.id}" está sem título.`);

const mainCards = cfg.cards.map((c) =>
  card({ id: c.id, title: c.title, subtitle: c.subtitle, iconHTML: icon(c.icon), highlight: c.highlight, dest: resolve(c, `cards.${c.id}`, "") }),
);

const home = layout({
  title: cfg.site.title,
  prefix: "",
  path: "/",
  body: `<header class="hero">
${portrait(p)}
<div class="hero__id">
${nameHTML(p, "h1")}
<p class="subtitle">${esc(p.subtitle)}</p>
<p class="bio">${esc(p.bio)}</p>
</div>
</header>
<main>
<ul class="cards">
${mainCards.join("\n")}
</ul>
</main>`,
});

// ---------- Subpágina /empresas ----------
const cp = cfg.companiesPage;
const companyCards = cp.companies.map((c) => {
  const logo = c.logo && asset(c.logo);
  return card({
    id: `empresa-${c.id}`,
    title: c.name,
    subtitle: c.subtitle,
    iconHTML: logo ? `<img src="../${esc(c.logo)}" alt="" width="40" height="40" loading="lazy" decoding="async">` : `<span aria-hidden="true">${esc(c.name[0])}</span>`,
    iconClass: logo ? " card__icon--logo" : " card__icon--initial",
    dest: resolve(c, `companiesPage.${c.id}`, "../", cp.utm),
  });
});

const empresas = layout({
  title: `${cp.title} · ${cfg.site.title}`,
  prefix: "../",
  path: "/empresas/",
  body: `<header class="topbar">
<a class="back" href="../${INDEX}" aria-label="Voltar para a página inicial" data-track="voltar">${icons.back}</a>
${nameHTML(p, "p")}
</header>
<main>
<h1 class="section-title">${esc(cp.title)}</h1>
<ul class="cards">
${companyCards.join("\n")}
</ul>
</main>`,
});

// ---------- Saída ----------
rmSync(DIST, { recursive: true, force: true });
mkdirSync(join(DIST, "empresas"), { recursive: true });
cpSync(join(SRC, "fonts"), join(DIST, "fonts"), { recursive: true });
cpSync(join(SRC, "assets"), join(DIST, "assets"), { recursive: true, filter: (f) => ![".md", ".json"].includes(extname(f)) });
for (const f of ["favicon.svg", "favicon-32.png", "apple-touch-icon.png"]) cpSync(join(SRC, f), join(DIST, f));
writeFileSync(join(DIST, "index.html"), home);
writeFileSync(join(DIST, "empresas", "index.html"), empresas);
if (isPending(cfg.site.url)) flag("site.url (Open Graph precisa do domínio final)", cfg.site.url);

const unique = [...new Set(pending)];
console.log(`✓ dist/ gerado (index.html, empresas/index.html)`);
if (unique.length) {
  console.log(`\n⚠ ${unique.length} item(ns) com [PREENCHER]:`);
  for (const u of unique) console.log(`  - ${u}`);
  if (process.argv.includes("--strict")) process.exit(1);
}
