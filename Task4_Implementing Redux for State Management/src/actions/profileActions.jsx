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
            const response = await axios.get('/profiles.json');
            dispatch({ type: 'SET_PROFILES', payload: response.data });
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };
};

export const setProfiles = profiles => ({
    type: 'SET_PROFILES',
    payload: profiles
});
