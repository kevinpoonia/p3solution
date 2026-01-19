import { useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { loadTawk } from "@/lib/tawk";


export default function App() {
  useEffect(() => {
    if (import.meta.env.PROD) {
      loadChatbase();
    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
