import { useEffect, useRef, useState } from 'react';

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

export default useInView;
