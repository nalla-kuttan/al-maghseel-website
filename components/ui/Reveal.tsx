import React, { useEffect, useRef } from "react";

type RevealProps = { as?: "div" | "li"; className?: string; delay?: number; children: React.ReactNode };

// Slides content up into place when scrolled into view. Only transform animates, so content
// is fully visible in the static HTML and for no-JS clients; elements already on screen at mount stay put.
export default function Reveal({ as = "div", className = "", delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.style.transitionDelay = `${delay}ms`;
      el.dataset.reveal = "done";
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  const Tag = as as React.ElementType;
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
