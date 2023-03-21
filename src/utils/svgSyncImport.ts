import React, { useEffect, useRef, useState } from 'react';
import { filesMap } from './generateSvgName';

const findSvgFolder = (name: string) => {
  let folder = '';
  for (let key in filesMap) {
    for (let svgName of filesMap[key]) {
      if (svgName === name) {
        folder = key;
        break;
      }
    }
  }
  return folder;
};

export function svgSyncImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const importSvgIcon = async () => {
      try {
        const folder = findSvgFolder(iconName);
        importedIconRef.current = (
          await import(`../assets/${folder}/${iconName}.svg`)
        ).ReactComponent;
        setFinished(true);
      } catch (err) {
      } finally {
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { finished, SvgIcon: importedIconRef.current };
}
