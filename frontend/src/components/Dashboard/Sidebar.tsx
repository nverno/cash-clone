import classnames from 'classnames';
import React, { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DefaultProps } from '../../App';
import { useLogoutMutation } from '../../store';
import SidebarProfile from './SidebarProfile';

export interface SidebarProps extends DefaultProps {}

type SidebarLinkType = 'activity' | 'mycash' | 'settings';

interface SidebarLink {
  type: SidebarLinkType;
  title: string;
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { user } = props;
  const location = useLocation();
  const [activeLink, setActiveLink] =
    React.useState<SidebarLinkType>('activity');
  const [signOut] = useLogoutMutation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const parts = location.pathname.split('/');
    const current = parts[parts.length - 1];
    if (current !== activeLink) setActiveLink(current as SidebarLinkType);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      navigate('/');
    } catch (err) {
      console.error('sign out:', err);
    }
  };

  const SidebarLink: FC<SidebarLink> = (props) => {
    const { type, title, children } = props;
    return (
      <Link
        to={`/account/${type}`}
        onClick={() => setActiveLink(type)}
        className={classnames('nav-item', type, {
          active: activeLink === type,
        })}
      >
        {children}
        <span className='nav-item-label'>{title}</span>
      </Link>
    );
  };
  return (
    <div className='!h-full account-navigation-bar flex-container theme-bg theme-green'>
      <SidebarProfile user={user} />

      <nav className='nav-items'>
        <SidebarLink type='activity' title='Activity'>
          <svg viewBox='0 0 100 100' className='inline-svg activity-badge'>
            <g>
              <circle cx='50' cy='50' r='50'></circle>
              <text x='50' y='70' fontSize='50' textAnchor='middle'>
                1
              </text>
            </g>
          </svg>
          <div className='inline-svg '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 22 22'
            >
              <g fill='#FFF' fillRule='evenodd'>
                <path d='M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z'></path>
                <path d='M12 6h-2v6.5l4.5 2.4 1-1.8-3.5-1.8V6z'></path>
              </g>
            </svg>
          </div>
        </SidebarLink>

        <SidebarLink type='mycash' title='Cash Card'>
          <div className='inline-svg '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 22 22'
            >
              <path
                d='M11 0c6.072 0 11 4.928 11 11s-4.928 11-11 11S0 17.072 0 11 4.928 0 11 0zm0 2c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm2.303 7.2a.288.288 0 0 0 .403-.009l.552-.569a.296.296 0 0 0-.014-.426 4.341 4.341 0 0 0-1.478-.844l.173-.838a.292.292 0 0 0-.283-.354h-1.065a.29.29 0 0 0-.283.233l-.156.744c-1.416.072-2.616.79-2.616 2.265 0 1.277.993 1.824 2.041 2.202.993.379 1.518.52 1.518 1.052 0 .547-.525.87-1.297.87-.705 0-1.443-.237-2.015-.81a.284.284 0 0 0-.404-.002l-.593.594a.299.299 0 0 0 .002.423 3.9 3.9 0 0 0 1.714.97l-.162.776a.292.292 0 0 0 .28.355l1.067.008a.29.29 0 0 0 .285-.233l.154-.746c1.696-.106 2.734-1.043 2.734-2.416 0-1.262-1.034-1.795-2.29-2.23-.717-.266-1.338-.448-1.338-.995 0-.533.58-.744 1.159-.744.74 0 1.449.305 1.913.724z'
                fillRule='nonzero'
              ></path>
            </svg>
          </div>
        </SidebarLink>

        <SidebarLink type='settings' title='Settings'>
          <div className='inline-svg '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='22'
              viewBox='0 0 23 22'
            >
              <g fill='#FFF' fillRule='evenodd'>
                <path d='M22.5 11c0-6.1-4.9-11-11-11S.5 4.9.5 11c0 4.7 2.9 8.7 7.1 10.3 1.1.5 2.4.7 3.9.7s2.9-.3 3.9-.7c4.2-1.6 7.1-5.6 7.1-10.3zm-5.4 7c-.8-1.2-3-2-5.6-2-2.6 0-4.8.8-5.6 2-2-1.7-3.4-4.2-3.4-7 0-5 4-9 9-9s9 4 9 9c0 2.8-1.3 5.3-3.4 7z'></path>
                <circle cx='11.5' cy='9' r='3'></circle>
              </g>
            </svg>
          </div>
        </SidebarLink>

        <a
          href='#'
          title='Sign Out'
          className='nav-item signout'
          onClick={handleSignOut}
        >
          <div className='inline-svg '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='22'
              viewBox='0 0 23 22'
            >
              <g fill='#FFF' fillRule='evenodd'>
                <path d='M11.5 22c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z'></path>
                <path d='M7 10h9v2H7z'></path>
              </g>
            </svg>
          </div>
          <span className='nav-item-label'>Sign Out</span>
        </a>
        <a
          href='#'
          data-link-label='Navbar Create Payment'
          title='New'
          className='nav-item create-payment'
        >
          <span className='button-text'>New</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
