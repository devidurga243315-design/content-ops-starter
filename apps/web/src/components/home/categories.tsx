'use client';

import { motion } from 'framer-motion';

const categories = [
  { id: 1, name: 'Residential', icon: '🏠', count: '2,450+' },
  { id: 2, name: 'Commercial', icon: '🏢', count: '380+' },
  { id: 3, name: 'Plots', icon: '📍', count: '1,200+' },
  { id: 4, name: 'Agricultural Land', icon: '🌾', count: '650+' },
  { id: 5, name: 'Farm House', icon: '🏡', count: '180+' },
  { id: 6, name: 'Villa', icon: '👑', count: '320+' },
];

export function PropertyCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-4">Explore Property Types</h2>
          <p className="text-xl text-gray-600">Find your perfect property across multiple categories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card p-8 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-lg text-blue-600 font-semibold">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
