import React, { FC } from 'react';
import Landing from './landing.html?raw';

export interface LandingPageProps {}

export const LandingPage: FC<LandingPageProps> = () => {
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight}px`,
    );
    const cls = document.body.className;
    document.body = document.createElement('body');
    document.body.innerHTML = Landing;
    () => (document.body.className = cls); // eslint-disable-line
  }, []);
  return <></>;
};

export default LandingPage;
