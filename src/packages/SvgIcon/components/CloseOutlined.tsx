
  import { SvgIconProps } from '../../types';

  const CloseOutlined = (props: Partial<SvgIconProps>) => {
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
              id='svg-gradient-CloseOutlined'
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
        <svg width="1em"  focusable="false" aria-hidden="true" fill="currentColor"  viewBox="0 0 1024 1024" version="1.1"
        style={
          style || {
            width: '1em',
            height: '1em',
            fill: linearGradient ? 'url(#svg-gradient-CloseOutlined)' : 'currentcolor',
            verticalAlign: 'middle',
          }
        }
        {...rest}
     xmlns="http://www.w3.org/2000/svg"><path d="M514.438095 414.47619c2.438095-2.438095 2.438095-4.87619 4.876191-7.314285 119.466667-119.466667 238.933333-241.371429 360.838095-360.838095 26.819048-26.819048 63.390476-29.257143 92.647619-9.752381 34.133333 24.380952 39.009524 73.142857 9.752381 104.838095-4.87619 2.438095-7.314286 4.87619-9.752381 7.314286L616.838095 504.685714c-2.438095 2.438095-4.87619 2.438095-7.314285 4.876191 2.438095 2.438095 4.87619 2.438095 7.314285 4.87619 119.466667 119.466667 241.371429 238.933333 360.838095 360.838095 21.942857 21.942857 29.257143 48.761905 17.066667 78.019048-17.066667 43.885714-73.142857 58.514286-109.714286 29.257143-2.438095-2.438095-7.314286-4.87619-9.752381-9.752381L516.87619 614.4c-2.438095-2.438095-2.438095-2.438095-4.87619-7.314286-2.438095 2.438095-2.438095 4.87619-4.87619 7.314286L146.285714 975.238095c-26.819048 26.819048-63.390476 29.257143-92.647619 9.752381-34.133333-24.380952-39.009524-73.142857-9.752381-104.838095l4.876191-4.876191 358.4-358.4c2.438095-2.438095 4.87619-2.438095 7.314285-4.87619v-2.438095c-2.438095-2.438095-4.87619-2.438095-7.314285-4.876191C287.695238 385.219048 168.228571 265.752381 46.32381 146.285714c-24.380952-24.380952-29.257143-58.514286-14.628572-85.333333 21.942857-41.447619 75.580952-48.761905 109.714286-14.628571l31.695238 31.695238 331.580952 331.580952c2.438095 2.438095 2.438095 4.87619 4.876191 7.314286 2.438095-2.438095 2.438095-2.438095 4.87619-2.438096z"/></svg>
      </>
    );
  };
  export default CloseOutlined;
  