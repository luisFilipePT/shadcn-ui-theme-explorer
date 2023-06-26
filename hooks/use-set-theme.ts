'use client'

import { ShadcnTheme, useTheme } from "@/components/shadcn-theme-provider";
import { sanitizeName } from "@/lib/utils";
import themes from "@/themes/index.json"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const themesNames = themes.map((t) => sanitizeName(t.name));

const useSetTheme = (theme: string) => {
    const router = useRouter();
    const { setCurrentTheme } = useTheme();
    const pathname = usePathname()

    const [, , ...nested] = pathname.split('/');

    const currentPage = nested ? `/${nested.join('/')}` : ''
  
    if (!themesNames.includes(theme)) {
      router.replace(`/${sanitizeName(themes[0].name)}/${currentPage}`);
    }
  
    const currentTheme =
      themes.find((t) => sanitizeName(t.name) === sanitizeName(theme)) ??
      themes[0];
  
    useEffect(() => {
      setCurrentTheme(currentTheme as ShadcnTheme);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}

export { useSetTheme }