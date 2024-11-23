'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useCallback } from 'react';

const sources = [
  {
    title: "Be Smart and Pursue Smart Goals",
    author: "Library Mindset",
    year: "2023",
    publication: "x.com",
    link: "https://x.com/librarymindset/status/1665648701451169794"
  },
  {
    title: "Goal Setting Theory",
    author: "Deanna Debara",
    year: "2022",
    publication: "BetterUp",
    link: "https://www.betterup.com/blog/goal-setting-theory?t"
  },

];

export function SourcesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sources.map((source, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mx-4 h-full">
                <div className="h-full p-6 rounded-lg bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-2">{source.title}</h3>
                  <p className="text-neutral-300 mb-1">{source.author}</p>
                  <p className="text-neutral-400 mb-3">{source.year} • {source.publication}</p>
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Source <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/90 border border-neutral-700 hover:bg-neutral-700 transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800/90 border border-neutral-700 hover:bg-neutral-700 transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
