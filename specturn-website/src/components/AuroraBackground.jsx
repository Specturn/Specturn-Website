import { useEffect, useState } from 'react';

export default function AuroraBackground() {
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isDark ? (
        <div className="aurora" />
      ) : (
        <div className="aurora-light" />
      )}
    </>
  );
} 