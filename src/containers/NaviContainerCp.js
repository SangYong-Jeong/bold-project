import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NaviWrapCp from '../components/common/NaviWrapCp';
import { logoutAsync } from '../modules/user';

const NaviContainerCp = () => {
  const { isLogin } = useSelector(({ user }) => ({
    id: user.userid,
    isLogin: user.isLogin,
  }));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLogout = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logoutAsync());
      alert('로그아웃 되었습니다.');
      navigate('/');
    },
    [dispatch, navigate]
  );

  return <NaviWrapCp isLogin={isLogin} onLogout={onLogout} />;
};

export default React.memo(NaviContainerCp);
