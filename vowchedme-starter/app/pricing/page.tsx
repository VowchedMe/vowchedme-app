import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="py-14">
        <Container>
          <h1 className="text-3xl font-extrabold tracking-tight">Pricing</h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Launch-friendly pricing. Scale later.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Tier
              name="Beta"
              price="$0"
              desc="Get early access and build your profile."
              items={[
                "Profile + share link",
                "Request endorsements",
                "Privacy controls",
                "Manual review",
              ]}
              cta="Join beta"
              href="/auth/sign-up"
              highlight
            />
            <Tier
              name="Pro (coming)"
              price="$TBD"
              desc="More signal and customization for job seekers."
              items={[
                "More pinned Vowches",
                "Enhanced profile modules",
                "Advanced privacy settings",
              ]}
              cta="Join waitlist"
              href="/waitlist"
            />
            <Tier
              name="Employer (coming)"
              price="$TBD"
              desc="Ranked candidates and fast hiring workflows."
              items={[
                "Role dashboards",
                "Shortlisting + invites",
                "Team access",
                "Verification controls",
              ]}
              cta="Book demo"
              href="/waitlist"
            />
          </div>

          <p className="mt-6 text-xs text-slate-400">
            AI-generated Vowches are not allowed. All Vowches are manually reviewed in beta.
          </p>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}

function Tier({
  name,
  price,
  desc,
  items,
  cta,
  href,
  highlight,
}: {
  name: string;
  price: string;
  desc: string;
  items: string[];
  cta: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-3xl border ${highlight ? "border-vowch-500/40 bg-white/5 shadow-glow" : "border-white/10 bg-white/5"} p-6`}>
      <div className="text-sm font-extrabold">{name}</div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight">{price}</div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
      <ul className="mt-4 list-disc pl-5 text-sm text-slate-300 leading-relaxed">
        {items.map((x) => <li key={x}>{x}</li>)}
      </ul>
      <a
        href={href}
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold ${
          highlight ? "bg-vowch-500 text-ink-950 hover:brightness-110" : "border border-white/10 bg-white/5 hover:bg-white/10"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
