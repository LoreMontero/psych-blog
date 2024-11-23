'use client';

import { ScrollIndicator } from '@/components/scroll-indicator';
import { PrincipleCard } from '@/components/principle-card';
import { InteractiveGrid } from '@/components/interactive-grid';
import { Button } from '@/components/ui/button';
import { SourcesCarousel } from '@/components/sources-carousel';
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

      {/* Questions Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12 text-white">Key Questions About Goal Setting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl text-blue-400 mb-6">Why is Goal Setting Important?</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    How does setting clear goals impact performance?
                  </h4>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    What role do goals play in motivation?
                  </h4>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    How do goals influence behavior and decision-making?
                  </h4>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl text-blue-400 mb-6">Effective Goal Setting</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    What makes a goal SMART?
                  </h4>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    How specific should goals be?
                  </h4>
                </motion.div>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="group cursor-pointer"
                >
                  <h4 className="text-xl text-neutral-300 group-hover:text-blue-400 transition-colors">
                    What is the role of feedback in goal achievement?
                  </h4>
                </motion.div>
              </div>
            </motion.div>
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
            description="We break down complex goals into manageable components, ensuring clarity while maintaining challenge."
          />
        </div>
      </section>

      {/* SMART Goals Framework */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-16 text-white">The SMART Goals Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Specific</h3>
              <p className="text-neutral-300">Well-defined and clear goals that are actionable.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateZ: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20 hover:border-green-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4">Measurable</h3>
              <p className="text-neutral-300">Include specific criteria for measuring progress and tracking goal achievement.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Achievable</h3>
              <p className="text-neutral-300">Realistic and attainable goals that stretch your abilities but remain possible.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateZ: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/20 hover:border-red-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4">Relevant</h3>
              <p className="text-neutral-300">Goals that align with broader objectives and are worthwhile to pursue.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-500/20 hover:border-yellow-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Time-bound</h3>
              <p className="text-neutral-300">Set with a clear timeline and deadline to create urgency and track progress.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-lg bg-gradient-to-br from-neutral-500/10 to-neutral-600/10 backdrop-blur-sm border border-neutral-500/20 hover:border-neutral-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-neutral-300">Apply the SMART framework to transform vague objectives into actionable goals.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sources Section */}
      <section className="relative py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-16 text-white">Sources & References</h2>
          <SourcesCarousel />
        </motion.div>
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
