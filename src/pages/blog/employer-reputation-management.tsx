import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EmployerReputationManagement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <article className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Employer Reputation Management and Business Growth
            </h1>
            <p className="text-white/60 text-lg">
              Why employer reviews influence hiring, trust, and long-term success.
            </p>
          </header>

          <section className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Platforms like Glassdoor shape how talent perceives your company. Employer reputation
              directly impacts recruitment, retention, and brand trust.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              The Cost of Poor Employer Reputation
            </h2>
            <p>
              Negative employee sentiment reduces applicant quality and increases hiring costs.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Building Trust with Transparency
            </h2>
            <p>
              Consistent engagement, honest responses, and sentiment monitoring help organizations
              improve employer branding.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

