import React, { FC } from 'react';
import { useMemoizedFn } from 'ahooks';
import classnames from 'classnames';
import { useLazySearchUsersQuery, User } from '../../store';
import { debounce, omit } from 'lodash-es';
import LookupUserResults from './LookupUserResults';
import { formatCashTag, formatName } from '../../utils';

export type UsersHash = {
  [cashTag: string]: Partial<User>;
};
export interface LookupUserInputProps {
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUsers: UsersHash;
  setSelectedUsers: React.Dispatch<React.SetStateAction<UsersHash>>;
}

const normalizeKey = (input: string) =>
  input.length <= 2
    ? input
    : (input[0] === '$' ? input.slice(1) : input).toLocaleLowerCase();

export const LookupUserInput: FC<LookupUserInputProps> = (props) => {
  const { selectedUsers, setSelectedUsers, hasError, setHasError } = props;
  const [to, setTo] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [getSearch, { data: searchResults }] = useLazySearchUsersQuery();
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  const addUser = (usr: User) => {
    console.debug('[DEBUG] selecting user:', JSON.stringify(usr, null, 2));
    setSelectedUsers({ ...selectedUsers, [usr.cashTag]: usr });
    setTo('');
    clearErrors();
  };

  const addIfValid = (str: string) => {
    if (!searchResults) return;
    const key = normalizeKey(str);
    const usr = searchResults?.find(
      (x) =>
        x.cashTag.toLocaleLowerCase() === key ||
        x?.email?.find((e) => e.email.toLocaleLowerCase() === key),
    );
    if (usr) addUser(usr);
    return usr;
  };

  const clearErrors = () => {
    hasError && setHasError(false);
    errorMessage.length && setErrorMessage('');
  };

  const handleSearch = useMemoizedFn((input: string) => {
    if (input.length < 2) return;
    /* getSearch({ query: input + ':*', match: 'relevance' }, true); */
    getSearch({ query: input, match: 'prefix' }, true);
  });

  // debounced + memoized search
  const search = React.useCallback(
    debounce(handleSearch, 400, { leading: false, trailing: true }),
    [],
  );

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    clearErrors();
    setShowSuggestions(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowSuggestions(false);

    if (e.target.value.length > 0 && !addIfValid(e.target.value)) {
      setHasError(true);
      setErrorMessage(
        `'${e.target.value}' is not a valid Cashtag, phone number, or email address`,
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const str = e.target.value.trim();
    setTo(str);
    search(str.toLocaleLowerCase());
  };

  /* const onKeyDown = (e: React.In) */

  return (
    <div
      className={classnames('field static-label-field customer-chooser ember-view', {
        'is-invalid': hasError,
      })}
    >
      <label>To:</label>
      <div className='recipients flex-container flex-h'>
        <div className='token-list'>
          {Object.values(selectedUsers).map((usr) => (
            <div
              key={usr.cashTag}
              title={formatCashTag(usr)}
              className='tokenized-customer ember-view'
            >
              <div className='display-name truncate-text'>{formatName(usr)}</div>
              <a
                className='remove cursor-pointer'
                onClick={() => setSelectedUsers(omit(selectedUsers, usr.cashTag))}
              ></a>
            </div>
          ))}

          <input
            type='text'
            autoComplete='off'
            spellCheck='false'
            placeholder='Name, $Cashtag, SMS, Email'
            autoCorrect='false'
            autoCapitalize='off'
            className='live-input ember-text-field ember-view'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={to}
          />
        </div>
      </div>
      <div className='anchor'>
        <div
          className={classnames('list-picker customer-list-picker ember-view', {
            show: showSuggestions,
          })}
        >
          <LookupUserResults
            results={searchResults}
            selectedUsers={selectedUsers}
            addUser={addUser}
          />
        </div>

        <div
          className={classnames('error-container ', {
            show: errorMessage.length > 0,
          })}
        >
          <p className='error-message'>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default LookupUserInput;
