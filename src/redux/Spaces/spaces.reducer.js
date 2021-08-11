import spacesTypes from './spaces.types';

const INITIAL_STATE = {
    spaces: [],
    space: {}
};

const spacesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case spacesTypes.SET_SPACES:
            return {
                ...state,
                spaces: action.payload
            }
        case spacesTypes.SET_SPACE:
            return {
                ...state,
                space: action.payload
            }
        default:
            return state;

    }
};

export default spacesReducer;