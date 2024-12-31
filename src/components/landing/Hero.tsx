import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Container from '../layout/Container';
import { fadeInUp } from '../../utils/animation';

export default function Hero() {
  return (
    <div className="relative pt-16 pb-32">
      <Container>
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.div 
            className="flex justify-center mb-8"
            variants={fadeInUp}
          >
            <FileText className="h-16 w-16 text-primary animate-float" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            variants={fadeInUp}
          >
            Transform Your Text
            <motion.span 
              className="block text-primary"
              variants={fadeInUp}
            >
              Into Quick Insights
            </motion.span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Get AI-powered summaries of any text in seconds. 
            Save time while capturing the essential points of articles, documents, and more.
          </motion.p>
          <motion.div 
            className="mt-10"
            variants={fadeInUp}
          >
            <motion.a
              href="/summarizer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition-all hover:gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Now
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}