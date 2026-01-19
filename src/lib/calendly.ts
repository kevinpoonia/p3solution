export function loadCalendly(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();

    // Already loaded
    // @ts-ignore
    if (window.Calendly) return resolve();

    // Already injected but not ready
    if (document.getElementById("calendly-script")) {
      const check = setInterval(() => {
        // @ts-ignore
        if (window.Calendly) {
          clearInterval(check);
          resolve();
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => resolve();

    document.body.appendChild(script);
  });
}
