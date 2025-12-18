import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container, Card } from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">For Employers</h1>
          <p className="mt-2 max-w-2xl text-slate-300">Post a job, see top-endorsed candidates, and interview faster with confidence.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card title="Built for trust" body="Real people. Real video. Manual review." />
            <Card title="Privacy-first" body="Public or employer-only — your choice." />
            <Card title="No AI Vowches" body="AI-generated endorsements are not allowed." />
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
