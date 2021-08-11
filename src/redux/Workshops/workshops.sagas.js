import { auth } from '../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    setWorkshops,
    fetchWorkshopsStart,
    setWorkshop
} from './workshops.actions'

import {
    handleAddWorkshop,
    handleFetchWorkshops,
    handleDeleteWorkshop,
    handleFetchWorkshop,
    handleEditWorkshop
} from './workshops.helpers'

import workshopsTypes from './workshops.types';

export function* addWorkshop({ payload: {
    workshopCapacity: capacidade,
    workshopAccessibility: acessibilidade,
    workshopWifi: wifi,
    workshopSun: sun,
    workshopCategory: categoria,
    workshopName: nome,
    workshopAvailability: disponibilidade,
    workshopDescription: descricao_geral,
    photoURL: thumbnail,
    workshopOptionDescription1: descricao1,
    workshopOptionDescription2: descricao2,
    workshopOptionDescription3: descricao3,
    workshopOptionDescription4: descricao4,
    workshopOptionDescription5: descricao5,
    workshopOptionDescription6: descricao6,
    workshopOptionDescriptionImage1: imagemDescricao1,
    workshopOptionDescriptionImage2: imagemDescricao2,
    workshopOptionDescriptionImage3: imagemDescricao3,
    workshopOptionDescriptionImage4: imagemDescricao4,
    workshopOptionDescriptionImage5: imagemDescricao5,
    workshopOptionDescriptionImage6: imagemDescricao6
} }) {

    try {
        const timestamp = new Date();
        const type = "Oficina";
        // AQUI ESTRUTURAM-SE OS CAMPOS NO DOCUMENTO
        yield handleAddWorkshop({
            tipo: type,
            capacidade,
            acessibilidade,
            wifi,
            sun,
            categoria,
            nome,
            thumbnail,
            disponibilidade,
            uid_admin: auth.currentUser.uid,
            adminEmail: auth.currentUser.email,
            data_de_criacao: timestamp,
            descricao_geral,
            descricao1,
            descricao2,
            descricao3,
            descricao4,
            descricao5,
            descricao6,
            imagemDescricao1,
            imagemDescricao2,
            imagemDescricao3,
            imagemDescricao4,
            imagemDescricao5,
            imagemDescricao6,
        });
        yield put(
            fetchWorkshopsStart()
        );

    } catch (err) {
        console.log(err);
    }

}

export function* onAddWorkshopStart() {
    yield takeLatest(workshopsTypes.ADD_NEW_WORKSHOP_START, addWorkshop);
}

export function* fetchWorkshops({ payload: {
    filterType,
    search
} }) {
    try {
        const workshops = yield handleFetchWorkshops({ filterType, search });
        yield put(
            setWorkshops(workshops)
        );

    } catch (err) {
        console.log(err)
    }
}

export function* onFetchWorkshopsStart() {
    yield takeLatest(workshopsTypes.FETCH_WORKSHOPS_START, fetchWorkshops)
}

export function* deleteWorkshop({ payload }) {
    try {
        yield handleDeleteWorkshop(payload);
        yield put(
            fetchWorkshopsStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onDeleteWorkshopStart() {
    yield takeLatest(workshopsTypes.DELETE_WORKSHOP_START, deleteWorkshop)
}

export function* editWorkshop({ payload: {
    documentID,
    workshopCapacity,
    workshopAccessibility,
    workshopWifi,
    workshopSun,
    workshopCategory,
    workshopName,
    workshopAvailability,
    workshopDescription,
    photoURL,
    workshopOptionDescription1,
    workshopOptionDescription2,
    workshopOptionDescription3,
    workshopOptionDescription4,
    workshopOptionDescription5,
    workshopOptionDescription6,
    workshopOptionDescriptionImage1,
    workshopOptionDescriptionImage2,
    workshopOptionDescriptionImage3,
    workshopOptionDescriptionImage4,
    workshopOptionDescriptionImage5,
    workshopOptionDescriptionImage6
} }) {
    try {
        yield handleEditWorkshop({
            documentID,
            workshopCapacity,
            workshopAccessibility,
            workshopWifi,
            workshopSun,
            workshopCategory,
            workshopName,
            workshopAvailability,
            workshopDescription,
            photoURL,
            workshopOptionDescription1,
            workshopOptionDescription2,
            workshopOptionDescription3,
            workshopOptionDescription4,
            workshopOptionDescription5,
            workshopOptionDescription6,
            workshopOptionDescriptionImage1,
            workshopOptionDescriptionImage2,
            workshopOptionDescriptionImage3,
            workshopOptionDescriptionImage4,
            workshopOptionDescriptionImage5,
            workshopOptionDescriptionImage6
        });
        yield put(
            fetchWorkshopsStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onEditWorkshopStart() {
    yield takeLatest(workshopsTypes.EDIT_WORKSHOP_START, editWorkshop)
}

export function* fetchWorkshop({ payload }) {
    try {
        const workshop = yield handleFetchWorkshop(payload);
        yield put(
            setWorkshop(workshop)
        )

    } catch (err) {
        console.log(err)
    }

}

export function* onFetchWorkshopStart() {
    yield takeLatest(workshopsTypes.FETCH_WORKSHOP_START, fetchWorkshop)
}





export default function* workshopsSagas() {
    yield all([
        call(onAddWorkshopStart),
        call(onFetchWorkshopsStart),
        call(onDeleteWorkshopStart),
        call(onFetchWorkshopStart),
        call(onEditWorkshopStart)
    ])
}