import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeID = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeID);
    }, [value, delay])

    return debouncedValue;
}