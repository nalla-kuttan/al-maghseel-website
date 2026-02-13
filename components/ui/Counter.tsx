import React, { useEffect, useState } from "react";

/** Animated Counter */
export default function Counter({ target, duration = 1.2 }: { target: number; duration?: number }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const total = Math.max(1, Math.floor(duration * 60));
        const step = () => {
            start++;
            const next = Math.round((start / total) * target);
            setCount(Math.min(target, next));
            if (start < total) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration]);
    return <span>{count}</span>;
}
