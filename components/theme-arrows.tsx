'use client';

import * as React from 'react';
import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '@/components/shadcn-theme-provider';

export function ThemeArrows({ children }: { children: ReactNode }) {
  const { nextTheme, previousTheme } = useTheme();

  return (
    <div className={'relative'}>
      <div className={'md:block'}>
        <ChevronLeft
          className={'absolute left-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20'}
          onClick={previousTheme} />
        <ChevronRight
          className={'absolute right-0 top-1/2 h-10 w-10 cursor-pointer text-primary md:h-20 md:w-20'}
          onClick={nextTheme} />
      </div>
      {children}
    </div>
  );
}
