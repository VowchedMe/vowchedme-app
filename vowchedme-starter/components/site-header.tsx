import { Container } from "./ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/65 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-vowch-500 shadow-glow" />
            <span className="font-semibold tracking-tight">VowchedMe</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-300 md:flex">
            <a className="hover:text-white" href="/#how">How it works</a>
            <a className="hover:text-white" href="/job-seekers">Job Seekers</a>
            <a className="hover:text-white" href="/employers">Employers</a>
            <a className="hover:text-white" href="/pricing">Pricing</a>
            <a className="hover:text-white" href="/faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/auth/sign-in"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10"
            >
              Sign in
            </a>
            <a
              href="/auth/sign-up"
              className="rounded-xl bg-vowch-500 px-4 py-2 text-sm font-bold text-ink-950 hover:brightness-110"
            >
              Join beta
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
