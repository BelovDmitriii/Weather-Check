import { ReactNode, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import changeCssVariables from '../model/ChangeCssVariables';

type Props = {
  children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<string>('light');

  function changeTheme(theme: string) {
    setTheme(theme);
    changeCssVariables(theme);
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