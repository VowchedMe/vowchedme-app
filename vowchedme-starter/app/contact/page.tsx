import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Partnerships, employers, beta support — hit us.
          </p>

          <form className="mt-8 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6">
            <label className="text-xs font-semibold text-slate-300">Name</label>
            <input className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none focus:border-vowch-500" placeholder="Your name" />
            <label className="mt-4 text-xs font-semibold text-slate-300">Email</label>
            <input className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none focus:border-vowch-500" placeholder="you@company.com" type="email" />
            <label className="mt-4 text-xs font-semibold text-slate-300">Message</label>
            <textarea className="mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm outline-none focus:border-vowch-500" placeholder="How can we help?" rows={5} />
            <button
              className="mt-4 rounded-xl bg-vowch-500 px-5 py-3 text-sm font-extrabold text-ink-950 hover:brightness-110"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("UI only. Hook this to your email/CRM later.");
              }}
            >
              Send message
            </button>
            <p className="mt-3 text-xs text-slate-400">
              Reminder: AI-generated Vowches are not allowed. Manual review in beta.
            </p>
          </form>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
