import React, { FC } from 'react';

export interface PaymentFooterProps {}

const PaymentFooter: FC<PaymentFooterProps> = () => {
  return (
    <footer className='payment-footer'>
      <nav className='navigation payment-navigation-links'>
        <div className='legal is-hoverable'>
          <span className='theme-link-color'>Legal</span>
          <div className='inner-area legal-links'>
            <a
              href='https://cash.app/legal/tos'
              rel='noopener noreferrer'
              target='_blank'
              className='ember-view'
            >
              {' '}
              Legal
            </a>
            <a
              href='https://squareup.com/legal/licenses'
              rel='noopener noreferrer'
              target='_blank'
              className='ember-view'
            >
              {' '}
              Licenses
            </a>
            <a
              href='https://squareup.com/legal/privacy'
              rel='noopener noreferrer'
              target='_blank'
              className='ember-view'
            >
              {' '}
              Privacy
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default PaymentFooter;
