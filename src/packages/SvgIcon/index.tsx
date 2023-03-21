import { svgNameTypes } from '../types';
import { svgSyncImport } from 'utils/svgSyncImport';
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
  svgProp?: React.SVGProps<SVGSVGElement>;
  linearGradient?: Partial<LinearGradient>;
  [index: string]: any;
}
const lowercased = (word: string) => word.charAt(0).toLowerCase() + word.slice(1);
function SvgIconComponents(props: SvgIconProps) {
  const { name, svgProp, linearGradient, style, ...rest } = props;
  const { SvgIcon, finished } = svgSyncImport(lowercased(name));
  return (
    <>
      {linearGradient && (
        <svg
          style={{
            width: 0,
            height: 0,
            position: 'absolute',
          }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient
            id={`reactSvg-gradient-${name}`}
            x1={linearGradient.x1 ?? 0}
            x2={linearGradient.x2 ?? 0}
            y1={linearGradient.y1 ?? 0}
            y2={linearGradient.y2 ?? 1}
          >
            {linearGradient.linears ? (
              linearGradient.linears.map((linear) => (
                <stop offset={linear.offset ?? 0} style={{ stopColor: linear.stopColor }} />
              ))
            ) : (
              <>
                <stop offset="0%" style={{ stopColor: 'rgba(84, 182, 254, 1)' }} />
                <stop offset="100%" style={{ stopColor: 'rgba(173, 232, 209, 1)' }} />
              </>
            )}
          </linearGradient>
        </svg>
      )}
      {finished
        ? SvgIcon && (
            <SvgIcon
              {...svgProp}
              {...rest}
              style={
                style || {
                  width: '1em',
                  height: '1em',
                  fill: linearGradient ? `url(#reactSvg-gradient-${name})` : 'currentcolor',
                  verticalAlign: 'middle',
                }
              }
            />
          )
        : ''}
    </>
  );
}

export default SvgIconComponents;
