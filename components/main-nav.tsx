'use client';

import * as React from 'react';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/components/shadcn-theme-provider';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const { currentTheme } = useTheme();

  const themeName = currentTheme.name.toLowerCase();

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href={`/${themeName}`} className='flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href={`/${themeName}`}>
              Home
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Download file</DropdownMenuItem>
          <DropdownMenuItem>Share link</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={`/${themeName}/about`}>
              About
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
