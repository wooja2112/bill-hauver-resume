import { profile } from "@/lib/resume";
import StatusDot from "./StatusDot";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="container-page flex flex-col gap-14 py-20 sm:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <StatusDot />
            <p className="eyebrow text-muted-on-dark">Status: open to opportunities</p>
          </div>

          <h2 className="max-w-xl text-balance font-display text-3xl font-extrabold leading-[1.05] sm:text-4xl md:text-[3.25rem]">
            Let&rsquo;s talk about your next infrastructure or DevOps transformation.
          </h2>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={profile.emailHref}
              className="w-fit rounded-sm bg-signal-bright px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <a
              href={profile.phoneHref}
              className="font-mono text-sm text-muted-on-dark transition-colors hover:text-paper"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-[0.08em] text-muted-on-dark transition-colors hover:text-paper"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="hairline-dark" />

        <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.06em] text-muted-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name} &middot; {profile.location}
          </p>
          <p>Senior IT Leader &mdash; DevOps / Cloud / Architecture</p>
        </div>
      </div>
    </footer>
  );
}
