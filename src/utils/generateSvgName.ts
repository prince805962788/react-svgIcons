import { svgNameTypes } from '../packages/types';
export function generateSvgName() {
  const files = import.meta.globEager('../assets/*/*.svg');
  const svgMap: Record<string, svgNameTypes[]> = {};
  for (const key in files) {
    const foldername = key.replace(/(\.\.\/assets\/|\.svg)/g, '');
    const [folder, file] = foldername.split('/');
    svgMap[folder] = svgMap[folder] || [];
    svgMap[folder].push(file as svgNameTypes);
  }
  return svgMap;
}
export const filesMap = generateSvgName();
