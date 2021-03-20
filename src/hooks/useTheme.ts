import { useEffect, useState } from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/storage';

interface modeType {
  id: string;
  name: string;
  colors: object;
}

export const useTheme = () => {
  const allThemes = getLocalStorage('all-themes');
  const [theme, setTheme] = useState(allThemes.light);
  const [isLoadingTheme, setIsLoadingTheme] = useState(false);

  const setMode = (mode: modeType) => {
    setLocalStorage('theme', mode);
    setTheme(mode);
    setIsLoadingTheme(false);
  };

  useEffect(() => {
    const localTheme = getLocalStorage('theme');
    setTheme(localTheme || allThemes.light);
    setIsLoadingTheme(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { allThemes, theme, isLoadingTheme, setMode };
};