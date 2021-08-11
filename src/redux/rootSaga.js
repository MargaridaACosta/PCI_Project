import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import equipmentsSagas from './Equipments/equipments.sagas';
import workshopsSagas from './Workshops/workshops.sagas';
import spacesSagas from './Spaces/spaces.sagas';
import ordersSagas from './Orders/orders.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(equipmentsSagas),
        call(ordersSagas),
        call(workshopsSagas),
        call(spacesSagas)
    ])
}