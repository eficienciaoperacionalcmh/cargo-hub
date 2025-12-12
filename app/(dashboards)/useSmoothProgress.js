import { useState, useEffect } from "react";

export const useSmoothProgress = ({ isActive, totalSeconds, onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setProgress(0);
            return;
        }

        const SMOOTH_ANIMATION_INTERVAL_MS = 100;
        const totalTicks = (totalSeconds * 1000) / SMOOTH_ANIMATION_INTERVAL_MS;
        const step = 100 / totalTicks;

        const intervalId = setInterval(() => {
            setProgress((prev) => {
                const nextValue = prev + step;
                if (nextValue >= 100) {
                    onComplete?.();
                    return 0;
                }
                return nextValue;
            });
        }, SMOOTH_ANIMATION_INTERVAL_MS);

        return () => clearInterval(intervalId);
    }, [isActive, totalSeconds, onComplete]);

    return progress;
};
