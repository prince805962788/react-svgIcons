export function generateTemplate(componentsName, svgXml) {
  return `
  import { SvgIconProps } from '../../types';

  const ${componentsName} = (props: Partial<SvgIconProps>) => {
    const { name, linearGradient, style, ...rest } = props;
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
              id='svg-gradient-${componentsName}'
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
        ${svgXml}
      </>
    );
  };
  export default ${componentsName};
  `;
}
