"use client";

import { useEffect, useState } from "react";

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    media.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-sm border border-white/25 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-paper transition-colors hover:border-signal-bright hover:text-signal-bright"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div id="mobile-nav" className="absolute inset-x-0 top-16 border-b border-white/10 bg-ink">
          <ul className="container-page flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-on-dark transition-colors hover:text-paper"
                  onClick={() => setOpen(false)}
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
        </div>
      ) : null}
    </div>
  );
}
