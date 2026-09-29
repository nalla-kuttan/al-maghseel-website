import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animated Counter — counts up from 0 to target once it scrolls into view.
 * Renders `target` by default so static export / no-JS clients see the real
 * number; the count-from-zero motion only kicks in for capable, in-view clients.
 */
export default function Counter({ target, duration = 1.2 }: { target: number; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const [count, setCount] = useState(target);

    useEffect(() => {
        if (!isInView) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setCount(target);
            return;
        }
        let start = 0;
        const total = Math.max(1, Math.floor(duration * 60));
        const step = () => {
            start++;
            const next = Math.round((start / total) * target);
            setCount(Math.min(target, next));
            if (start < total) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count}</span>;
}
