import React, { useEffect, useRef, useState } from "react";

/**
 * Animated Counter — counts up from 0 to target once it scrolls into view.
 * Renders `target` by default so static export / no-JS clients see the real
 * number; the count-from-zero motion only kicks in for capable, in-view clients.
 */
export default function Counter({ target, duration = 1.2 }: { target: number; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [count, setCount] = useState(target);

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let frame = 0;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            let start = 0;
            const total = Math.max(1, Math.floor(duration * 60));
            const step = () => {
                start++;
                setCount(Math.min(target, Math.round((start / total) * target)));
                if (start < total) frame = requestAnimationFrame(step);
            };
            frame = requestAnimationFrame(step);
        }, { threshold: 0.6 });
        observer.observe(el);
        return () => { observer.disconnect(); cancelAnimationFrame(frame); };
    }, [target, duration]);

    return <span ref={ref}>{count}</span>;
}
