import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import equipmentsReducer from './Equipments/equipments.reducer';
import workshopsReducer from './Workshops/workshops.reducer';
import spacesReducer from './Spaces/spaces.reducer';
import cartReducer from './Cart/cart.reducer';
import ordersReducer from './Orders/orders.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    equipmentsData: equipmentsReducer,
    workshopsData: workshopsReducer,
    spacesData: spacesReducer,
    cartData: cartReducer,
    ordersData: ordersReducer,

})

export const configStorage = {
    // INDIFERENTE, ROOT REDUCER
    key: 'root',
    // AQUI FICA LOCAL STORAGE, TAMBÉM PODEMOS IMPLEMENTAR SESSION THOUGH
    storage,
    // TODAS AS PEÇAS DO STATE QUE QUEREMOS DAR PERSIST
    whitelist: ['cartData']
}

export default persistReducer(configStorage, rootReducer);