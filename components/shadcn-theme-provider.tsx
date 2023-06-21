'use client';

import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import themes from '@/themes/index.json';

export type ShadcnTheme = {
  index: number;
  author: string,
  authorUsername: string;
  version: string,
  name: string,
  description: string
}

type ShadcnThemeContextType = {
  currentTheme: ShadcnTheme;
  setCurrentTheme: (theme: ShadcnTheme) => void;
  nextTheme: (theme: ShadcnTheme) => void;
  previousTheme: (theme: ShadcnTheme) => void;
};

type ShadcnThemeProviderProps = {
  children: ReactNode
}

export const ShadcnThemeContext = React.createContext<ShadcnThemeContextType>(
  {
    currentTheme: { index: 0, ...themes[0] },
    setCurrentTheme: () => {
    },
    nextTheme: () => {
    },
    previousTheme: () => {
    },
  },
);

export function ShadcnThemeProvider({ children }: ShadcnThemeProviderProps) {

  const [currentTheme, setCurrentTheme] = useState<ShadcnTheme>({
    index: 0,
    ...themes[0],
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          previousTheme();
          break;
        case 'ArrowRight':
          nextTheme();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentTheme.name]);

  function clearThemeClass() {
    // remove class that contains theme keyword
    document.documentElement.classList.remove(
      ...Array.from(document.documentElement.classList).filter((c) =>
        c.startsWith('theme-'),
      ),
    );
  }

  function applyTheme(theme: string) {
    const themeName = theme.toLowerCase();

    handleURLChange(themeName);

    document.documentElement.classList.toggle(`theme-${themeName}`);
  }

  const handleURLChange = (slug: string) => {
    const [, , ...nested] = window.location.pathname.split('/');

    window.history.replaceState(
      {},
      '',
      `/${slug}${nested ? `/${nested.join('/')}` : ''}`,
    );
  };

  function handleThemeChange(theme: ShadcnTheme) {
    if (currentTheme.name.toLowerCase() === theme.name.toLowerCase()) {
      return;
    }

    clearThemeClass();

    applyTheme(theme.name);
    setCurrentTheme({ ...theme, index: theme.index ?? themes.indexOf(theme) });
  }

  function nextTheme() {
    clearThemeClass();

    const nextThemeIndex =
      currentTheme.index + 1 >= themes.length ? 0 : currentTheme.index + 1;
    const nextTheme = themes[nextThemeIndex];

    applyTheme(nextTheme.name);
    setCurrentTheme({ ...nextTheme, index: nextThemeIndex });
  }

  function previousTheme() {
    clearThemeClass();

    const previousThemeIndex =
      currentTheme.index - 1 >= 0 ? currentTheme.index - 1 : themes.length - 1;
    const previousTheme = themes[previousThemeIndex];

    applyTheme(previousTheme.name);
    setCurrentTheme({ ...previousTheme, index: previousThemeIndex });
  }

  return (
    <ShadcnThemeContext.Provider value={{
      currentTheme,
      setCurrentTheme: handleThemeChange,
      nextTheme,
      previousTheme,
    }}>
      {children}
    </ShadcnThemeContext.Provider>
  );
}

export function useTheme() {
  const { currentTheme, setCurrentTheme, nextTheme, previousTheme } = React.useContext(ShadcnThemeContext);
  return { currentTheme, setCurrentTheme, nextTheme, previousTheme };
}
