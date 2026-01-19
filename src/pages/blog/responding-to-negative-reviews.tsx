import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RespondingToNegativeReviews() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <article className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              How to Respond to Negative Reviews Like a Market Leader
            </h1>
            <p className="text-white/60 text-lg">
              Turn negative feedback into trust, credibility, and long-term growth.
            </p>
          </header>

          <section className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Negative reviews are unavoidable for growing businesses. What matters most is how a brand
              responds publicly and consistently across platforms.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Why Responses Matter
            </h2>

            <p>
              Prospective customers evaluate responses more than complaints. Silence suggests
              indifference, while thoughtful replies build confidence.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Best Practices for Handling Negative Reviews
            </h2>

            <p>
              Acknowledge the issue, remain calm, and avoid defensive language. Move conversations
              offline when possible and document resolutions.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Scaling Responses with AI
            </h2>

            <p>
              AI-assisted tools help enterprises maintain consistent tone, faster response times, and
              policy compliance at scale.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
