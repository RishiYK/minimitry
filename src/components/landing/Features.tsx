import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, FileText } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { stagger } from '../../utils/animation';

const features = [
  {
    title: 'AI-Powered',
    description: 'Advanced AI models extract key insights and generate concise summaries',
    Icon: Sparkles,
  },
  {
    title: 'Save Time',
    description: 'Get the main points in seconds instead of reading entire documents',
    Icon: Clock,
  },
  {
    title: 'Any Text',
    description: 'Summarize articles, documents, research papers, and more',
    Icon: FileText,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to digest content faster
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}