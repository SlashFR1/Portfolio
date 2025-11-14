'use client';

import { useRef, useEffect, useState } from 'react';
import ProjectCardSimple from './project-card-simple';
import { projectsData } from '@/utils/data/projects-data';

export default function ProjectsSimple() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || projectsData.length === 0) return;

    // Auto-scroll every 5 seconds
    const autoScrollInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % projectsData.length;
      const cardWidth = 350; // card width
      const gap = 32; // gap between cards
      const totalWidth = cardWidth + gap;
      
      // Scroll to the next card
      container.scrollLeft = nextIndex * totalWidth;
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(autoScrollInterval);
  }, [currentIndex]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          My <span className="text-brand-accent">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A collection of my recent work showcasing my skills in full-stack development,
          AI/ML, and creative problem-solving.
        </p>

        {/* Carousel - Auto scroll */}
        <div className="carousel-container">
          <div className="carousel-wrapper" ref={scrollContainerRef}>
            {projectsData.map((project, index) => (
              <ProjectCardSimple key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
