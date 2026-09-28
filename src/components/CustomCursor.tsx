"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Immediate follow
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect clickable elements via tags or specific tailwind classes rather than computed style
      const isClickable = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer') || target.closest('.playable-tool');
      
      if (isClickable) {
         // Rotate slightly and scale up when over a clickable element.
         // Because transformOrigin is 0 0, it rotates perfectly around the tip!
         gsap.to(cursor, { rotation: -15, scale: 1.2, duration: 0.2, ease: "back.out(1.7)" });
      } else {
         gsap.to(cursor, { rotation: 0, scale: 1, duration: 0.2, ease: "power2.out" });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[999999] hidden md:block"
      style={{ transformOrigin: "0px 0px" }}
    >
      <svg className="absolute -top-[3px] -left-[3px]" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* Outer White Border (Rounded) */}
        <path d="M3 3 L17 9.5 L10 12.5 L7 19.5 Z" fill="#800000" stroke="white" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round"/>
        {/* Inner Maroon Fill (Rounded corners via stroke) */}
        <path d="M3 3 L17 9.5 L10 12.5 L7 19.5 Z" fill="#800000" stroke="#800000" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
