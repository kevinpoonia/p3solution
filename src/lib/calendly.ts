export function loadCalendly(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();

    // If already loaded
    // @ts-ignore
    if (window.Calendly) return resolve();

    // Load CSS (THIS WAS MISSING)
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Load JS
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
}
