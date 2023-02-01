import { useState, useEffect } from "react";

export const useScreen = (reference, margin) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (IntersectionObserver) {
      const handleIntersecting = (entries) => {
        const [entry] = entries;
        setIsShowing(entry.isIntersecting);
      };
      const options = { rootMargin: margin };
      const observer = new IntersectionObserver(handleIntersecting, options);
      if(reference.current){
        observer.observe(reference.current);
      }
      return () => observer.unobserve(reference.current);
    }
  }, []);

  return [isShowing];
};
