import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterCp from '../components/auth/RegisterCp';
import { registerAsync } from '../modules/user';

const RegisterContainerCp = () => {
  let compareid = useRef('');
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = useCallback(
    (userid, password) => dispatch(registerAsync(userid, password)),
    [dispatch]
  );
  compareid.current = userid;

  const { userid: id } = useSelector(({ user }) => user);

  useEffect(() => {
    if (compareid.current === id) {
      navigate('/');
      setUserid('');
    }
  }, [id, navigate]);

  const onChangeId = useCallback((e) => setUserid(e.target.value), []);

  const onChangePw = useCallback((e) => setPassword(e.target.value), []);

  return (
    <RegisterCp
      onClick={onClick}
      onChangeId={onChangeId}
      onChangePw={onChangePw}
      userid={userid}
      password={password}
    />
  );
};

export default React.memo(RegisterContainerCp);
