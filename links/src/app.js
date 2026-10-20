// Evento de clique por cartão. Só envia algo se o Plausible ou o GA4 estiverem ativos em links.json.
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-track]");
  if (!el) return;
  const id = el.dataset.track;
  if (typeof window.plausible === "function") window.plausible("Clique", { props: { cartao: id } });
  if (typeof window.gtag === "function") window.gtag("event", "clique_cartao", { cartao: id });
});
