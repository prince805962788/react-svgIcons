import { SvgIcon } from './packages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { filesMap } from './utils/generateSvgName';
import styles from '../src/styles/index.module.less';
import { copyTextToClipboard } from './utils/copyTextToClipboard';

const capitalized = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
function App() {
  const copyCode = (name: string) => {
    const text = `<SvgIcon name="${capitalized(name)}" />`;
    copyTextToClipboard(text);
  };
  return (
    <div className={styles.container}>
      <header>点击icon复制代码</header>
      {Object.keys(filesMap).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <div className={styles.svgGroup}>
            {filesMap[key].map((name) => (
              <div className={styles.svgItem} key={name} onClick={() => copyCode(name)}>
                <SvgIcon
                  name={name}
                  linearGradient={{
                    x1: '0%',
                    y1: '0%',
                    x2: '0%',
                    y2: '100%',
                    linears: [
                      { offset: '0%', stopColor: 'rgba(123, 108, 235, 1)' },
                      { offset: '100%', stopColor: 'rgba(61, 100, 242, 1)' },
                    ],
                  }}
                />
                {capitalized(name)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const render =
  import.meta.env.MODE === 'production' ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  );
ReactDOM.createRoot(document.getElementById('root')!).render(render);
