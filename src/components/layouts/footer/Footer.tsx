import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import {  Linkedin, Mail, GitBranch, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__right}>
          <div className={styles.footer__social}>
            <Link href="https://github.com/dattko" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitBranch size={20} /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} /> LinkedIn
            </Link>
            <Link href="mailto:jhwangmin@gmail.com" aria-label="Email">
              <Mail size={20} /> Mail
            </Link>
            <Link href="sms:01055611680" aria-label="sms">
              <Smartphone size={20} /> sms
            </Link>
          </div>
        </div>
          <span className={styles.footer__text}>© 2024. 장황민. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;