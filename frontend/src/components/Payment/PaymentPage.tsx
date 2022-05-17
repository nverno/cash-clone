import React, { FC } from 'react';
import { DefaultProps } from '../../App';

export interface PaymentPageProps extends DefaultProps {}

const PaymentPage: FC<PaymentPageProps> = (props) => {
  const { user: _ } = props;

  React.useLayoutEffect(() => {
    const cur = document.body.className;
    document.body.classList.remove('theme-light-gray', 'theme-green');
    document.body.classList.add('theme-green');
    // eslint-disable-next-line
    () => (document.body.className = cur);
  }, []);

  return <div></div>;
};

export default PaymentPage;
