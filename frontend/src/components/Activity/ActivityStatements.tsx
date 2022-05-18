import React, { FC } from 'react';

export interface ActivityStatementsProps {}

const ActivityStatements: FC<ActivityStatementsProps> = () => {
  return (
    <div className='flyout-menu activity-statement-selector'>
      <div className='scroll-container activity-available-statement-list'>
        <a
          href='/documents/transaction-history'
          target='_blank'
          rel='noopener noreferrer'
          title='Export CSV'
          data-link-label='Download CSV'
          className='export-csv'
        >
          Export CSV
        </a>
        <a
          href='/statements/April-2022'
          className='activity-statement-selector-item'
        >
          {' '}
          April 2022
        </a>
        <a
          href='/statements/March-2022'
          className='activity-statement-selector-item'
        >
          {' '}
          March 2022
        </a>
        <a
          href='/statements/February-2022'
          className='activity-statement-selector-item'
        >
          {' '}
          February 2022
        </a>
        <a
          href='/statements/January-2022'
          className='activity-statement-selector-item'
        >
          {' '}
          January 2022
        </a>
        <a
          href='/statements/December-2021'
          className='activity-statement-selector-item'
        >
          {' '}
          December 2021
        </a>
        <a
          href='/statements/November-2021'
          className='activity-statement-selector-item'
        >
          {' '}
          November 2021
        </a>
        <a
          href='/statements/October-2021'
          className='activity-statement-selector-item'
        >
          {' '}
          October 2021
        </a>
        <a
          href='/statements/September-2021'
          className='activity-statement-selector-item'
        >
          {' '}
          September 2021
        </a>
      </div>
    </div>
  );
};

export default ActivityStatements;
