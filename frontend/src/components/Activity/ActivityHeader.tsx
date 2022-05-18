import React, { FC } from 'react';
import classnames from 'classnames';
import { useOutsideClick } from '../../hooks';
import ActivityStatements from './ActivityStatements';

export interface ActivityHeaderProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const ActivityHeader: FC<ActivityHeaderProps> = (props) => {
  const { setSearchTerm, searchTerm } = props;
  const [searchActive, setSearchActive] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState('Search');
  const $ref = React.useRef<HTMLInputElement>(null);

  useOutsideClick($ref, () => {
    setSearchActive(false);
    setPlaceholder('Search');
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value.trim());
  };

  return (
    <header className='activity-header flex-static'>
      <div className='header-content flex-container flex-h'>
        <label htmlFor='search_term' className='header-icon icon-search' />
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
              onChange={handleChange}
              onClick={() => {
                setSearchActive(true);
                setPlaceholder('Search transactions by name, amount, or note');
              }}
              placeholder={placeholder}
              value={searchTerm}
            />
          </div>
        </form>
        <a
          href='#'
          onClick={(e) => e.preventDefault()}
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

      <ActivityStatements />
    </header>
  );
};

export default ActivityHeader;
