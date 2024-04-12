import { useEffect, useState } from "react";

export const useMousePointer = () => {
    const [position, setPosition] = useState({ x:0, y:0 });

    const handleMouseMove = (e) => {
        setPosition({ p: e.clientX, q: e.clientY });
    };

    // window.addEventListener('mousemove', handleMouseMove);  also works without useEffect

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
}