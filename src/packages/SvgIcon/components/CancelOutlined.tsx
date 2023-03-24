
  import { SvgIconProps } from '../../types';

  const CancelOutlined = (props: Partial<SvgIconProps>) => {
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
              id='svg-gradient-CancelOutlined'
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
        <svg width="1em"  focusable="false" aria-hidden="true" fill="currentColor" viewBox="0 0 1024 1024" version="1.1"
        style={
          style || {
            width: '1em',
            height: '1em',
            fill: linearGradient ? 'url(#svg-gradient-CancelOutlined)' : 'currentcolor',
            verticalAlign: 'middle',
          }
        }
        {...rest}
     xmlns="http://www.w3.org/2000/svg">

<path  d="M514.438095 1002.057143c-268.190476 0-487.619048-219.428571-487.619047-487.619048 0-270.628571 219.428571-487.619048 487.619047-487.619047s487.619048 219.428571 487.619048 487.619047c-2.438095 268.190476-219.428571 487.619048-487.619048 487.619048zM99.961905 512c0 226.742857 185.295238 412.038095 412.038095 414.47619 221.866667 0 412.038095-175.542857 414.47619-407.161904 4.87619-226.742857-173.104762-412.038095-399.847619-419.352381C299.885714 92.647619 99.961905 273.066667 99.961905 512zM512 551.009524H243.809524c-26.819048 0-43.885714-24.380952-36.571429-48.761905 4.87619-14.628571 17.066667-24.380952 34.133334-24.380952H780.190476c21.942857 0 36.571429 12.190476 39.009524 31.695238 2.438095 19.504762-12.190476 41.447619-34.133333 41.447619H512z" /></svg>

      </>
    );
  };
  export default CancelOutlined;
  