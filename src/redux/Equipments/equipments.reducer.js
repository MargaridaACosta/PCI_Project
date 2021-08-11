import equipmentsTypes from './equipments.types';

const INITIAL_STATE = {
    equipments: [],
    equipment: {}
};

const equipmentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case equipmentsTypes.SET_EQUIPMENTS:
            return {
                ...state,
                equipments: action.payload
            }
        case equipmentsTypes.SET_EQUIPMENT:
            return {
                ...state,
                equipment: action.payload
            }
        default:
            return state;

    }
};

export default equipmentsReducer;