import { useEffect, useRef, useState } from 'react';

export default function useClockTime() {
    const [time, setTime] = useState(new Date());
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalRef.current);
    },[]);

    return time;
}