'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/components/shadcn-theme-provider';
import { ThemeArrows } from '@/components/theme-arrows';
import { Switch } from '@/components/ui/switch';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Inputs from '@/components/home/inputs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AuthorsTabs from '@/components/home/tabs';

export default function PageContent() {
  const { currentTheme } = useTheme();

  return (
    <ThemeArrows>
      <section className='container grid w-full grid-cols-2 items-center justify-between pb-8 pt-6 md:py-5'>
        <div className='flex max-w-[980px] flex-col items-start gap-2'>
          <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
            {currentTheme?.name} <br className='hidden sm:inline' />
          </h1>
          <p className='max-w-[700px] text-lg text-muted-foreground'>
            {currentTheme?.description}
          </p>
        </div>
        <Switch className={'justify-self-end'} />
      </section>
      <section className='container grid grid-cols-1 items-center gap-6 pb-8 pt-6 md:grid-cols-3 md:py-10'>
        <div className='grid gap-3'>
          <Button>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='destructive'>Destructive</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
        </div>
        <AuthorsTabs />
        <div>
          <div className='flex flex-col gap-3 pb-8 md:flex-row'>
            <Badge>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='destructive'>Destructive</Badge>
          </div>
          <div className='flex items-center space-x-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[250px]' />
              <Skeleton className='h-4 w-[200px]' />
            </div>
          </div>
        </div>
        <Popover>
          <PopoverTrigger>Test Popover</PopoverTrigger>
          <PopoverContent>You discovered the popover!</PopoverContent>
        </Popover>

      </section>
      <section className='container grid grid-cols-1 gap-6 pb-8 pt-6 md:grid-cols-3 md:py-10'>
        <Inputs />
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </section>
    </ThemeArrows>
  );
}
