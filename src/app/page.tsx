'use client';

import { ScrollIndicator } from '@/components/scroll-indicator';
import { PrincipleCard } from '@/components/principle-card';
import { InteractiveGrid } from '@/components/interactive-grid';
import { Button } from '@/components/ui/button';
import {
  Target,
  Lightbulb,
  Heart,
  MessageSquare,
  Boxes,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-900 text-white">
      <ScrollIndicator />
      <InteractiveGrid />

      {/* Hero Section */}
      <section className="relative pt-24 pb-40 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Goal Setting Theory
          </h1>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Exploring the intersection of IO Psychology and Software Development at Vercel
          </p>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 relative z-10">
              Read More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Principles Grid */}
      <section className="relative mt-12 py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto bg-neutral-900/90 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PrincipleCard
            title="Clarity"
            icon={<Lightbulb className="w-5 h-5" />}
            description="Clear, specific goals lead to higher performance. At Vercel, this means well-defined project objectives and measurable outcomes."
          />
          <PrincipleCard
            title="Challenge"
            icon={<Target className="w-5 h-5" />}
            description="Challenging goals drive innovation. We push boundaries in web development while maintaining achievable targets."
          />
          <PrincipleCard
            title="Commitment"
            icon={<Heart className="w-5 h-5" />}
            description="Team buy-in is crucial. We foster a culture of shared ownership and dedication to our mission."
          />
          <PrincipleCard
            title="Feedback"
            icon={<MessageSquare className="w-5 h-5" />}
            description="Regular feedback loops enhance performance. Our development process includes continuous review and iteration."
          />
          <PrincipleCard
            title="Task Complexity"
            icon={<Boxes className="w-5 h-5" />}
            description="Understanding task difficulty helps in resource allocation and setting realistic timelines for complex projects."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-neutral-800 bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-neutral-400">
          <p> {new Date().getFullYear()} Goal Setting Theory Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
