import { useEffect } from "react";

export default function useLazyLoad() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".lazy-load").forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);
}
