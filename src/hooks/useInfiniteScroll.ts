import { useEffect, useRef, useState } from 'react';
import { InfiniteScrollProps } from '../types/infiniteScroll';

/**
 * The `useInfiniteScroll` function in TypeScript is a custom hook that enables infinite scrolling
 * behavior by detecting when a target element intersects with a specified root element.
 * @param {InfiniteScrollProps}  - - `root`: The element that is used as the viewport for checking
 * visibility of the target. Defaults to the browser viewport if not specified.
 * @returns The `useInfiniteScroll` custom hook returns a boolean value `isIntersecting`, which
 * indicates whether the target element is intersecting with the specified root element based on the
 * intersection observer configuration. This value is updated based on the intersection status and
 * triggers the `onIntersect` callback function when the target element intersects with the root
 * element according to the specified threshold and root margin.
 */
const useInfiniteScroll = ({
    root,
    target,
    onIntersect,
    threshold = 1.0,
    rootMargin = '0px',
}: InfiniteScrollProps) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                const isIntersecting = entries[0].isIntersecting;
                setIsIntersecting(isIntersecting);
                if (isIntersecting) {
                    onIntersect();
                }
            },
            {
                root,
                rootMargin,
                threshold,
            }
        );

        if (target) {
            observer.current.observe(target);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [target, root, rootMargin, threshold, onIntersect]);

    return isIntersecting;
};

export default useInfiniteScroll;