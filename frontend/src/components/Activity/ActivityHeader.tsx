import React, { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { useOutsideClick } from '.';

export interface ActivityHeaderProps {}

const ActivityHeader: FC<ActivityHeaderProps> = () => {
  const [searchActive, setSearchActive] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('Search');
  const $ref = React.useRef<HTMLInputElement>(null);
  const setListener = useOutsideClick($ref, () => {
    setSearchActive(false);
    setPlaceholder('Search');
  });

  return (
    <header className='activity-header flex-static'>
      <div className='header-content flex-container flex-h'>
        <label htmlFor='search_term' className='header-icon icon-search'>
          <SearchOutlined className='header-icon icon-search text-gray-400 text-[24px]' />
        </label>
        <form className='search-bar'>
          <div className='field fk-field-container'>
            <input
              id='search_term'
              ref={$ref}
              type='text'
              aria-label='Search'
              name='searchTerm'
              autoComplete='off'
              spellCheck={false}
              autoCapitalize='off'
              onClick={() => {
                setSearchActive(true);
                setPlaceholder('Search transactions by name, amount, or note');
                setListener();
              }}
              placeholder={placeholder}
            />
          </div>
        </form>
        <a
          href='#'
          title='Statements'
          data-link-label='Toggle statement selector'
          className={classnames(
            'header-icon icon-csv-download statement-selector-trigger',
            {
              hidden: searchActive,
            },
          )}
        >
          <span className='download-text'>Statements</span>
        </a>
      </div>

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
    </header>
  );
};

export default ActivityHeader;
