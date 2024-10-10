import React from 'react';

const Profile = ({ user }) => {
    // State and event handling can be added here

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.occupation}</p>
            {/* Add a button and state logic here */}
        </div>
    );
};

export default Profile;
