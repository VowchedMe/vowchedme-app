import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui";

const faqs = [
  {
    q: "Is VowchedMe a job board?",
    a: "No. VowchedMe is the trust layer that helps hiring decisions go beyond resumes.",
  },
  {
    q: "Can endorsements be public or employer-only?",
    a: "Yes. The user controls visibility per Vowch.",
  },
  {
    q: "Can candidates see who endorsed them for a job?",
    a: "No. Recruiters/HR can see sources for a job. Candidates cannot.",
  },
  {
    q: "Are AI-generated Vowches allowed?",
    a: "No. AI Vowch uploads are not allowed — credibility only counts when it’s real.",
  },
  {
    q: "How does verification work in beta?",
    a: "Manual review. Every Vowch is reviewed to protect trust and platform integrity.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">FAQ</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Quick answers. Built for clarity and trust.
          </p>

          <div className="mt-8 grid gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="cursor-pointer list-none text-sm font-extrabold">
                  {f.q}
                  <span className="float-right text-slate-400 group-open:rotate-180 transition">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Have more questions? Reach out on the Contact page.
          </p>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
