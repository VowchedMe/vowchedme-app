import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VowchedMe — You’re not just qualified. You’re Vowched.",
  description:
    "A video-powered reputation platform where real people verify your credibility — so hiring decisions go beyond resumes.",
  metadataBase: new URL("https://vowchedme.com"),
  openGraph: {
    title: "VowchedMe",
    description:
      "A video-powered reputation platform where real people verify your credibility — so hiring decisions go beyond resumes.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
