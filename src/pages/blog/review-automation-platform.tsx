import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ReviewAutomationPlatform() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <article className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Review Automation: Increase Positive Reviews Ethically
            </h1>
            <p className="text-white/60 text-lg">
              How automation helps businesses grow reviews without violating platform policies.
            </p>
          </header>

          <section className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Manual review collection is inconsistent and inefficient. Automation ensures timely,
              compliant, and scalable review growth.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Timing Is Everything
            </h2>
            <p>
              Automated triggers request reviews at moments of high customer satisfaction.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Compliance-First Automation
            </h2>
            <p>
              Ethical automation respects platform rules and avoids incentivized or fake reviews.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

