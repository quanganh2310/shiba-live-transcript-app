import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import { selectUser } from '../../redux/slices/auth';

const Profile: React.FC = () => {
  const currentUser = useAppSelector(selectUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Email: </strong>
        {currentUser.email}
      </p>
      <p>
        <strong>Token: </strong>
        {currentUser.token}
      </p>
    </div>
  );
};

export default Profile;
