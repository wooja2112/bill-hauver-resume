"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNearViewport(node: HTMLElement) {
  return node.getBoundingClientRect().top < window.innerHeight * 0.9;
}

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

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    if (prefersReducedMotion() || isNearViewport(node)) {
      node.classList.remove("reveal-armed");
      return;
    }

    node.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      ([entry]) => {
        const skippedPast = entry.boundingClientRect.bottom < 0;
        if (entry.isIntersecting || skippedPast) {
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
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
