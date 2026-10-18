import { experience } from "@/lib/resume";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <p className="eyebrow text-signal">Experience</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
            Career timeline
          </h2>
        </Reveal>

        <div className="mt-14 border-l border-paper-line">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.company}
              delay={i * 60}
              className="relative pb-16 pl-9 last:pb-0 sm:pl-11"
            >
              <div>
                <span
                  className="absolute top-1.5 left-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-signal-bright ring-4 ring-paper"
                  aria-hidden="true"
                />

                <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  {entry.dates}
                </p>

                <div className="mt-2.5 flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-xl font-bold text-ink sm:text-[1.4rem]">
                    {entry.company}
                  </h3>
                  <span className="text-sm text-muted">{entry.location}</span>
                </div>

                <p className="mt-1.5 text-[1rem] font-medium text-ink/80">{entry.role}</p>

                {entry.bullets && (
                  <ul className="mt-5 flex flex-col gap-3">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[0.96rem] leading-relaxed text-ink/75">
                        <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-ink/30" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.subRoles && (
                  <div className="mt-7 flex flex-col gap-6 border-l-2 border-paper-2 pl-6">
                    {entry.subRoles.map((sub) => (
                      <div key={sub.role}>
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                          <h4 className="font-semibold text-ink/90">{sub.role}</h4>
                          <p className="font-mono text-xs uppercase tracking-[0.06em] text-muted">
                            {sub.period}
                          </p>
                        </div>
                        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/70">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
