import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';
import { generateTemplate } from './generateTemplate.js';
// 首字母转大写
const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);
// 处理renderTsx内容
function handleTsx(tsx, name) {
  const validTsxMatch = tsx.match(/<svg.*?<\/svg>/);
  let vaildTsx = tsx;
  if (validTsxMatch) {
    vaildTsx = validTsxMatch[0];
  }
  vaildTsx = vaildTsx.replace(/class=".*?"/, '');
  vaildTsx = vaildTsx.replace(/style=".*?"/, '');
  vaildTsx = vaildTsx.replace(/height=".*?"/, '');
  vaildTsx = vaildTsx.replace(/t="\w*?"/, '');
  vaildTsx = vaildTsx.replace('<?xml version="1.0" encoding="utf-8"?>', '');
  vaildTsx = vaildTsx.replace('xmlns:xlink', 'xmlnsXlink');
  vaildTsx = vaildTsx.replace('xml:space', 'xmlSpace');
  const insertIndex = vaildTsx.indexOf(`xmlns="http://www.w3.org/2000/svg"`);
  if (insertIndex <= 0) {
    return generateTemplate(name, vaildTsx);
  } else {
    const newTsx =
      vaildTsx.slice(0, insertIndex - 1) +
      `
        style={
          style || {
            width: '1em',
            height: '1em',
            fill: linearGradient ? 'url(#svg-gradient-${name})' : 'currentcolor',
            verticalAlign: 'middle',
          }
        }
        {...rest}
    ` +
      vaildTsx.slice(insertIndex - 1);
    return generateTemplate(name, newTsx);
  }
}
// 生成相应组件文件
async function generateSvgComponents(name, content) {
  await fs.writeFileSync(`src/packages/SvgIcon/components/${name}.tsx`, content, (err) => {
    if (err) {
      console.log('组件文件写入失败', err);
    }
  });
}
// 生成组件导出文件
async function generateExportIcons(svgUpperNames) {
  let content = `
  export { default as filesMap } from '../utils/filesMap';
  export { default as SvgIcon } from './SvgIcon';
`;
  for (const name of svgUpperNames) {
    content += `
  export { default as ${name} } from './SvgIcon/components/${name}';`;
  }
  const deleteFile = 'src/packages/index.ts';
  if (fs.existsSync(deleteFile)) {
    await fs.unlinkSync(deleteFile);
  }
  await fs.writeFileSync('src/packages/index.ts', content, (err) => {
    if (err) {
      console.log('导出组件文件写入失败', err);
    }
  });
}
// 生成类型文件
async function generateTypes(svgUpperNames) {
  const deletePath = 'src/packages/types.ts';
  if (fs.existsSync(deletePath)) {
    await fs.unlinkSync(deletePath);
  }
  await fs.writeFileSync(
    'src/packages/types.ts',
    `
    export interface LinearGradient {
      x1: number | string;
      x2: number | string;
      y1: number | string;
      y2: number | string;
      linears: { offset: number | string; stopColor: string }[];
    }
    export interface SvgIconProps {
      name: svgNameTypes;
      style?: React.CSSProperties;
      linearGradient?: Partial<LinearGradient>;
      [index: string]: any;
    }
    export type svgNameTypes = ${svgUpperNames.map((item) => JSON.stringify(item)).join(' | ')}`,
    (err) => {
      if (err) {
        console.log('类型文件写入失败', err);
      }
    },
  );
}
// 生成svg名字映射文件
async function generateFilesMap(svgFileNames) {
  const deletePath = 'src/utils/filesMap.ts';
  if (fs.existsSync(deletePath)) {
    await fs.unlinkSync(deletePath);
  }
  let content = `const filesMap: Record<string, string[]> = ${JSON.stringify(svgFileNames)};
  export default filesMap;`;
  await fs.writeFileSync('src/utils/filesMap.ts', content, (err) => {
    if (err) {
      console.log('映射文件写入失败', err);
    }
  });
}
async function generateRender() {
  const componentsDir = path.resolve('src/assets/');
  const componentsNames = await fs.readdirSync(componentsDir);
  const svgFileNames = {};
  const svgUpperNames = [];
  for (const folder of componentsNames) {
    const svgs = await fs.readdirSync(`${componentsDir}/${folder}`);
    for (const file of svgs) {
      const svgContent = await fs.readFileSync(`${componentsDir}/${folder}/${file}`);
      const componentsName = capitalized(file.replace(/\.svg/, ''));
      let renderTsx = await ejs.renderFile(path.resolve('script/generateTsx.ejs'), {
        svgContent,
        componentsName,
      });
      const newContent = handleTsx(renderTsx, componentsName);
      await generateSvgComponents(componentsName, newContent);
    }
    const names = svgs.map((name) => name.replace(/\.svg/, ''));
    const upperNames = names.map((name) => capitalized(name));
    svgUpperNames.push(...upperNames);
    svgFileNames[folder] = svgFileNames[folder] || [];
    svgFileNames[folder].push(...names);
  }
  await generateTypes(svgUpperNames);
  await generateExportIcons(svgUpperNames);
  await generateFilesMap(svgFileNames);
}
generateRender();
