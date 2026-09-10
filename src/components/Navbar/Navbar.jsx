import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoAccent}>U&N</span> SPARE PARTS
        </div>

        <div className={styles.desktopNav}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#categories" className={styles.navLink}>Categories</a>
          <a href="#features" className={styles.navLink}>Trust & Specs</a>
        </div>
        
        <div className={styles.desktopCta}>
          <a href="tel:0783796791" className={styles.ctaBtn}>
            <Phone size={16} />
            <span>0783 796 791</span>
          </a>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          <a href="#home" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#categories" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Categories</a>
          <a href="#features" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Trust & Specs</a>
          <a href="tel:0783796791" className={styles.mobileCtaBtn}>
            <Phone size={18} />
            <span>0783 796 791</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
