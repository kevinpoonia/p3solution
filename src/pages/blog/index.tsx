import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const blogs = [
  {
    title: "Enterprise Online Reputation Management Platform",
    description:
      "How modern enterprises transform online reputation into a scalable competitive advantage.",
    slug: "/blog/enterprise-reputation-management",
  },
  {
    title: "How to Respond to Negative Reviews Like a Market Leader",
    description:
      "Turn negative feedback into trust, credibility, and long-term growth.",
    slug: "/blog/responding-to-negative-reviews",
  },
  {
    title: "AI Sentiment Analysis for Brand Reputation",
    description:
      "Understand customer emotion beyond star ratings using AI.",
    slug: "/blog/ai-sentiment-analysis-reputation",
  },
  {
    title: "Review Automation: Increase Positive Reviews Ethically",
    description:
      "Scale reviews without violating Google, G2, or Trustpilot policies.",
    slug: "/blog/review-automation-platform",
  },
  {
    title: "Employer Reputation Management and Business Growth",
    description:
      "Why Glassdoor and employer reviews influence hiring and trust.",
    slug: "/blog/employer-reputation-management",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 py-32 max-w-5xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Pcube Solution Blog
          </h1>
          <p className="text-white/60 text-lg">
            Insights on reputation management, AI, reviews, and brand trust.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="glass border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {blog.title}
              </h2>
              <p className="text-white/60 mb-4">{blog.description}</p>
              <Link href={blog.slug}>
                <a className="text-primary hover:underline">
                  Read article →
                </a>
              </Link>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
