export function loadTawk() {
  if (typeof window === "undefined") return;
  if ((window as any).Tawk_API) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://embed.tawk.to/696e28a2687ba6197fc027ed/1jfb4tf85";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
}
