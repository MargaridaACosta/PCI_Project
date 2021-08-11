import { firestore } from './../../firebase/utils';

export const handleSaveOrder = order => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('encomendas')
            .doc()
            .set(order)
            .then(() => {
                resolve();
            })
            .catch(err => {

                reject(err);
            });
    });
};

export const handleGetUserOrderHistory = uid => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('encomendas').orderBy('orderCreatedDate');
        ref = ref.where('orderUserID', '==', uid);

        ref
            .get()
            .then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];
                resolve({ data });
            })
            .catch(err => {
                reject(err);
            });
    });
};

export const handleGetOrder = orderID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('encomendas')
            .doc(orderID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: orderID
                    })
                }
            })

            .catch(err => {
                reject(err);
            })
    })
}
