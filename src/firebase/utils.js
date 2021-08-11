import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig } from './config';

// Iniciar Ligação Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Criação de um Provider (Google)
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' })


export const handleUserProfile = async ({ userAuth, additionalData }) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    // CAMINHO PARA OS UTILIZADORES POR ID (COLEÇÃO utilizadores, nome do doc é uid) - OBTEM-SE A REFERÊNCIA PRETENDIDA
    const userRef = firestore.doc(`utilizadores/${uid}`)

    const snapshot = await userRef.get();

    // Retorna boolean, se a snapshot existe ou não na base de dados
    // ALTERAR VALORES DA USERAUTH DEPENDENDO DO QUE QUEREMOS RETIRAR DE INFO
    if (!snapshot.exists) {
        const { displayName, email, job, photoURL } = userAuth;
        const timestamp = new Date();
        const role = ['user'];

        try {
            await userRef.set({
                email,
                data_de_criacao: timestamp,
                role,
                displayName,
                job,
                photoURL,
                ...additionalData
            });
        } catch (err) {
            console.log(err);
        }
    }

    // Fazer update do estado local ao returnar a userRef de cada utilizador
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}
