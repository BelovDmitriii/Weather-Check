import { ReactNode, useState } from 'react';
import { ThemeContext } from '../context/themeContext';

type Props = {
  children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<string>('light');

  function changeTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};