import styles from './Header.module.scss';
import IconsSvgSelector from '../../assets/images/icons/IconsSvgSelector';
import Select from 'react-select';
import { useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

function Header() {
  const theme = useTheme();
  const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Санкт-Петербург' },
    { value: 'city-3', label: 'Екатеринбург' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === 'light' ? 'rgba(71, 147, 255, 0.2)' : 'rgb(79, 79, 79)',
      width: '210px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100',
     }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === 'light' ? '#000' : '#fff',
     }),
  }

  function changeTheme(){
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    const themeComponents = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];

    themeComponents.forEach((component) => {
      root.style.setProperty(`--${component}-default`, `var(--${component}-${theme.theme})`);
    })
  }, [theme]);

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
        <div className={styles.themes} onClick={changeTheme}>
          <IconsSvgSelector id='themes' />
        </div>
        <Select defaultValue={options[0]} styles={colorStyles} options={options} />
      </div>
    </header>
  )
}

export default Header;