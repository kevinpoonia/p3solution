import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AISentimentAnalysis() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-4xl">
        <article className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              AI Sentiment Analysis for Brand Reputation
            </h1>
            <p className="text-white/60 text-lg">
              How artificial intelligence decodes customer emotion at scale.
            </p>
          </header>

          <section className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Sentiment analysis goes beyond star ratings by understanding the emotional tone behind
              customer feedback. AI enables businesses to detect trends instantly.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              How AI Interprets Sentiment
            </h2>
            <p>
              Natural language processing evaluates context, tone, and intent across reviews and social
              conversations.
            </p>

            <h2 className="text-2xl font-semibold text-white">
              Proactive Reputation Protection
            </h2>
            <p>
              Early detection of negative sentiment allows teams to respond before issues escalate.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

