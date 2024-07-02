import {useState, useEffect} from 'react';

const useResizeObserver = (threshold: number, callback: (isGreater: boolean) => void) => {
    const [isGreaterThanThreshold, setIsGreaterThanThreshold] = useState(window.innerWidth > threshold);

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const isGreater = currentWidth > threshold;
            setIsGreaterThanThreshold(isGreater);
            callback(isGreater);
        };

        // Set initial value
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [threshold, callback]);

    return isGreaterThanThreshold;
};

export default useResizeObserver;