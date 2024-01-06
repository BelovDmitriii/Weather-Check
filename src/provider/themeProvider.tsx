import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/themeContext';
import changeCssVariables from '../model/ChangeCssVariables';

type Props = {
  children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  function changeTheme(theme: Theme) {
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