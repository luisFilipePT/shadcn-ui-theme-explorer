'use client'

import { ShadcnTheme, useTheme } from "@/components/shadcn-theme-provider";
import themes from "@/themes/index.json"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const themesNames = themes.map((t) => t.name.toLowerCase());

const useSetTheme = (theme: string) => {
    const router = useRouter();
    const { setCurrentTheme } = useTheme();
    const pathname = usePathname()

    const [, , ...nested] = pathname.split('/');

    const currentPage = nested ? `/${nested.join('/')}` : ''
  
    if (!themesNames.includes(theme)) {
      router.replace(`/${themes[0].name.toLowerCase()}/${currentPage}`);
    }
  
    const currentTheme =
      themes.find((t) => t.name.toLowerCase() === theme.toLowerCase()) ??
      themes[0];
  
    useEffect(() => {
      setCurrentTheme(currentTheme as ShadcnTheme);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}

export { useSetTheme }