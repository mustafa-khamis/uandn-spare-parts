import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section id="home" className={styles.heroSection}>
      {/* Massive Watermark Background */}
      <div className={styles.watermarkContainer}>
        <span className={styles.watermarkText}>U&N SPARE PARTS</span>
      </div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.label}>Wholesale Supply Chain</div>
            <h1 className={styles.headline}>
              Precision Parts.<br />
              <span className={styles.highlight}>Industrial Scale.</span>
            </h1>
            
            <p className={styles.subheadline}>
              Engineered for efficiency. We provide top-tier automotive and machinery parts with uncompromising quality, competitive B2B pricing, and seamless delivery logistics.
            </p>
            
            <div className={styles.ctaGroup}>
              <a href="#categories" className={styles.primaryCta}>
                View Inventory <ArrowUpRight size={16} />
              </a>
              <a href="tel:0783796791" className={styles.secondaryCta}>
                Talk to Sales
              </a>
            </div>
          </motion.div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imagesComposition}>
            <motion.div 
              className={styles.imageWrapperMain}
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop" 
                alt="Precision Engine Parts" 
                className={styles.image}
              />
            </motion.div>
            
            <motion.div 
              className={styles.imageWrapperSecondary}
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Warehouse Scale" 
                className={styles.image}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
