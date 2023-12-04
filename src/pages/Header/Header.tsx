import styles from './Header.module.scss';
import IconsSvgSelector from '../../assets/images/icons/IconsSvgSelector';
import Select from 'react-select';

function Header() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  const colorStyles = {
    control: (styles: any) => ({ 
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
     }),
  }

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
        <Select styles={colorStyles} options={options} />
      </div>
    </header>
  )
}

export default Header