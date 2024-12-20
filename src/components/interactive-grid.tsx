'use client';

import { useEffect, useState, useRef } from 'react';

export function InteractiveGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridCells, setGridCells] = useState(528);
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const updateGridCells = () => {
      const cellSize = Math.max(
        15,
        Math.round(window.innerWidth * (window.innerWidth < 640 ? 0.05 : 0.03))
      );

      const columns = Math.floor(window.innerWidth / cellSize);
      
      const heightPercentage = window.innerWidth < 640 ? 0.2 : 
                              window.innerWidth < 1024 ? 0.3 : 
                              0.4;
      
      const viewportHeight = window.innerHeight;
      const gridHeight = viewportHeight * heightPercentage;
      
      const rows = Math.ceil(gridHeight / cellSize);
      setGridCells(columns * rows);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    updateGridCells();
    window.addEventListener('resize', updateGridCells);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateGridCells);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getDistance = (index: number, mousePos: { x: number; y: number }) => {
    if (!mounted || !gridRef.current) return 1000;
    
    const cells = gridRef.current.getElementsByClassName('border');
    const cell = cells[index];
    if (!cell) return 1000;
    
    const rect = cell.getBoundingClientRect();
    const cellX = rect.left + rect.width / 2;
    const cellY = rect.top + rect.height / 2;
    
    return Math.sqrt(
      Math.pow(mousePos.x - cellX, 2) + Math.pow(mousePos.y - cellY, 2)
    );
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none h-[40vh]">
      <div 
        ref={gridRef}
        className="relative w-screen h-full grid grid-cols-[repeat(auto-fit,minmax(3vw,1fr))]"
      >
        {Array.from({ length: gridCells }).map((_, i) => {
          const distance = Math.max(0, 1 - getDistance(i, mousePosition) / 300);
          return (
            <div
              key={i}
              className="grid-cell border border-neutral-800 transition-all duration-300 aspect-square"
              style={{
                background: `radial-gradient(circle at center, 
                  rgba(255, 255, 255, ${distance * 0.2}),
                  rgba(229, 229, 229, ${distance * 0.15}),
                  rgba(212, 212, 212, ${distance * 0.1})
                )`,
                boxShadow: distance > 0.1 ? `0 0 ${distance * 15}px rgba(255, 255, 255, ${distance * 0.1})` : 'none'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}