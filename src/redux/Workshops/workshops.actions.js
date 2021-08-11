import workshopsTypes from './workshops.types';

export const addWorkshopStart = workshopData => ({
    type: workshopsTypes.ADD_NEW_WORKSHOP_START,
    payload: workshopData
});

export const fetchWorkshopsStart = (filters = {}) => ({
    type: workshopsTypes.FETCH_WORKSHOPS_START,
    payload: filters
});

export const setWorkshops = workshops => ({
    type: workshopsTypes.SET_WORKSHOPS,
    payload: workshops
});

export const deleteWorkshopStart = workshopID => ({
    type: workshopsTypes.DELETE_WORKSHOP_START,
    payload: workshopID
})

export const fetchWorkshopStart = workshopID => ({
    type: workshopsTypes.FETCH_WORKSHOP_START,
    payload: workshopID
})

export const setWorkshop = workshop => ({
    type: workshopsTypes.SET_WORKSHOP,
    payload: workshop
})

export const editWorkshopStart = workshops => ({
    type: workshopsTypes.EDIT_WORKSHOP_START,
    payload: workshops
})