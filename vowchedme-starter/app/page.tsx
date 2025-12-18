import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button, Card, Container, Pill } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ProductPreview />
        <BetaCTA />
      </main>

      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="pt-14 pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Video-powered reputation • Manual review • Privacy-first
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              You’re not just qualified.
              <span className="text-vowch-500"> You’re Vowched.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              VowchedMe is a video-powered reputation platform where{" "}
              <span className="text-slate-100 font-semibold">real people</span> verify your credibility —
              so hiring decisions go beyond resumes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/auth/sign-up">Join the beta</Button>
              <Button href="/waitlist" variant="ghost">Get early access</Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Job seeker link</Pill>
              <Pill>Employer ranking</Pill>
              <Pill>No AI Vowches</Pill>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              *AI-generated endorsements are not allowed. Every Vowch is manually reviewed.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="grid gap-3">
              <Card
                title="Job Seeker Profile"
                body="A clean page recruiters can scan in under 60 seconds."
                footer="3 pinned Vowches • Role fit • Proof"
              />
              <Card
                title="Employer Dashboard"
                body="See top-endorsed candidates for your job — without guesswork."
                footer="Ranked signals • Filters • Shortlist"
              />
              <Card
                title="Endorser Flow"
                body="Fast selfie video + written note, reviewed for trust and authenticity."
                footer="Manual review • Anti-AI policy • Privacy controls"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="pb-10">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
          <div className="grid gap-6 md:grid-cols-4">
            <TrustStat k="Get hired faster" v="Credibility becomes visible" />
            <TrustStat k="Hire quality" v="Real voices, real context" />
            <TrustStat k="User-controlled privacy" v="Public or employer-only" />
            <TrustStat k="Manual verification" v="No AI Vowches allowed" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-sm font-bold">{k}</div>
      <div className="mt-1 text-xs text-slate-300">{v}</div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-12">
      <Container>
        <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Built for both sides of hiring — because trust requires both sides.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-extrabold">For Job Seekers</h3>
            <ol className="mt-4 grid gap-3 text-sm text-slate-300">
              <li><span className="font-semibold text-slate-100">1)</span> Create your profile</li>
              <li><span className="font-semibold text-slate-100">2)</span> Request endorsements (video + written)</li>
              <li><span className="font-semibold text-slate-100">3)</span> Share your Vowched link on applications</li>
            </ol>
            <p className="mt-4 text-xs text-slate-400">
              Endorsers record selfie-style videos. Manual review keeps it real.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-extrabold">For Employers</h3>
            <ol className="mt-4 grid gap-3 text-sm text-slate-300">
              <li><span className="font-semibold text-slate-100">1)</span> Post a job</li>
              <li><span className="font-semibold text-slate-100">2)</span> See top-endorsed candidates</li>
              <li><span className="font-semibold text-slate-100">3)</span> Invite & interview faster</li>
            </ol>
            <p className="mt-4 text-xs text-slate-400">
              Candidates can’t see who endorsed them for a job — only recruiters/HR can.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductPreview() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold">Sample Profile</h3>
              <a className="text-sm font-bold text-vowch-500 hover:brightness-110" href="/profile/demo">
                View demo →
              </a>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Profile with <span className="text-slate-100 font-semibold">3 pinned Vowches</span> to show credibility fast.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900/40 p-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-white/10" />
                <div>
                  <div className="font-bold">Jordan Avery</div>
                  <div className="text-xs text-slate-400">Operations Lead • Houston, TX</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <PinnedVowch title="Pinned Vowch #1" note="“Showed up early, led the team, delivered results.”" />
                <PinnedVowch title="Pinned Vowch #2" note="“High integrity. Consistent. Coachable.”" />
                <PinnedVowch title="Pinned Vowch #3" note="“Strong communicator — gets buy-in and executes.”" />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold">Sample Employer View</h3>
              <a className="text-sm font-bold text-vowch-500 hover:brightness-110" href="/employers/dashboard">
                Preview →
              </a>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Candidates ranked by trusted endorsements, not just keyword matches.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900/40 p-4">
              <div className="text-xs text-slate-400">Role: Marketing Lead</div>
              <div className="mt-3 grid gap-3">
                <CandidateRow name="Jordan Avery" score="92" meta="3 pinned Vowches • Employer-only sources" />
                <CandidateRow name="Taylor Brooks" score="89" meta="2 pinned Vowches • Manual verified" />
                <CandidateRow name="Casey Morgan" score="84" meta="1 pinned Vowch • Privacy: employer-only" />
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Sources are visible to recruiters/HR only — candidates do not see endorsers tied to a job.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PinnedVowch({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">{title}</div>
        <span className="text-[10px] rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
          selfie video
        </span>
      </div>
      <div className="mt-2 text-sm text-slate-300">{note}</div>
    </div>
  );
}

function CandidateRow({ name, score, meta }: { name: string; score: string; meta: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div>
        <div className="text-sm font-bold">{name}</div>
        <div className="text-xs text-slate-400">{meta}</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold">
        {score}
      </div>
    </div>
  );
}

function BetaCTA() {
  return (
    <section className="py-14">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Join the VowchedMe beta
              </h2>
              <p className="mt-2 text-slate-300">
                Credibility shouldn’t be invisible. Build your reputation with real people and real proof.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                No AI Vowches. Manual review. User-controlled privacy.
              </p>
            </div>

            <form className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <label className="text-xs font-semibold text-slate-300">Email</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-vowch-500"
                placeholder="you@company.com"
                type="email"
                required
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="submit"
                  className="rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Saved! Hook this form to your backend/email tool when ready.");
                  }}
                >
                  Join beta
                </button>
                <a
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold hover:bg-white/10"
                  href="/auth/sign-up"
                >
                  Create account
                </a>
              </div>
              <p className="mt-3 text-[11px] text-slate-500">
                By joining, you agree to receive product updates. (Hook up your real policy later.)
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
