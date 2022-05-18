import classnames from 'classnames';
import React, { FC } from 'react';
import { User } from '../../store';
import { formatCashTag, formatName } from '../../utils';

export interface LookupUserResultsProps {
  results?: User[];
  addUser;
  selectedUsers?: { [id: string]: User };
}

const LookupUserResults: FC<LookupUserResultsProps> = (props) => {
  const { addUser, results = [], selectedUsers = {} } = props;

  return (
    <ul className='results'>
      {results.map((user, idx) => (
        <li
          key={user.cashTag}
          tabIndex={idx + 1}
          onFocusCapture={() => addUser(user)}
          className='customer-list-item has-focus ember-view'
        >
          <i
            style={{
              width: '40px',
              height: '40px',
              fontSize: '20px',
              lineHeight: '40px',
            }}
            className='customer-avatar has-image ember-view'
          >
            <img
              src='https://cash-images-f.squarecdn.com/apps/imgs/9ZydaYiHwbs6U0u9nQIOHB.jpeg?width=40'
              className='avatar-image'
            />
          </i>
          <div className='name'>
            <h3 className='display-name display-name-with-icon ember-view'>
              <span className='name '>{formatName(user)}</span>
            </h3>
            <p className='alias'>{formatCashTag(user)}</p>
          </div>
          <i
            className={classnames('selection-indicator', {
              'is-selected': user.cashTag in selectedUsers,
            })}
          ></i>
        </li>
      ))}
    </ul>
  );
};

export default LookupUserResults;
