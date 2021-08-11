import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    setEquipments,
    fetchEquipmentsStart,
    setEquipment
} from './equipments.actions'

import {
    handleAddEquipment,
    handleFetchEquipments,
    handleDeleteEquipment,
    handleFetchEquipment,
    handleEditEquipment
} from './equipments.helpers'

import equipmentsTypes from './equipments.types';

export function* addEquipment({ payload: {
    equipmentCategory: categoria,
    equipmentName: nome,
    equipmentPrice: preço,
    equipmentAvailability: disponibilidade,
    equipmentQuantity: quantidade,
    equipmentDescription: descricao_geral,
    photoURL: thumbnail,
    equipmentVideo: video, 
    equipmentOptionDescription1: descricao1,
    equipmentOptionDescription2: descricao2,
    equipmentOptionDescription3: descricao3,
    equipmentOptionDescription4: descricao4,
    equipmentOptionDescription5: descricao5,
    equipmentOptionDescription6: descricao6,
    equipmentOptionDescription7: descricao7,
    equipmentOptionDescription8: descricao8,
    equipmentOptionDescriptionImage1: imagemDescricao1,
    equipmentOptionDescriptionImage2: imagemDescricao2,
    equipmentOptionDescriptionImage3: imagemDescricao3,
    equipmentOptionDescriptionImage4: imagemDescricao4,
    equipmentOptionDescriptionImage5: imagemDescricao5,
    equipmentOptionDescriptionImage6: imagemDescricao6,
    equipmentOptionDescriptionImage7: imagemDescricao7,
    equipmentOptionDescriptionImage8: imagemDescricao8,


} }) {

    try {
        const timestamp = new Date();
        const type = "Equipamento";
        // AQUI ESTRUTURAM-SE OS CAMPOS NO DOCUMENTO
        yield handleAddEquipment({
            categoria,
            tipo: type,
            nome,
            thumbnail,
            video,
            preço,
            disponibilidade,
            uid_admin: auth.currentUser.uid,
            adminEmail: auth.currentUser.email,
            data_de_criacao: timestamp,
            quantidade,
            descricao_geral,
            descricao1,
            descricao2,
            descricao3,
            descricao4,
            descricao5,
            descricao6,
            descricao7,
            descricao8,
            imagemDescricao1,
            imagemDescricao2,
            imagemDescricao3,
            imagemDescricao4,
            imagemDescricao5,
            imagemDescricao6,
            imagemDescricao7,
            imagemDescricao8,
        });
        yield put(
            fetchEquipmentsStart()
        );

    } catch (err) {
        console.log(err);
    }

}

export function* onAddEquipmentStart() {
    yield takeLatest(equipmentsTypes.ADD_NEW_EQUIPMENT_START, addEquipment);
}

export function* fetchEquipments({ payload: {
    filterType,
    search
} }) {
    try {
        const equipments = yield handleFetchEquipments({ filterType, search });
        yield put(
            setEquipments(equipments)
        );

    } catch (err) {
        console.log(err)
    }
}

export function* onFetchEquipmentsStart() {
    yield takeLatest(equipmentsTypes.FETCH_EQUIPMENTS_START, fetchEquipments)
}

export function* deleteEquipment({ payload }) {
    try {
        yield handleDeleteEquipment(payload);
        yield put(
            fetchEquipmentsStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onDeleteEquipmentStart() {
    yield takeLatest(equipmentsTypes.DELETE_EQUIPMENT_START, deleteEquipment)
}

export function* editEquipment({ payload: {
    documentID,
    equipmentCategory,
    equipmentName,
    equipmentPrice,
    equipmentAvailability,
    equipmentDescription,
    equipmentVideo,
    equipmentOptionDescription1,
    equipmentOptionDescription2,
    equipmentOptionDescription3,
    equipmentOptionDescription4,
    equipmentOptionDescription5,
    equipmentOptionDescription6,
    equipmentOptionDescription7,
    equipmentOptionDescription8,
    equipmentOptionDescriptionImage1,
    equipmentOptionDescriptionImage2,
    equipmentOptionDescriptionImage3,
    equipmentOptionDescriptionImage4,
    equipmentOptionDescriptionImage5,
    equipmentOptionDescriptionImage6,
    equipmentOptionDescriptionImage7,
    equipmentOptionDescriptionImage8,
    equipmentQuantity,
    photoURL
} }) {
    try {
        yield handleEditEquipment({
            documentID,
            equipmentCategory,
            equipmentName,
            equipmentPrice,
            equipmentAvailability,
            equipmentDescription,
            equipmentVideo,
            equipmentOptionDescription1,
            equipmentOptionDescription2,
            equipmentOptionDescription3,
            equipmentOptionDescription4,
            equipmentOptionDescription5,
            equipmentOptionDescription6,
            equipmentOptionDescription7,
            equipmentOptionDescription8,
            equipmentOptionDescriptionImage1,
            equipmentOptionDescriptionImage2,
            equipmentOptionDescriptionImage3,
            equipmentOptionDescriptionImage4,
            equipmentOptionDescriptionImage5,
            equipmentOptionDescriptionImage6,
            equipmentOptionDescriptionImage7,
            equipmentOptionDescriptionImage8,
            equipmentQuantity,
            photoURL
        });
        yield put(
            fetchEquipmentsStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onEditEquipmentStart() {
    yield takeLatest(equipmentsTypes.EDIT_EQUIPMENT_START, editEquipment)
}

export function* fetchEquipment({ payload }) {
    try {
        const equipment = yield handleFetchEquipment(payload);
        yield put(
            setEquipment(equipment)
        )

    } catch (err) {
        console.log(err)
    }

}

export function* onFetchEquipmentStart() {
    yield takeLatest(equipmentsTypes.FETCH_EQUIPMENT_START, fetchEquipment)
}





export default function* equipmentsSagas() {
    yield all([
        call(onAddEquipmentStart),
        call(onFetchEquipmentsStart),
        call(onDeleteEquipmentStart),
        call(onFetchEquipmentStart),
        call(onEditEquipmentStart)
    ])
}