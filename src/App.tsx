import { useEffect } from "react";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import { loadTawk } from "@/lib/tawk";
import { loadCalendly } from "@/lib/calendly";
import EnterpriseReputationManagementBlog from "@/pages/blog/enterprise-reputation-management";
import RespondingToNegativeReviews from "@/pages/blog/responding-to-negative-reviews";
import AISentimentAnalysis from "@/pages/blog/ai-sentiment-analysis-reputation";
import ReviewAutomation from "@/pages/blog/review-automation-platform";
import EmployerReputation from "@/pages/blog/employer-reputation-management";
import BlogIndex from "@/pages/blog";


export default function App() {
  useEffect(() => {
    loadCalendly();
  }, []);
  useEffect(() => {
    if (import.meta.env.PROD) {
      loadTawk();

    }
  }, []);
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={BlogIndex} />
    <Route path="/blog/enterprise-reputation-management" component={EnterpriseReputationManagementBlog} />
<Route path="/blog/responding-to-negative-reviews" component={RespondingToNegativeReviews} />
<Route path="/blog/ai-sentiment-analysis-reputation" component={AISentimentAnalysis} />
<Route path="/blog/review-automation-platform" component={ReviewAutomation} />
<Route path="/blog/employer-reputation-management" component={EmployerReputation} />

      <Route component={NotFound} />

    </Switch>
  );
}
