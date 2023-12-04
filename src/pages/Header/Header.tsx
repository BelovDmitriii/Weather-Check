import styles from './Header.module.scss';
import IconsSvgSelector from '../../assets/images/icons/IconsSvgSelector';
import Select from 'react-select';

function Header() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
      <div className={styles.wrapper}>
        <div className={styles.themes}>
          <IconsSvgSelector id='themes' />
        </div>
        <Select options={options} />
      </div>
    </header>
  )
}

export default Header