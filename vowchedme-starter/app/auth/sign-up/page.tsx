import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container, Pill } from "@/components/ui";

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <div className="flex flex-wrap gap-2">
              <Pill>Join beta</Pill>
              <Pill>Manual review</Pill>
              <Pill>No AI Vowches</Pill>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold tracking-tight">Create your account</h1>
            <p className="mt-2 text-sm text-slate-300">
              Start building credibility with real people.
            </p>

            <form className="mt-6 grid gap-3">
              <label className="text-xs font-semibold text-slate-300">Full name</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-vowch-500"
                placeholder="First Last"
                type="text"
                required
              />
              <label className="text-xs font-semibold text-slate-300">Email</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-vowch-500"
                placeholder="you@company.com"
                type="email"
                required
              />
              <label className="mt-2 text-xs font-semibold text-slate-300">Password</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-vowch-500"
                placeholder="Create a password"
                type="password"
                required
              />

              <div className="mt-2 rounded-2xl border border-white/10 bg-ink-900/40 p-4 text-xs text-slate-300">
                <div className="font-bold text-slate-100">Policy</div>
                <ul className="mt-2 list-disc pl-5 leading-relaxed text-slate-300">
                  <li>AI-generated Vowches are not allowed.</li>
                  <li>Vowches may be public or employer-only (you choose).</li>
                  <li>Recruiters/HR can see who endorsed you for a job; you cannot.</li>
                </ul>
              </div>

              <button
                className="mt-3 rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  alert("UI only. Plug in your auth + database next.");
                }}
              >
                Create account
              </button>

              <a className="mt-2 text-sm font-bold text-vowch-500 hover:brightness-110" href="/auth/sign-in">
                Already have an account? Sign in →
              </a>
            </form>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
