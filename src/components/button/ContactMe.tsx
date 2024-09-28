import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

const ContactMe = () => {
  return (
    <Link href="/contact"  className={styles.contact}>
      <span>contact me</span>
    </Link>
  );
}

export default ContactMe;