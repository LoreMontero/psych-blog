'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function PrincipleCard({ title, description, icon, className }: PrincipleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className={cn('h-full transition-colors bg-neutral-800 hover:bg-neutral-700 border-neutral-700', className)}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <span className="text-blue-400">{icon}</span>
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}