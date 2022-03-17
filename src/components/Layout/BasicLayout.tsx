import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { logout, selectUser } from '../../redux/slices/auth';
import { IAuthUser } from '../../types/user';

const BasicLayout: React.FC = ({ children }) => {
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div>{currentUser && <a onClick={handleLogout}>Log out</a>}</div>
      {children}
    </div>
  );
};

export default BasicLayout;
