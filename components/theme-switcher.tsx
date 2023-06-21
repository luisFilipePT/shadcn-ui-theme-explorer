'use client';

import { ShadcnTheme, useTheme } from '@/components/shadcn-theme-provider';
import { ReactNode, useEffect } from 'react';
import themes from '@/themes/index.json';

export default function ThemeSwitcher({ slug, children }: {
  slug: string;
  children: ReactNode
}) {

  const currentTheme = themes.find((t) => t.name.toLowerCase() === slug.toLowerCase()) ?? themes[0];
  const { setCurrentTheme } = useTheme();

  useEffect(() => {
    setCurrentTheme(currentTheme as ShadcnTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {children}
    </>
  );
}
