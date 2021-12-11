import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginCp from '../components/auth/LoginCp';
import { loginAsync } from '../modules/user';

const LoginContainerCp = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { id, isLogin } = useSelector(({ user }) => ({
    id: user.userid,
    isLogin: user.isLogin,
  }));
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin === true) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const onClick = useCallback(
    (userid, password) => dispatch(loginAsync(userid, password)),
    [dispatch]
  );

  const onChangeId = useCallback((e) => setUserid(e.target.value), []);

  const onChangePw = useCallback((e) => setPassword(e.target.value), []);

  return (
    <>
      {!isLogin && (
        <LoginCp
          onClick={onClick}
          onChangeId={onChangeId}
          onChangePw={onChangePw}
          userid={userid}
          password={password}
        />
      )}
    </>
  );
};

export default React.memo(LoginContainerCp);
