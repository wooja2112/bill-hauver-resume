import { profile } from "@/lib/resume";
import MobileNav, { type NavLink } from "./MobileNav";

const links: NavLink[] = [
  { href: "#profile", label: "Profile" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#contact", label: "Contact" },
  { href: profile.linkedinHref, label: "LinkedIn", external: true },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/75">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.08em] text-paper uppercase"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex lg:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-on-dark transition-colors hover:text-paper"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                {link.external ? (
                  <span className="sr-only"> (opens in a new tab)</span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <MobileNav links={links} />
          <a
            href={profile.emailHref}
            className="rounded-sm border border-signal-bright/50 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-signal-bright transition-colors hover:bg-signal-bright hover:text-ink"
          >
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
