import equipmentsTypes from './equipments.types';

export const addEquipmentStart = equipmentData => ({
    type: equipmentsTypes.ADD_NEW_EQUIPMENT_START,
    payload: equipmentData
});

export const fetchEquipmentsStart = (filters = {}) => ({
    type: equipmentsTypes.FETCH_EQUIPMENTS_START,
    payload: filters
});

export const setEquipments = equipments => ({
    type: equipmentsTypes.SET_EQUIPMENTS,
    payload: equipments
});

export const deleteEquipmentStart = equipmentID => ({
    type: equipmentsTypes.DELETE_EQUIPMENT_START,
    payload: equipmentID
})

export const fetchEquipmentStart = equipmentID => ({
    type: equipmentsTypes.FETCH_EQUIPMENT_START,
    payload: equipmentID
})

export const setEquipment = equipment => ({
    type: equipmentsTypes.SET_EQUIPMENT,
    payload: equipment
})

export const editEquipmentStart = equipments => ({
    type: equipmentsTypes.EDIT_EQUIPMENT_START,
    payload: equipments
})