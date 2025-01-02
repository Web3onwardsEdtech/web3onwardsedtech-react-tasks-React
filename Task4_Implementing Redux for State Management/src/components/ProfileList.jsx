// src/components/ProfileList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfiles, addProfile, removeProfile } from '../actions/profileActions';

const ProfileList = () => {
    const profiles = useSelector(state => state.profiles.profiles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfiles());
    }, [dispatch]);

    const handleAddProfile = () => {
        const newProfile = { id: Date.now(), name: 'New User', occupation: 'Developer' };
        dispatch(addProfile(newProfile));
    };

    const handleRemoveProfile = (profileId) => {
        dispatch(removeProfile(profileId));
    };

    return (
        <div>
            <h2>Profile List</h2>
            <button onClick={handleAddProfile}>Add Profile</button>
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}> {/* Ensure there's a unique key for each list item */}
                        {profile.name} - {profile.occupation}
                        <button onClick={() => handleRemoveProfile(profile.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileList;