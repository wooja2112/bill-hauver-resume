"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    // Content renders visible by default (no-JS, print, find-in-page all
    // work). Only arm the hidden starting state once we know JS can also
    // reveal it again on intersection.
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9;
    if (alreadyInView) return;

    node.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
