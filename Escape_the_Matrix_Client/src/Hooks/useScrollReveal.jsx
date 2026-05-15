import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll: returns a ref and an `isVisible` flag that flips true
 * the first time the element enters the viewport. Pair with the
 * `.reveal` / `.reveal--visible` CSS classes for the fade-up effect.
 */
const useScrollReveal = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
