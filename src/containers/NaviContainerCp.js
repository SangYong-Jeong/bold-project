import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NaviWrapCp from '../components/common/NaviWrapCp';
import { logoutAsync } from '../modules/user';

const NaviContainerCp = () => {
  const { isLogin } = useSelector(({ user }) => ({
    id: user.userid,
    isLogin: user.isLogin,
  }));
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAsync());
  }, [dispatch]);

  return <NaviWrapCp isLogin={isLogin} onLogout={onLogout} />;
};

export default React.memo(NaviContainerCp);
