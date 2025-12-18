import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui";

export default function EmployerDashboardPreview() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Employer dashboard (preview)</h1>
              <p className="mt-2 max-w-2xl text-slate-300">
                Ranked candidates powered by real endorsements. (UI preview — connect backend later.)
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
              Role: Marketing Lead
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <DashboardCard label="Applicants" value="128" />
            <DashboardCard label="Vowched profiles" value="42" />
            <DashboardCard label="Shortlisted" value="9" />
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 p-4 text-sm font-bold">Top candidates</div>

            <div className="divide-y divide-white/10">
              <Row name="Jordan Avery" score="92" tags="3 pinned Vowches • employer-only sources" />
              <Row name="Taylor Brooks" score="89" tags="2 pinned Vowches • manual verified" />
              <Row name="Casey Morgan" score="84" tags="1 pinned Vowch • privacy: employer-only" />
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Candidates do not see who endorsed them for a specific job. Recruiters/HR can see sources and context.
            AI-generated Vowches are not allowed.
          </p>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

function DashboardCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="text-xs font-semibold text-slate-400">{label}</div>
      <div className="mt-2 text-3xl font-extrabold">{value}</div>
    </div>
  );
}

function Row({ name, score, tags }: { name: string; score: string; tags: string }) {
  return (
    <div className="flex items-center justify-between gap-3 p-4">
      <div>
        <div className="text-sm font-extrabold">{name}</div>
        <div className="text-xs text-slate-400">{tags}</div>
      </div>
      <button
        className="rounded-xl bg-vowch-500 px-4 py-2 text-sm font-extrabold text-ink-950 hover:brightness-110"
        onClick={() => alert("Preview only. Add invite/interview actions later.")}
      >
        Invite
      </button>
      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold">
        {score}
      </div>
    </div>
  );
}
