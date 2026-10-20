# Página de links · Marco Túlio

Página do link da bio do Instagram (@mtuliobarbosa). Site estático, sem framework:
`links.json` → `node build.mjs` → `dist/` (`index.html` e `empresas/index.html`).

## Editar

Todo texto e link fica em **`links.json`**. Não precisa mexer no layout.

- Qualquer valor que comece com `[PREENCHER` aparece na página com um marcador amarelo e é listado no build.
- `node build.mjs --strict` faz o build falhar enquanto houver `[PREENCHER]` (use antes de publicar).
- Cartão de WhatsApp: use `"whatsappMessage"` no lugar de `"href"`. O número vem de `whatsappNumber`.
- Links das empresas recebem `utm_source=instagram&utm_medium=bio` automaticamente (`companiesPage.utm`).
- O build bloqueia: mais de 4 cartões, mais de um `"highlight": true` e cartão sem título.
- Cores: variáveis CSS no topo de `src/style.css` (paleta oficial da The Seller).

## Fotos

```bash
pip install "rembg[cpu]" pillow
python tools/prepare-photos.py --topo ~/foto.jpg --avatar ~/avatar.jpg
node build.mjs
```

Gera `src/assets/foto-topo.png/.webp` (sem fundo), `avatar.png/.webp` e `og.jpg`.
Confira o recorte (cabelo e ombros) antes de publicar. Logos das empresas: `src/assets/logos/` (veja o LEIA-ME).

## Ver localmente

```bash
node build.mjs && npx serve dist   # ou: python3 -m http.server -d dist
```

## Analytics (desligado por padrão)

Em `links.json → analytics`: `"provider": "plausible"` + `plausibleDomain`, ou `"provider": "ga4"` + `ga4Id`.
Cada clique em cartão/ícone envia o evento `Clique` (Plausible, propriedade `cartao`) ou `clique_cartao` (GA4).

## Publicar

**Vercel:** New Project → importe este repositório → *Root Directory* = `links` (o `vercel.json` já define build e saída)
→ Deploy. Domínio: Settings → Domains → `links.marcotulio.com.br` e crie no DNS um `CNAME links → cname.vercel-dns.com`.

**Netlify:** Add new site → Import from Git → *Base directory* = `links` (o `netlify.toml` já define o resto)
→ Deploy. Domínio: Domain management → Add domain → `links.marcotulio.com.br` e crie no DNS um
`CNAME links → <seu-site>.netlify.app`.

Os dois emitem HTTPS automaticamente. Depois, preencha `site.url` no `links.json` com o domínio final
(o Open Graph precisa do endereço absoluto da imagem).

**Trocar um link depois:** edite `links.json` (pelo próprio GitHub, no navegador, serve), faça o commit
e a Vercel/Netlify publica sozinha em ~1 minuto.
