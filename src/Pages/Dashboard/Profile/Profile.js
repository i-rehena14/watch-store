import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>My Profile</h2>
            <h3>Username : {user.displayName}</h3>
            <h4>Email : {user.email}</h4>
        </div>
    );
};

export default Profile;