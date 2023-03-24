
  import { SvgIconProps } from '../../types';

  const DisableOutlined = (props: Partial<SvgIconProps>) => {
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
              id='svg-gradient-DisableOutlined'
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
            fill: linearGradient ? 'url(#svg-gradient-DisableOutlined)' : 'currentcolor',
            verticalAlign: 'middle',
          }
        }
        {...rest}
     xmlns="http://www.w3.org/2000/svg" ><path d="M24.380952 512C24.380952 241.371429 243.809524 24.380952 509.561905 24.380952 777.752381 24.380952 999.619048 238.933333 999.619048 512c0 270.628571-219.428571 487.619048-485.180953 487.619048C246.247619 999.619048 24.380952 782.628571 24.380952 512z m117.028572-185.295238c-90.209524 175.542857-41.447619 421.790476 160.914286 541.257143 192.609524 114.590476 429.104762 48.761905 543.695238-114.590476-234.057143-141.409524-468.114286-282.819048-704.609524-426.666667z m39.009524-60.952381c234.057143 141.409524 470.552381 285.257143 704.609523 426.666667 85.333333-173.104762 39.009524-412.038095-158.47619-531.504762-187.733333-117.028571-424.228571-60.952381-546.133333 104.838095z" /></svg>
      </>
    );
  };
  export default DisableOutlined;
  