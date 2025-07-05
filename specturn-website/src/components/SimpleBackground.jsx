import { useEffect, useState } from 'react';

export default function SimpleBackground() {
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
    <div 
      className={`absolute inset-0 opacity-20 ${
        isDark 
          ? 'bg-gradient-to-br from-white/10 via-transparent to-white/5' 
          : 'bg-gradient-to-br from-black/5 via-transparent to-black/10'
      }`}
    />
  );
} 