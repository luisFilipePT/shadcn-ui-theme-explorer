'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import themes from '@/themes/index.json';

import PageContent from '@/components/home/pageContent';
import { ShadcnTheme, useTheme } from '@/components/shadcn-theme-provider';

const themesNames = themes.map((t) => t.name.toLowerCase());

export default function ThemePage({ params }: { params: { theme: string } }) {
  const router = useRouter();
  const { setCurrentTheme } = useTheme();

  if (!themesNames.includes(params.theme)) {
    router.replace('/' + themes[0].name.toLowerCase());
  }

  const currentTheme =
    themes.find((t) => t.name.toLowerCase() === params.theme.toLowerCase()) ??
    themes[0];

  useEffect(() => {
    setCurrentTheme(currentTheme as ShadcnTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContent
      name={currentTheme.name}
      description={currentTheme.description}
      author={currentTheme.author}
    />
  );
}
