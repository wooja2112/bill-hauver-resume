import Image from "next/image";
import { metrics, profile } from "@/lib/resume";
import { assetPath } from "@/lib/site";
import StatusDot from "./StatusDot";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-paper"
      style={{
        backgroundImage:
          "linear-gradient(rgba(237,240,233,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(237,240,233,0.055) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--signal) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-page relative flex flex-col gap-14 py-24 sm:py-28 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <StatusDot />
              <p className="eyebrow text-muted-on-dark">
                {profile.title} &mdash; {profile.tagline}
              </p>
            </div>

            <h1 className="font-display text-[3.1rem] font-black uppercase leading-[0.96] tracking-[-0.01em] sm:text-[4.5rem] md:text-[5.75rem]">
              {profile.name}
            </h1>

            <p className="flex items-center gap-3">
              <img
                src={assetPath("/us-air-force-symbol.svg")}
                alt="U.S. Air Force"
                className="h-14 w-14 bg-paper p-1.5"
              />
              <span className="eyebrow text-paper">{profile.veteran}</span>
            </p>

            <p className="max-w-2xl text-balance text-[1.05rem] leading-relaxed text-muted-on-dark sm:text-lg">
              {profile.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={profile.emailHref}
                className="rounded-sm bg-signal-bright px-5 py-2.5 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={assetPath("/Bill-Hauver-Resume.pdf")}
                download="Bill-Hauver-Resume.pdf"
                className="rounded-sm border border-white/25 px-5 py-2.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-paper transition-colors hover:border-signal-bright hover:text-signal-bright"
              >
                Download résumé
              </a>
              <a
                href={profile.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-white/25 px-5 py-2.5 font-mono text-[0.78rem] uppercase tracking-[0.08em] text-paper transition-colors hover:border-signal-bright hover:text-signal-bright"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="font-mono text-[0.78rem] text-muted-on-dark">
                {profile.location}
                <span aria-hidden="true"> &middot; </span>
                <a href={profile.phoneHref} className="transition-colors hover:text-paper">
                  {profile.phone}
                </a>
              </span>
            </div>
          </div>

          <div className="relative order-first mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-sm border border-white/15 bg-ink-2 lg:order-none lg:mx-0 lg:max-w-none">
            <Image
              src={assetPath("/bill-hauver.jpg")}
              alt="Portrait of Bill Hauver"
              fill
              priority
              sizes="(min-width: 1024px) 380px, 60vw"
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-ink px-5 py-6 sm:px-6">
              <p className="font-display text-3xl font-extrabold tabular-nums sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-1.5 font-mono text-[0.68rem] uppercase leading-snug tracking-[0.06em] text-muted-on-dark">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
