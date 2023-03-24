import { SvgIconProps, svgNameTypes } from '../types';
import * as allIcons from '../../packages';

// function SvgIconComponents(props: SvgIconProps) {
//   const { name, ...rest } = props;
//   const Component = () => {
//     const Render = React.lazy(() => import(`../SvgIcon/components/${name}.tsx`));
//     return <React.Suspense fallback={<></>}>{Render ? <Render {...rest} /> : ''}</React.Suspense>;
//   };
//   return <Component />;
// }

// export default SvgIconComponents;
// 首字母转大写
const capitalized = (word: string): svgNameTypes =>
  (word.charAt(0).toUpperCase() + word.slice(1)) as svgNameTypes;
function SvgIconComponents(props: SvgIconProps) {
  const { name, ...rest } = props;
  const Component = () => {
    const Render = allIcons[capitalized(name)];
    return <>{Render ? <Render {...rest} /> : ''}</>;
  };
  return <Component />;
}
export default SvgIconComponents;
