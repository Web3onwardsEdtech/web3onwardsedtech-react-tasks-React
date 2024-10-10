import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfiles, addProfile, removeProfile } from '../actions/profileActions';

const ProfileList = () => {
    const profiles = useSelector(state => state.profiles.profiles);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch profiles on component mount
        dispatch(fetchProfiles());
    }, [dispatch]);

    const handleAddProfile = () => {
        // Logic to add a new profile
    };

    const handleRemoveProfile = (profileId) => {
        // Logic to remove a profile
    };

    return (
        <div>
            <h2>Profile List</h2>
            <button onClick={handleAddProfile}>Add Profile</button>
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}>
                        {profile.name} - {profile.occupation}
                        <button onClick={() => handleRemoveProfile(profile.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileList;
