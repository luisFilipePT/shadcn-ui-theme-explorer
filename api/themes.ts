import { basename, join } from 'path';
import { glob } from 'glob';

const themesDir = join(process.cwd(), 'styles');

export async function getAllThemes() {
  const allThemePaths = await glob(`${themesDir}/themes/*.css`);

  const themes =
    allThemePaths.map((filePath) => {
        const fileName = basename(filePath);

        const slug = `${fileName.replace(
          '.css',
          '',
        )}`.toLowerCase();

        return slug;
      },
    );

  return themes;
}
