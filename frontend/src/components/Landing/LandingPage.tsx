import React, { FC } from 'react';
import Landing from './landing.html?raw';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks';
import homeUrl from '../../../assets/home-2021.min.js?url';
import homeCss from './home.css?url';

// import { useScript } from '../../hooks';

export interface LandingPageProps {}

const USE_ANIMATION = false;

export const LandingPage: FC<LandingPageProps> = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const status = useScript('./assets/home-2021.min.js');
  useTheme(null, ['theme-bg', 'theme-green', 'theme-light-gray', 'theme-white']);

  React.useLayoutEffect(() => {
    if (!(window && document)) return;
    /* if (location.pathname === '/') { */
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    /* import('./home.css'); */

    const styles = document.createElement('link');
    styles.href = homeCss;
    styles.rel = 'stylesheet';
    document.head.appendChild(styles);

    if (USE_ANIMATION) {
      let script: HTMLScriptElement = document.querySelector(
        `script[src="${homeUrl}"]`,
      );
      if (!script) {
        script = document.createElement('script');
        script.src = homeUrl;
        document.body.appendChild(script);
      }
    }
    /* const root = document.getElementById('root');
     * root.innerHTML = Landing; */
    return () => {
      styles.remove();
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      const loginButtons = document.querySelectorAll(
        "a[href='javascript: void(0)']",
      );
      if (!loginButtons) return;
      loginButtons.forEach((btn) =>
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          navigate('/login');
        }),
      );
    });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: Landing }} />
    </div>
  );
};

export default LandingPage;
