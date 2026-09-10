import React from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Layers, BarChart } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    id: 1,
    title: '5.0-Star Rating',
    description: 'Consistently top-rated by industry leaders.',
    icon: <Star size={24} className={styles.iconAccent} />,
  },
  {
    id: 2,
    title: 'Bulk Economics',
    description: 'Tiered pricing structures that scale with you.',
    icon: <BarChart size={24} className={styles.iconAccent} />,
  },
  {
    id: 3,
    title: 'Rapid Logistics',
    description: 'Same-day dispatch for critical components.',
    icon: <Truck size={24} className={styles.iconAccent} />,
  },
  {
    id: 4,
    title: 'Vast Inventory',
    description: 'Over 10,000 SKUs ready for immediate deployment.',
    icon: <Layers size={24} className={styles.iconAccent} />,
  }
];

const Features = () => {
  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        
        <div className={styles.topRow}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Engineered for Trust.</h2>
            <p className={styles.subtitle}>
              We provide the backbone for your operations. Our logistics and pricing models are built to support high-volume B2B clients seamlessly.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.metrics}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>10k+</span>
              <span className={styles.metricLabel}>Active SKUs</span>
            </div>
            <div className={styles.metricDivider}></div>
            <div className={styles.metricItem}>
              <span className={styles.metricNumber}>500+</span>
              <span className={styles.metricLabel}>B2B Partners</span>
            </div>
          </motion.div>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
