import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

const ContactMe = () => {
  return (
    <div className={styles.contact}>
      <Link href="/contact">
        contact me
      </Link>
    </div>
  );
}

export default ContactMe;