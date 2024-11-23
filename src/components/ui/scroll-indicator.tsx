import { useEffect, useState } from 'react';

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-50">
      <div
        className="h-full bg-neutral-900 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}