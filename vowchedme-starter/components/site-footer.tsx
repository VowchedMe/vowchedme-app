import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-400">
            <div className="font-semibold text-slate-200">VowchedMe</div>
            <div className="mt-1 max-w-md">
              A video-powered reputation platform where real people verify your credibility.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <a className="hover:text-white" href="/about">About</a>
            <a className="hover:text-white" href="/contact">Contact</a>
            <a className="hover:text-white" href="/waitlist">Waitlist</a>
            <a className="hover:text-white" href="/faq">FAQ</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} VowchedMe. No AI-generated Vowches allowed.
        </div>
      </Container>
    </footer>
  );
}
