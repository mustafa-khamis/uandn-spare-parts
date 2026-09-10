import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Categories.module.css';

const categories = [
  {
    id: 1,
    title: 'Engine Parts',
    description: 'Precision-engineered pistons, valves, and filtration systems designed for maximum durability.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop', // Same style precision image
    className: styles.bentoLarge
  },
  {
    id: 2,
    title: 'Electrical Systems',
    description: 'Advanced alternators, starters, and harnesses.',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=800&auto=format&fit=crop',
    className: styles.bentoWide
  },
  {
    id: 3,
    title: 'Body Panels',
    description: 'Industrial-grade structural components.',
    image: 'https://images.unsplash.com/photo-1503376710349-5506085a676b?q=80&w=800&auto=format&fit=crop',
    className: styles.bentoSmall
  },
  {
    id: 4,
    title: 'Consumables',
    description: 'Premium oils and synthetic lubricants.',
    image: 'https://images.unsplash.com/photo-1606757659560-ebbd0d37e3d0?q=80&w=800&auto=format&fit=crop', // Kept original as fallback
    className: styles.bentoSmall
  }
];

const Categories = () => {
  return (
    <section id="categories" className={styles.categoriesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Categorized Inventory.
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Explore our comprehensive selection of top-grade parts sourced from trusted global manufacturers.
          </motion.p>
        </div>

        <div className={styles.bentoGrid}>
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              className={`${styles.bentoCard} ${category.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageWrapper}>
                <img src={category.image} alt={category.title} className={styles.cardImage} />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <p className={styles.cardDescription}>{category.description}</p>
                <div className={styles.cardAction}>
                  <div className={styles.iconCircle}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
