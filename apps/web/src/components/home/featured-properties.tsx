'use client';

import { motion } from 'framer-motion';

const properties = [
  {
    id: 1,
    name: 'Luxury Residential Complex',
    location: 'Ranchi, Jharkhand',
    price: '₹1.5 Cr - ₹3 Cr',
    image: '🏢',
    type: 'Apartment',
    bhk: '2-4 BHK',
  },
  {
    id: 2,
    name: 'Premium Commercial Space',
    location: 'Patna, Bihar',
    price: '₹50 L - ₹2 Cr',
    image: '🏬',
    type: 'Office',
    bhk: 'Ready to Move',
  },
  {
    id: 3,
    name: 'Agricultural Land Development',
    location: 'Kolkata, West Bengal',
    price: '₹25 L - ₹1 Cr',
    image: '🌾',
    type: 'Land',
    bhk: 'Prime Location',
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600">Handpicked premium properties available now</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="card overflow-hidden hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-8xl">
                  {property.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">{property.type}</span>
                    <span className="text-sm font-semibold text-gray-500">{property.bhk}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-6">{property.price}</p>
                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary text-sm">Enquire Now</button>
                    <button className="flex-1 btn-secondary text-sm">Schedule Visit</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
