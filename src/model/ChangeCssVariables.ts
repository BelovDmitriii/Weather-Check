export default function changeCssVariables(theme: string) {
  const root = document.querySelector(':root') as HTMLElement;
  const themeComponents = [
    'body-background',
    'components-background',
    'card-background',
    'card-shadow',
    'text-color',
  ];

  themeComponents.forEach((component) => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
}