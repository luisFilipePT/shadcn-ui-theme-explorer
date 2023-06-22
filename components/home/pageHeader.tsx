'use client'


import { useTheme } from "../shadcn-theme-provider"
import { Switch } from "../ui/switch";

export default function PageHeader(){
    const {currentTheme: {name, author, description}}=useTheme();

    return (
    <section className='grid w-full grid-cols-2 items-center justify-between pb-8 pt-6 md:py-5 min-h-[150px]'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          {name}
          <span className={"text-lg md:text-xl pl-2 font-light leading-normal tracking-wide"}>
            by {author}
          </span>
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          {description}
        </p>
      </div>
      <Switch className={'justify-self-end'} />
    </section>
  )
}