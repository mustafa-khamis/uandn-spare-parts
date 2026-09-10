import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoAccent}>U&N</span> SPARE PARTS
            </div>
            <p className={styles.brandDesc}>
              Precision automotive and industrial parts. Delivering reliability at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linkList}>
              <li><a href="#home">Overview</a></li>
              <li><a href="#categories">Inventory</a></li>
              <li><a href="#features">Logistics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Headquarters</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={16} className={styles.contactIcon} />
                <span>KK 515 St, Kigali</span>
              </li>
              <li>
                <Clock size={16} className={styles.contactIcon} />
                <span>Opens at 8:00 AM</span>
              </li>
              <li>
                <Phone size={16} className={styles.contactIcon} />
                <a href="tel:0783796791">0783 796 791</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} U&N Spare Parts Ltd. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
