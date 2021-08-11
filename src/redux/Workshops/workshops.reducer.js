import workshopsTypes from './workshops.types';

const INITIAL_STATE = {
    workshops: [],
    workshop: {}
};

const workshopsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case workshopsTypes.SET_WORKSHOPS:
            return {
                ...state,
                workshops: action.payload
            }
        case workshopsTypes.SET_WORKSHOP:
            return {
                ...state,
                workshop: action.payload
            }
        default:
            return state;

    }
};

export default workshopsReducer;