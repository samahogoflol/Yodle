import { useState, useEffect, useCallback } from 'react';

export const useTimer = (initialSeconds: number) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalId: ReturnType<typeof setInterval> | undefined;

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        setIsActive(false); 
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isActive, seconds]);

    const startTimer = useCallback(() => {
        setSeconds(initialSeconds);
        setIsActive(true);
    }, [initialSeconds]);

    return { seconds, isActive, startTimer };
};