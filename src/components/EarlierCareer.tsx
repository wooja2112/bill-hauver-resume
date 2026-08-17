import { earlierCareer } from "@/lib/resume";
import Reveal from "./Reveal";

export default function EarlierCareer() {
  return (
    <section className="bg-paper-2">
      <div className="container-page py-16 sm:py-20">
        <Reveal>
          <p className="eyebrow text-signal">Earlier career</p>
          <h2 className="mt-4 max-w-lg font-display text-2xl font-extrabold leading-[1.1] text-ink sm:text-3xl">
            Where the foundation was built
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-3">
            {earlierCareer.map((item) => (
              <div key={item.org} className="flex flex-col gap-2 bg-paper-2 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.06em] text-muted">
                  {item.period}
                </p>
                <p className="font-display text-base font-bold text-ink">{item.org}</p>
                <p className="text-sm font-medium text-ink/75">{item.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
