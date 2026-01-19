import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EnterpriseReputationManagementBlog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <article className="space-y-10">

          <header>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Enterprise Online Reputation Management – How Smart Brands Dominate Trust, Visibility, and Growth
            </h1>
            <p className="text-white/60 text-lg">
              Learn how enterprises transform online reputation into a scalable competitive advantage using AI-powered reputation management.
            </p>
          </header>

          <section className="space-y-6 text-white/80 leading-relaxed">
            <p>
              In today’s hyper-connected digital economy, brand reputation is shaped less by advertising
              and more by what customers, employees, and partners say online. A single negative review
              on Google, Glassdoor, or Trustpilot can influence thousands of buying and hiring decisions.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Why Enterprise Reputation Management Matters
            </h2>

            <p>
              Large enterprises receive feedback across multiple platforms including Google Reviews,
              Trustpilot, G2, Glassdoor, Reddit, and industry communities. Managing these channels
              individually creates operational chaos and delayed responses.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Centralized AI-Powered Reputation Intelligence
            </h2>

            <p>
              A centralized enterprise reputation management platform consolidates all feedback into a
              single intelligent dashboard. AI-powered sentiment analysis detects emotional signals,
              identifies emerging risks, and enables leadership teams to act proactively.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Reputation as a Competitive Advantage
            </h2>

            <p>
              Organizations that actively manage reputation experience higher ratings, improved hiring
              outcomes, stronger customer loyalty, and measurable revenue growth. Reputation shifts
              from a fragile risk into a strategic asset.
            </p>
          </section>

          <section className="pt-10 border-t border-white/10">
            <p className="text-white/70">
              Want to see how enterprises automate reputation management at scale?
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Request an Enterprise Demo →
            </a>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
