import { auth, firestore } from './../../firebase/utils';

export const handleResetPasswordAPI = (email) => {
    // URL PARA ONDE O USER VAI DEPOIS DE REPOR - QUE DOR DE CABEÇA CREDO AJUDEM-ME
    const config = {
        url: 'http://localhost:3000/login'
    }
    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
            .then(() => {
                resolve();
            })
            .catch(() => {
                const err = ['Email not found! Please, try agane!']
                reject(err);
            });
    })
}

export const handleEditUserProfile = ({ uid, photoURL }) => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE EQUIPAMENTOS
            .collection('utilizadores')
            // ACEDER AO ID DO DOCUMENTO
            .doc(uid)
            // FAZER UPDATE NA BASE DE DADOS COM A INFORMAÇÃO PRETENDIDA
            .update({
                "photoURL": photoURL
            })
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleEditUserPassword = (newPassword) => {
    return new Promise((resolve, reject) => {
        auth
            .currentUser
            .updatePassword(`${newPassword}`)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}
