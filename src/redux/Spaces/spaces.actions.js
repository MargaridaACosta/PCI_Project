import spacesTypes from './spaces.types';

export const addSpaceStart = spaceData => ({
    type: spacesTypes.ADD_NEW_SPACE_START,
    payload: spaceData
});

export const fetchSpacesStart = (filters = {}) => ({
    type: spacesTypes.FETCH_SPACES_START,
    payload: filters
});

export const setSpaces = spaces => ({
    type: spacesTypes.SET_SPACES,
    payload: spaces
});

export const deleteSpaceStart = spaceID => ({
    type: spacesTypes.DELETE_SPACE_START,
    payload: spaceID
})

export const fetchSpaceStart = spaceID => ({
    type: spacesTypes.FETCH_SPACE_START,
    payload: spaceID
})

export const setSpace = space => ({
    type: spacesTypes.SET_SPACE,
    payload: space
})

export const editSpaceStart = spaces => ({
    type: spacesTypes.EDIT_SPACE_START,
    payload: spaces
})