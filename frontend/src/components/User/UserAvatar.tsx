import React, { FC } from 'react';
import { User } from '../../store';
import { formatInitial } from '../../utils';

export interface UserAvatarProps extends React.HTMLProps<HTMLSpanElement> {
  user: User;
  fontSize?: number;
  backgroundColor?: string;
}

export const UserAvatar: FC<UserAvatarProps> = (props) => {
  const { user, fontSize = 14, backgroundColor = '#FB60C4', ...htmlProps } = props;
  const width = fontSize * 2 + (fontSize % 2);

  if (!user) return null;
  return (
    <i
      style={{
        width: `${width}px`,
        height: `${width}px`,
        fontSize: `${fontSize}px`,
        lineHeight: `${width}px`,
        backgroundColor,
      }}
      className='customer-avatar'
      {...htmlProps}
    >
      {' '}
      <div className='initial-placeholder'>{formatInitial(user)}</div>
    </i>
  );
};

export default UserAvatar;
