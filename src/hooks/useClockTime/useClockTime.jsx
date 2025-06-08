import { useEffect, useRef, useState, useMemo } from 'react';

export default function useClockTime(timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone) {
    const [time, setTime] = useState(() => getZonedDate(new Date(), timeZone));
    const intervalRef = useRef(null);

    const title = useMemo(() => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone }).format();
            return timeZone.replace('/', ' - ').replace('_', ' ');
        } catch {
            return undefined;
        }
    }, [timeZone]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(getZonedDate(new Date(), timeZone));
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, [timeZone]);

    return { time, title };
}

function getZonedDate(date, timeZone) {
    try {
        const parts = new Intl.DateTimeFormat('en-GB', {
            timeZone,
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        }).formatToParts(date);

        const map = {};
        for (const { type, value } of parts) {
            if (type !== 'literal') map[type] = value;
        }

        return new Date(
            `${map.year}-${map.month}-${map.day}T` + `${map.hour}:${map.minute}:${map.second}`
        );
    } catch (e) {
        return new Date();
    }
}
