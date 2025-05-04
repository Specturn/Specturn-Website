import React, { useEffect, useRef } from 'react';

const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const updateFollowerColor = () => {
      const element = document.elementFromPoint(mouseX, mouseY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const isDark = isDarkBackground(bgColor);
        follower.style.background = isDark ? 'white' : 'black';
      }
    };

    const isDarkBackground = (color: string): boolean => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return false;
      const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
      return brightness < 128;
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateFollowerColor();
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        follower.style.width = '30px';
        follower.style.height = '30px';
        follower.style.borderRadius = '0';
      } else {
        follower.style.width = '20px';
        follower.style.height = '20px';
        follower.style.borderRadius = '50%';
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'background 0.2s',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorFollower; 