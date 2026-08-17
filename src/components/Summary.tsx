import { highlights } from "@/lib/resume";
import Reveal from "./Reveal";

export default function Summary() {
  return (
    <section id="profile" className="bg-paper">
      <div className="container-page grid gap-12 py-20 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal>
          <p className="eyebrow text-signal">Profile</p>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
            Three decades turning distressed IT programs into dependable systems.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="flex flex-col gap-6">
            {highlights.map((item) => (
              <li key={item} className="flex gap-4 border-t border-paper-line pt-5 first:border-t-0 first:pt-0">
                <span className="font-mono text-signal pt-0.5 select-none" aria-hidden="true">
                  &rsaquo;
                </span>
                <p className="text-[1.02rem] leading-relaxed text-ink/85">{item}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
