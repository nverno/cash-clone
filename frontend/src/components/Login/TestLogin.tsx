import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { testCreds } from '../../mocks';
import { useLoginMutation } from '../../store';
import { sitFor } from '../../utils';

export interface TestLoginProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const TestLogin: FC<TestLoginProps> = (props) => {
  const { setInput } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setInput('');
    for (let i = 0; i < testCreds.identifier.length; i++) {
      setInput(testCreds.identifier.slice(0, i + 1));
      await sitFor(40);
    }

    await login(testCreds).unwrap();
    navigate(location.state?.from?.pathname || '/account/activity');
  };

  return (
    <button onClick={handleLogin} className='w-[400px] button theme-button'>
      Sign in as test user
    </button>
  );
};

export default TestLogin;
