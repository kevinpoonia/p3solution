import { useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { loadTawk } from "@/lib/tawk";
import { loadCalendly } from "@/lib/calendly";


export default function App() {
  useEffect(() => {
    if (import.meta.env.PROD) {
      loadTawk();
      loadCalendly();
    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
