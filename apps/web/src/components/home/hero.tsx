'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative container-custom z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="heading-display text-gray-900 mb-6">
            Building Trust.<br />
            <span className="text-gradient">Creating Landmarks.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover premium residential, commercial, and agricultural properties across Jharkhand, Bihar, West Bengal, and Odisha. Your trusted partner in real estate excellence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-lg">
              Explore Properties
            </button>
            <button className="btn-outline text-lg">
              Book Site Visit
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center gap-8 text-sm font-semibold text-gray-600"
          >
            <div>✓ RERA Approved</div>
            <div>✓ 100+ Projects</div>
            <div>✓ 20+ Years Trust</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
