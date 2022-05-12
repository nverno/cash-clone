import classnames from 'classnames';
import React, { FC } from 'react';
import { DefaultProps } from '../../App';
import { formatCreditCard, formatName } from '../../utils';

export interface MyCardProps extends DefaultProps {}

const MyCard: FC<MyCardProps> = props => {
  const { user } = props
  const [showMenu, setShowMenu] = React.useState(false);
  
  return (
    <div
      className="card-likeness-section"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="card-likeness"><div className="card-inner">
        <div
          typeof='button'
          className="card-number {{unless card.pan 'locked'}} copy-btn">
          <div className="tooltip-bubble">Copied!</div>
          <div className="card-number-wrapper flex justify-between">
            <div className="card-number-section">••••</div>
            <div className="card-number-section">••••</div>
            <div className="card-number-section">••••</div>
            <div className="card-number-section">{formatCreditCard(user)}</div>
          </div>
        </div>
        
        <div className="card-bottom">
          <div className="card-details">
            <div className="cardholder-name">{formatName(user)}</div>
            <span className="card-expiry-text">Card Not Activated</span>
          </div>
          <div className="inline-svg card-logo mr-[-19px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="6"
              viewBox="0 0 21 6">
              <path d="M18.51 5.991s-.148-.792-.196-1l-2.06-.002c-.062.161-.338 1.002-.338 1.002h-1.689L16.616.494c.169-.387.457-.493.842-.493h1.243l1.301 5.99H18.51zm-.83-3.854l-.109-.512c-.081.223-.222.583-.213.567 0 0-.508 1.203-.641 1.545h1.335c-.064-.298-.372-1.6-.372-1.6zm-3.604-.661a2.936 2.936 0 0 0-1.203-.227c-.63 0-.921.264-.921.511-.004.278.34.461.902.736.928.424 1.357.846 1.351 1.521-.013 1.232-1.11 1.982-2.801 1.982-.721-.007-1.416-.151-1.791-.317l.225-1.329.208.094c.528.222.87.312 1.514.312.462 0 .958-.135.962-.533.003-.26-.208-.446-.834-.737-.61-.284-1.418-.668-1.409-1.521.01-1.154 1.129-1.959 2.718-1.959a4.13 4.13 0 0 1 1.441.249l-.218 1.287-.144-.069zM6.998 5.988L8.003.003h1.609L8.606 5.988H6.998zm-3.879.003L1.685.781c.869.478 1.527 1.115 1.948 1.855l.069.129c.038.072.069.147.103.221.037.088.075.176.102.264l.167.823L5.649 0h1.704L4.821 5.989l-1.702.002zm.514-3.355A4.849 4.849 0 0 0 1.679.759l.006.022A6.79 6.79 0 0 0 0 .128L.02.004h2.594c.349.013.631.125.729.501l.564 2.698c-.029-.074-.069-.145-.102-.217a3.645 3.645 0 0 0-.103-.221c-.023-.043-.045-.087-.069-.129z" fillRule="evenodd">
              </path>
            </svg>
          </div>
        </div>
      </div>

      <div className={classnames("action-overlay-menu layout-vertical", {
        'show-menu': showMenu
      })}>
        <div className="action-items">
          <div className="action-item flex-h virtual-card-visibility">
            <span className="title">Show Card Info</span>
            <div className="toggle-switch checked"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyCard;
