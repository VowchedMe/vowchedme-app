import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container, Pill } from "@/components/ui";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">Join the beta</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Get early access to VowchedMe. Credibility shouldn’t be invisible.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Dark UI</Pill>
            <Pill>Manual review</Pill>
            <Pill>User-controlled privacy</Pill>
            <Pill>No AI Vowches</Pill>
          </div>

          <form className="mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6">
            <label className="text-xs font-semibold text-slate-300">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-vowch-500"
              placeholder="you@company.com"
              type="email"
              required
            />
            <label className="mt-4 text-xs font-semibold text-slate-300">I’m joining as</label>
            <select className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none focus:border-vowch-500">
              <option>Job seeker</option>
              <option>Employer</option>
              <option>Both</option>
            </select>

            <button
              className="mt-4 rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Saved! Connect this to your database/email tool next.");
              }}
            >
              Join beta
            </button>

            <p className="mt-3 text-xs text-slate-400">
              AI Vowch uploads are not allowed. Vowches are reviewed manually in beta.
            </p>
          </form>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
