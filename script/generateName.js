import * as fs from 'fs';
import * as path from 'path';

const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);
async function generateNames() {
  const componentsDir = path.resolve('src/assets/');
  const componentsNames = fs.readdirSync(componentsDir);
  const svgNames = [];
  for (const file of componentsNames) {
    const svgs = await fs.readdirSync(`${componentsDir}/${file}`);
    const names = svgs.map((name) => name.replace(/\.svg/, ''));
    svgNames.push(...names);
  }
  const deletePath = 'src/packages/types.ts';
  if (fs.existsSync(deletePath)) {
    await fs.unlinkSync(deletePath);
  }
  await fs.writeFileSync(
    'src/packages/types.ts',
    `export type svgNameTypes = ${svgNames
      .map((item) => JSON.stringify(capitalized(item)))
      .join(' | ')}`,
    (err) => {
      if (err) {
        console.log('写入失败', err);
      }
    },
  );
}
generateNames();
