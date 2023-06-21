import ThemeSwitcher from '@/components/theme-switcher';
import PageContent from '@/components/home/pageContent';

export default async function ThemePage({ params }: {
  params: { theme: string };
}) {
  return (
    <ThemeSwitcher slug={params.theme}>
      <PageContent />
    </ThemeSwitcher>
  );
}

