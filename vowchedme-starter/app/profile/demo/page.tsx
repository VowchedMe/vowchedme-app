import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container, Pill } from "@/components/ui";

export default function ProfileDemo() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-[1.2fr_.8fr] md:items-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white/10" />
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight">Jordan Avery</h1>
                  <p className="text-sm text-slate-300">Operations Lead • Houston, TX</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>Vowched score: 92</Pill>
                <Pill>Privacy: Employer-only sources</Pill>
                <Pill>Manual verified</Pill>
              </div>

              <p className="mt-4 text-sm text-slate-300">
                This is a demo profile showing <span className="text-slate-100 font-semibold">3 pinned Vowches</span>.
                Videos are selfie-style, reviewed manually, and AI-generated Vowches are not allowed.
              </p>

              <div className="mt-6 grid gap-4">
                <VowchCard title="Pinned Vowch #1" quote="“Showed up early, led the team, delivered results.”" />
                <VowchCard title="Pinned Vowch #2" quote="“High integrity. Consistent. Coachable.”" />
                <VowchCard title="Pinned Vowch #3" quote="“Strong communicator — gets buy-in and executes.”" />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-extrabold">Share link</h2>
              <p className="mt-2 text-sm text-slate-300">
                Put this on your resume and applications.
              </p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-ink-950/60 p-4 text-sm text-slate-200">
                vowchedme.com/jordan-avery
              </div>
              <button
                className="mt-3 w-full rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
                onClick={() => alert("Copy action coming next.")}
              >
                Copy link
              </button>

              <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900/40 p-4 text-xs text-slate-300">
                <div className="font-extrabold text-slate-100">Privacy & trust</div>
                <ul className="mt-2 list-disc pl-5 leading-relaxed">
                  <li>Endorsements can be public or employer-only.</li>
                  <li>Recruiters/HR can see who endorsed you for a job.</li>
                  <li>You cannot see endorsers tied to a specific job.</li>
                  <li>No AI-generated Vowches allowed.</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

function VowchCard({ title, quote }: { title: string; quote: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-extrabold">{title}</div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-300">
          selfie video
        </span>
      </div>
      <div className="mt-3 text-sm text-slate-300">{quote}</div>
      <div className="mt-4 h-44 rounded-2xl border border-white/10 bg-ink-950/60 grid place-items-center text-xs text-slate-500">
        Video preview placeholder
      </div>
    </div>
  );
}
