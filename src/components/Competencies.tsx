import { competencies } from "@/lib/resume";
import Reveal from "./Reveal";

export default function Competencies() {
  return (
    <section id="capabilities" className="bg-paper-2">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-signal">Capabilities</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
                Core competencies
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              The recurring toolset across every engagement, from hands-on delivery to executive oversight.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-3">
            {competencies.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-paper-2 px-5 py-4"
              >
                <span className="font-mono text-signal select-none" aria-hidden="true">
                  &rsaquo;
                </span>
                <span className="text-[0.95rem] text-ink/85">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
