import { useEffect, useRef, useState } from 'react';
import { InfiniteScrollProps } from '../types/infiniteScroll';

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