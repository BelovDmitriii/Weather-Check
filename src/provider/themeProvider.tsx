import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/themeContext';
import changeCssVariables from '../model/ChangeCssVariables';
import { storage } from '../model/storage';

type Props = {
  children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

  changeCssVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssVariables(theme)
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