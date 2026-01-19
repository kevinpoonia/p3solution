export function loadCalendly() {
  if (typeof window === "undefined") return;

  if (document.getElementById("calendly-script")) return;

  const script = document.createElement("script");
  script.id = "calendly-script";
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;

  document.body.appendChild(script);
}
