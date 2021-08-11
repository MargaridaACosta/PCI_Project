import { firestore } from '../../firebase/utils';

export const handleAddWorkshop = workshop => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE OFICINAS
            .collection('oficinas')
            // CRIAR UM NOVO DOCUMENTO
            .doc()
            // CRIAR OS VALORES DO DOCUMENTO
            .set(workshop)
            // SE NÃO DER ERROS, RESOLVE, SE DER, REJECT COM ERRO
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchWorkshops = ({ filterType, search }) => {
    return new Promise((resolve, reject) => {

        let ref =
            firestore
                // ACEDER À COLEÇÃO DE OFICINAS
                .collection('oficinas')
                // ORDENA OS OFICINAS PELA DATA DE CRIAÇÃO DO DOC
                .orderBy('nome');

        if (filterType) ref =
            // FILTRA ONDE A DISPONIBILIDADE É IGUAL À PROP RECEBIDA
            ref.where('categoria', '==', filterType);

        ref
            // FAZER GET DO DOC QUE SE QUER UTILIZAR
            .get()
            // TIRAR UMA SNAPSHOT DO DOC E FAZER MAP DELA COM A INFO NECESSÁRIA PARA RETIRAR
            .then(snapshot => {
                const workshopsArray = snapshot.docs.map(doc => {
                    return {
                        // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(workshopsArray);
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
        //         const workshopsArray = snapshot.docs.map(doc => {
        //             return {
        //                 // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
        //                 ...doc.data(),
        //                 documentID: doc.id
        //             }
        //         });
        //         resolve(workshopsArray);
        //     })
        //     .catch(err => {
        //         reject(err);
        //     })
    })
}

export const handleDeleteWorkshop = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE OFICINAS
            .collection('oficinas')
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

export const handleFetchWorkshop = workshopID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('oficinas')
            .doc(workshopID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: workshopID
                    }

                    );
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleEditWorkshop = ({
    documentID,
    workshopCapacity,
    workshopAccessibility,
    workshopWifi,
    workshopSun,
    workshopCategory,
    workshopName,
    workshopAvailability,
    workshopDescription,
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
    workshopOptionDescriptionImage6,
    photoURL
}) => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE OFICINAS
            .collection('oficinas')
            // ACEDER AO ID DO DOCUMENTO
            .doc(documentID)
            // FAZER UPDATE NA BASE DE DADOS COM A INFORMAÇÃO PRETENDIDA
            .update({
                "categoria": workshopCategory,
                "capacidade": workshopCapacity,
                "acessibilidade": workshopAccessibility,
                "wifi": workshopWifi,
                "sun": workshopSun,
                "descricao1": workshopOptionDescription1,
                "descricao2": workshopOptionDescription2,
                "descricao3": workshopOptionDescription3,
                "descricao4": workshopOptionDescription4,
                "descricao5": workshopOptionDescription5,
                "descricao6": workshopOptionDescription6,
                "descricao_geral": workshopDescription,
                "disponibilidade": workshopAvailability,
                "imagemDescricao1": workshopOptionDescriptionImage1,
                "imagemDescricao2": workshopOptionDescriptionImage2,
                "imagemDescricao3": workshopOptionDescriptionImage3,
                "imagemDescricao4": workshopOptionDescriptionImage4,
                "imagemDescricao5": workshopOptionDescriptionImage5,
                "imagemDescricao6": workshopOptionDescriptionImage6,
                "nome": workshopName,
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