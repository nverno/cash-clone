import { debounce, isEmpty } from 'lodash-es';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DefaultProps } from '../../App';
import { useSetNameMutation } from '../../store';
import {
  formatBalance,
  formatCashTag,
  formatInitial,
  formatName,
  formatUserPhoneNumber,
} from '../../utils';

export interface SettingsPageProps extends DefaultProps {}

export const SettingsPage: FC<SettingsPageProps> = (props) => {
  const { user } = props;
  if (!user) return null;
  const [setName] = useSetNameMutation();
  const [displayName, setDisplayName] = React.useState(user?.username ?? user.name);

  const updateName = React.useCallback(
    debounce(
      (name: string) => {
        setName({ id: user.id, name: name.trim() });
      },
      500,
      { leading: false, trailing: true },
    ),
    [],
  );

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (isEmpty(name)) return;
    setDisplayName(name);
    updateName(name);
  };

  return (
    <div className='layout-edit-settings flex-container flex-v flex-fill'>
      <div className='edit-settings-header theme-white theme-bg'>
        <div className='customer-profile-simple'>
          <i style={{ backgroundColor: '#FB60C4' }} className='customer-avatar'>
            <div className='initial-placeholder'>{formatInitial(user)}</div>
            <div className='add-photo-placeholder'>Add Photo</div>
            <input type='file' accept='.jpg, .png, .jpeg, .gif' />
          </i>{' '}
          <h3 className='display-name display-name-with-icon'>
            <span className='name '>{formatName(user)}</span>
          </h3>
          <h3 className='cashtag'>
            <Link to={`/${formatCashTag(user)}`}>{formatCashTag(user)}</Link>
          </h3>
        </div>

        <a
          data-link-label='Settings Notifications'
          href='#'
          className='notification-prefs'
        >
          <span className='display-text show-at-sm'>Notifications</span>
          <div className='inline-svg hide-at-sm'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 32'>
              <g fill='none' fillRule='evenodd'>
                <path d='M13.174.725c-7.61.791-8.463 6.797-9.22 12.139-.511 3.607-1.039 7.338-3.462 9.859a1.75 1.75 0 0 0-.347 1.906C.424 25.277 1.292 26 2.001 26h26c.71 0 1.579-.725 1.858-1.375a1.751 1.751 0 0 0-.354-1.908c-2.444-2.521-2.976-6.249-3.491-9.856C25.251 7.516 24.39 1.509 16.717.722M20 28c0 2.499-2.117 4.002-4.634 4.002C12.849 32.002 11 30.499 11 28h9z'></path>
              </g>
            </svg>
          </div>
        </a>
      </div>

      <div className='edit-settings-panel pad'>
        <div className='config-column profile-items'>
          <h3 className='account-module-header'>Display Name</h3>
          <div className='account-module-container'>
            <div className='inline-editable-field display-name-field settings-display-field'>
              <div className='field fk-field-container'>
                <input
                  type='text'
                  aria-label='Display Name'
                  name='displayName'
                  autoComplete='off'
                  spellCheck='false'
                  autoCapitalize='off'
                  id='display_name'
                  placeholder='Display Name'
                  value={displayName}
                  onChange={handleChange}
                />
              </div>
              <div className='spinner-container'></div>
              <a className='icon-action-required'></a>
            </div>
          </div>

          <h3 className='account-module-header'>$Cashtag</h3>
          <div className='account-module-container cashtag'>
            <div className='settings-display-field cashtag has-edit-action'>
              {formatCashTag(user)}
            </div>
            <div className='settings-display-field toggle-field'>
              <div className='toggle-switch checked'></div>
              <h4 className='title'>Cash.app</h4>
              <p className='description'>
                Allow others to pay me at{' '}
                <Link
                  style={{ color: '#00d64f' }}
                  to={`/${formatCashTag(user)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  cash.app/{formatCashTag(user)}
                </Link>
              </p>
            </div>
          </div>

          <h3 className='account-module-header'>Address</h3>
          <div className='account-module-container address-container'>
            <div className='settings-display-field address editable truncate-text has-add-action'>
              Add Address
            </div>
          </div>

          <div className='privacy'>
            <h3 className='account-module-header'>Privacy</h3>
            <div className='account-module-container'>
              <div className='settings-display-field toggle-field'>
                <div className='toggle-switch checked'></div>
                <h4 className='title'>Incoming Requests</h4>
                <p className='description'>Allow others to request money from me</p>
              </div>
              <div className='deposit-options-list settings-submodule'>
                <div className='preference-list-item settings-display-field'>
                  <span className='display-text'>Allow All</span>
                  <i className='checkmark show'></i>
                </div>
                <div className='preference-list-item settings-display-field'>
                  <span className='display-text'>Contacts Only</span>
                  <i className='checkmark '></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='config-column funding-items mt-[25px]'>
          <h3 className='account-module-header'>Your Info</h3>
          <div className='account-module-container aliases'>
            <div className='settings-display-field truncate-text phone-number'>
              {formatUserPhoneNumber(user)}
              <a className='delete-button'></a>
            </div>
            <div className='settings-display-field truncate-text email-address'>
              {user.email?.length && user.email[0].email}
              <a className='delete-button'></a>
            </div>
            <div className='settings-display-field add-email-or-sms has-add-action'>
              Add Phone or Email
            </div>
            <div className='settings-display-field download-your-info'>
              <Link
                to='/documents/personal-data'
                target='_blank'
                rel='noopener noreferrer'
                title='Download a copy of your Cash App data'
                data-link-label='Download CSV'
                className='theme-link-color'
              >
                Download Your Info
              </Link>
            </div>
          </div>

          <h3 className='account-module-header'>Funds</h3>
          <div>
            <div className='account-module-container instruments-container'>
              <div className='instrument-item settings-display-field settings-instrument-item cash-balance'>
                <i className='instrument-icon'>
                  <img src='https://cash-f.squarecdn.com/ember/d418d4260ec383230fefbec17515c05978573c61/assets/images/instrument-balance.svg' />
                </i>
                <span className='instrument-identifier'>Cash Balance</span>
                <span className='available-funds '>{formatBalance(user)}</span>
              </div>
              <div className='instrument-item settings-display-field settings-instrument-item debit-card'>
                <i className='instrument-icon'>
                  <img src='https://cash-images-f.squarecdn.com/static/BofA.png?width=76' />
                </i>
                <span className='instrument-identifier'>Bank of America</span>
              </div>
            </div>
          </div>

          <h3 className='account-module-header mt-[25px]'>Security</h3>
          <div className='account-module-container security-lock-container'>
            <div className='theme-link-color settings-display-field change-passcode'>
              Change PIN
            </div>
            <div className='settings-display-field toggle-field'>
              <div className='toggle-switch checked'></div>
              <h4 className='title'>Security Lock</h4>
              <p className='description'>Require a PIN to transfer funds</p>
            </div>
          </div>

          <div className='legal-links'>
            <a
              href='https://cash.app/legal/tos'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              Legal
            </a>
            <a
              href='https://squareup.com/legal/privacy'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
              Privacy
            </a>
            <a href='/support'>Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
