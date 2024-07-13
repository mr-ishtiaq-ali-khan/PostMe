export type InfiniteScrollProps = {
    root: Element | null;
    target: Element | null;
    onIntersect: () => void;
    threshold?: number | number[];
    rootMargin?: string;
}