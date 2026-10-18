import { profile, recommendations } from "@/lib/resume";
import Reveal from "./Reveal";

export default function Recommendations() {
  return (
    <section id="recommendations" className="bg-paper">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-signal">Recommendations</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
                What colleagues say
              </h2>
            </div>
            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:text-signal"
            >
              Verified on LinkedIn &rarr;
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line md:grid-cols-2">
          {recommendations.map((rec, i) => (
            <Reveal key={rec.name} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col gap-5 bg-paper-2 p-7">
                <span
                  className="font-display text-4xl leading-none text-signal/70 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="flex-1 text-[0.95rem] leading-relaxed text-ink/80">{rec.quote}</p>
                <div className="border-t border-paper-line pt-4">
                  <p className="font-semibold text-ink">{rec.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{rec.title}</p>
                  <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-signal">
                    {rec.relationship}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
