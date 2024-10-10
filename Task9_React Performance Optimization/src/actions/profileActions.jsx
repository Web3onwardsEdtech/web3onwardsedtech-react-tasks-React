import axios from 'axios';

export const addProfile = profile => ({
    type: 'ADD_PROFILE',
    payload: profile
});

export const removeProfile = profileId => ({
    type: 'REMOVE_PROFILE',
    payload: profileId
});

export const fetchProfiles = () => {
    return async dispatch => {
        try {
            // Logic to fetch profiles from API
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };
};

export const setProfiles = profiles => ({
    type: 'SET_PROFILES',
    payload: profiles
});
