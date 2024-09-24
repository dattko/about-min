import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

const ContactMe = () => {
  return (
    <Link href="/contact"  className={styles.contact}>
      <button>문의하기</button>
    </Link>
  );
}

export default ContactMe;