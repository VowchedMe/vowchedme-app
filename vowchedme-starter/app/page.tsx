import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui";

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <h1 className="text-2xl font-extrabold tracking-tight">Sign in</h1>
            <p className="mt-2 text-sm text-slate-300">
              Welcome back. (Auth hookup coming next.)
            </p>

            <form className="mt-6 grid gap-3">
              <label className="text-xs font-semibold text-slate-300">Email</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="you@company.com"
                type="email"
                required
              />

              <label className="mt-2 text-xs font-semibold text-slate-300">Password</label>
              <input
                className="w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="••••••••"
                type="password"
                required
              />

              <button
                className="mt-3 rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
                type="button"
              >
                Sign in
              </button>

              <a
                className="mt-2 text-sm font-bold text-vowch-500 hover:brightness-110"
                href="/auth/sign-up"
              >
                Don’t have an account? Join beta →
              </a>
            </form>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
