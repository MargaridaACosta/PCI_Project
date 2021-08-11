import { firestore } from '../../firebase/utils';

export const handleAddSpace = space => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE ESPAÇOS
            .collection('salas')
            // CRIAR UM NOVO DOCUMENTO
            .doc()
            // CRIAR OS VALORES DO DOCUMENTO
            .set(space)
            // SE NÃO DER ERROS, RESOLVE, SE DER, REJECT COM ERRO
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchSpaces = ({ filterType, search }) => {
    return new Promise((resolve, reject) => {

        let ref =
            firestore
                // ACEDER À COLEÇÃO DE ESPAÇOS
                .collection('salas')
                // ORDENA OS ESPAÇOS PELA DATA DE CRIAÇÃO DO DOC
                .orderBy('nome');

        if (filterType) ref =
            // FILTRA ONDE A DISPONIBILIDADE É IGUAL À PROP RECEBIDA
            ref.where('categoria', '==', filterType);

        ref
            // FAZER GET DO DOC QUE SE QUER UTILIZAR
            .get()
            // TIRAR UMA SNAPSHOT DO DOC E FAZER MAP DELA COM A INFO NECESSÁRIA PARA RETIRAR
            .then(snapshot => {
                const spacesArray = snapshot.docs.map(doc => {
                    return {
                        // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(spacesArray);
            })
            .catch(err => {
                reject(err);
            })

        // if (search) ref =
        //     // FILTRA ONDE A DISPONIBILIDADE É IGUAL À PROP RECEBIDA
        //     ref.where('nome', 'in', search);

        // ref
        //     // FAZER GET DO DOC QUE SE QUER UTILIZAR
        //     .get()
        //     // TIRAR UMA SNAPSHOT DO DOC E FAZER MAP DELA COM A INFO NECESSÁRIA PARA RETIRAR
        //     .then(snapshot => {
        //         const spacesArray = snapshot.docs.map(doc => {
        //             return {
        //                 // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
        //                 ...doc.data(),
        //                 documentID: doc.id
        //             }
        //         });
        //         resolve(spacesArray);
        //     })
        //     .catch(err => {
        //         reject(err);
        //     })
    })
}

export const handleDeleteSpace = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE ESPAÇOS
            .collection('salas')
            // ACEDER AO ID DO DOCUMENTO
            .doc(documentID)
            // APAGAR DA BASE DE DADOS
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleFetchSpace = spaceID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('salas')
            .doc(spaceID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: spaceID
                    }

                    );
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleEditSpace = ({
    documentID,
    spaceCapacity,
    spaceAccessibility,
    spaceWifi,
    spaceSun,
    spaceCategory,
    spaceName,
    spaceAvailability,
    spaceDescription,
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
    spaceOptionDescriptionImage6,
    photoURL
}) => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE ESPAÇOS
            .collection('salas')
            // ACEDER AO ID DO DOCUMENTO
            .doc(documentID)
            // FAZER UPDATE NA BASE DE DADOS COM A INFORMAÇÃO PRETENDIDA
            .update({
                "categoria": spaceCategory,
                "capacidade": spaceCapacity,
                "acessibilidade": spaceAccessibility,
                "wifi": spaceWifi,
                "sun": spaceSun,
                "descricao1": spaceOptionDescription1,
                "descricao2": spaceOptionDescription2,
                "descricao3": spaceOptionDescription3,
                "descricao4": spaceOptionDescription4,
                "descricao5": spaceOptionDescription5,
                "descricao6": spaceOptionDescription6,
                "descricao_geral": spaceDescription,
                "disponibilidade": spaceAvailability,
                "imagemDescricao1": spaceOptionDescriptionImage1,
                "imagemDescricao2": spaceOptionDescriptionImage2,
                "imagemDescricao3": spaceOptionDescriptionImage3,
                "imagemDescricao4": spaceOptionDescriptionImage4,
                "imagemDescricao5": spaceOptionDescriptionImage5,
                "imagemDescricao6": spaceOptionDescriptionImage6,
                "nome": spaceName,
                "thumbnail": photoURL,
            })
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
}