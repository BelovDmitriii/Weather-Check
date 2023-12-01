import React from 'react';
import styles from './Header.module.scss';
import IconsSvgSelector from '../../assets/images/icons/IconsSvgSelector';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <IconsSvgSelector id='logo' />
        </div>
        <div className={styles.title}>
          Weather Check
        </div>
      </div>
      <div className={styles.wrapper}></div>
    </header>
  )
}

export default Header