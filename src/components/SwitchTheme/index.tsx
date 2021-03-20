import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';

import { Container, Icon, MoonIcon, SunIcon } from './styles';

interface SwitchThemeProps {
  theme: { name: string; };
  setter: (string: object) => void;
}

export function SwitchTheme({ setter, theme }: SwitchThemeProps) {
  const { allThemes } = useTheme();

  const handleToggleTheme = () => {
    if (theme.name === "Light") setter(allThemes.dark);
    else setter(allThemes.light);
  }

  return (
    <Container style={{ position: 'absolute' }}>
      <Switch
        onChange={handleToggleTheme}
        checked={theme.name === "Dark"}
        checkedIcon={<Icon><MoonIcon /></Icon>}
        uncheckedIcon={<Icon><SunIcon /></Icon>}
        onColor="#202020"
        onHandleColor="#8a8a8a"
        offColor="#8a8a8a"
        offHandleColor="#fff"
      />
    </Container>
  )
};
