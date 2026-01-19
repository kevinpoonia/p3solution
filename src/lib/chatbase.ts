export function loadChatbase() {
  if (typeof window === "undefined") return;

  // prevent double load
  if ((window as any).chatbaseLoaded) return;
  (window as any).chatbaseLoaded = true;

  (window as any).chatbaseConfig = {
    chatbotId: "BhvouEk2rOsAo0LAf1AXX",
  };

  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.async = true;
  script.defer = true;

  document.body.appendChild(script);
}
