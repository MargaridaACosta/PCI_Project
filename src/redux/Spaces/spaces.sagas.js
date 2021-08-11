import { auth } from '../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    setSpaces,
    fetchSpacesStart,
    setSpace
} from './spaces.actions'

import {
    handleAddSpace,
    handleFetchSpaces,
    handleDeleteSpace,
    handleFetchSpace,
    handleEditSpace
} from './spaces.helpers'

import spacesTypes from './spaces.types';

export function* addSpace({ payload: {
    spaceCapacity: capacidade,
    spaceAccessibility: acessibilidade,
    spaceWifi: wifi,
    spaceSun: sun,
    spaceCategory: categoria,
    spaceName: nome,
    spaceAvailability: disponibilidade,
    spaceDescription: descricao_geral,
    photoURL: thumbnail,
    spaceOptionDescription1: descricao1,
    spaceOptionDescription2: descricao2,
    spaceOptionDescription3: descricao3,
    spaceOptionDescription4: descricao4,
    spaceOptionDescription5: descricao5,
    spaceOptionDescription6: descricao6,
    spaceOptionDescriptionImage1: imagemDescricao1,
    spaceOptionDescriptionImage2: imagemDescricao2,
    spaceOptionDescriptionImage3: imagemDescricao3,
    spaceOptionDescriptionImage4: imagemDescricao4,
    spaceOptionDescriptionImage5: imagemDescricao5,
    spaceOptionDescriptionImage6: imagemDescricao6
} }) {

    try {
        const timestamp = new Date();
        const type = "Espaço";
        // AQUI ESTRUTURAM-SE OS CAMPOS NO DOCUMENTO
        yield handleAddSpace({
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
            fetchSpacesStart()
        );

    } catch (err) {
        console.log(err);
    }

}

export function* onAddSpaceStart() {
    yield takeLatest(spacesTypes.ADD_NEW_SPACE_START, addSpace);
}

export function* fetchSpaces({ payload: {
    filterType,
    search
} }) {
    try {
        const spaces = yield handleFetchSpaces({ filterType, search });
        yield put(
            setSpaces(spaces)
        );

    } catch (err) {
        console.log(err)
    }
}

export function* onFetchSpacesStart() {
    yield takeLatest(spacesTypes.FETCH_SPACES_START, fetchSpaces)
}

export function* deleteSpace({ payload }) {
    try {
        yield handleDeleteSpace(payload);
        yield put(
            fetchSpacesStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onDeleteSpaceStart() {
    yield takeLatest(spacesTypes.DELETE_SPACE_START, deleteSpace)
}

export function* editSpace({ payload: {
    documentID,
    spaceCapacity,
    spaceAccessibility,
    spaceWifi,
    spaceSun,
    spaceCategory,
    spaceName,
    spaceAvailability,
    spaceDescription,
    photoURL,
    spaceOptionDescription1,
    spaceOptionDescription2,
    spaceOptionDescription3,
    spaceOptionDescription4,
    spaceOptionDescription5,
    spaceOptionDescription6,
    spaceOptionDescriptionImage1,
    spaceOptionDescriptionImage2,
    spaceOptionDescriptionImage3,
    spaceOptionDescriptionImage4,
    spaceOptionDescriptionImage5,
    spaceOptionDescriptionImage6
} }) {
    try {
        yield handleEditSpace({
            documentID,
            spaceCapacity,
            spaceAccessibility,
            spaceWifi,
            spaceSun,
            spaceCategory,
            spaceName,
            spaceAvailability,
            spaceDescription,
            photoURL,
            spaceOptionDescription1,
            spaceOptionDescription2,
            spaceOptionDescription3,
            spaceOptionDescription4,
            spaceOptionDescription5,
            spaceOptionDescription6,
            spaceOptionDescriptionImage1,
            spaceOptionDescriptionImage2,
            spaceOptionDescriptionImage3,
            spaceOptionDescriptionImage4,
            spaceOptionDescriptionImage5,
            spaceOptionDescriptionImage6
        });
        yield put(
            fetchSpacesStart()
        );

    } catch (err) {
        console.log(err)
    }

}

export function* onEditSpaceStart() {
    yield takeLatest(spacesTypes.EDIT_SPACE_START, editSpace)
}

export function* fetchSpace({ payload }) {
    try {
        const space = yield handleFetchSpace(payload);
        yield put(
            setSpace(space)
        )

    } catch (err) {
        console.log(err)
    }

}

export function* onFetchSpaceStart() {
    yield takeLatest(spacesTypes.FETCH_SPACE_START, fetchSpace)
}





export default function* spacesSagas() {
    yield all([
        call(onAddSpaceStart),
        call(onFetchSpacesStart),
        call(onDeleteSpaceStart),
        call(onFetchSpaceStart),
        call(onEditSpaceStart)
    ])
}