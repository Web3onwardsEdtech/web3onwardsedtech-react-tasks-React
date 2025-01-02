const initialState = {
    profiles: []
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROFILES':
            return { ...state, profiles: action.payload };
        case 'ADD_PROFILE':
            // Logic for adding a profile
            return {
                ...state,
                profiles: [...state.profiles,action.payload]
            };
        case 'REMOVE_PROFILE':
            // Logic for removing a profile
            return {
                ...state,
                profiles: state.profiles.filter(profile => profile.id !== action.payload)
            };
        
        default:
            return state;
    }
};

export default profileReducer;
