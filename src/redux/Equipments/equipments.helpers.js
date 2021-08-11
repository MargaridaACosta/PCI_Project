import { firestore } from './../../firebase/utils';

export const handleAddEquipment = equipment => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE EQUIPAMENTOS
            .collection('equipamentos')
            // CRIAR UM NOVO DOCUMENTO
            .doc()
            // CRIAR OS VALORES DO DOCUMENTO
            .set(equipment)
            // SE NÃO DER ERROS, RESOLVE, SE DER, REJECT COM ERRO
            .then(() => {
                resolve()
            })
            .catch(err => {
                reject(err)
            })
    })
}

export const handleFetchEquipments = ({ filterType, search }) => {
    return new Promise((resolve, reject) => {

        let ref =
            firestore
                // ACEDER À COLEÇÃO DE EQUIPAMENTOS
                .collection('equipamentos')
                // ORDENA OS EQUIPAMENTOS PELA DATA DE CRIAÇÃO DO DOC
                .orderBy('nome');

        if (filterType) ref =
            // FILTRA ONDE A DISPONIBILIDADE É IGUAL À PROP RECEBIDA
            ref.where('categoria', '==', filterType);

        ref
            // FAZER GET DO DOC QUE SE QUER UTILIZAR
            .get()
            // TIRAR UMA SNAPSHOT DO DOC E FAZER MAP DELA COM A INFO NECESSÁRIA PARA RETIRAR
            .then(snapshot => {
                const equipmentsArray = snapshot.docs.map(doc => {
                    return {
                        // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(equipmentsArray);
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
        //         const equipmentsArray = snapshot.docs.map(doc => {
        //             return {
        //                 // Aqui, documentID vai ser utilizado para integrar no carrinho do user, se não estou a fazer asneiras já antes de começar????????????????
        //                 ...doc.data(),
        //                 documentID: doc.id
        //             }
        //         });
        //         resolve(equipmentsArray);
        //     })
        //     .catch(err => {
        //         reject(err);
        //     })
    })
}

export const handleDeleteEquipment = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE EQUIPAMENTOS
            .collection('equipamentos')
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

export const handleFetchEquipment = equipmentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('equipamentos')
            .doc(equipmentID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve({
                        ...snapshot.data(),
                        documentID: equipmentID
                    }

                    );
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleEditEquipment = ({
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
}) => {
    return new Promise((resolve, reject) => {
        firestore
            // ACEDER À COLEÇÃO DE EQUIPAMENTOS
            .collection('equipamentos')
            // ACEDER AO ID DO DOCUMENTO
            .doc(documentID)
            // FAZER UPDATE NA BASE DE DADOS COM A INFORMAÇÃO PRETENDIDA
            .update({
                "video": equipmentVideo,
                "categoria": equipmentCategory,
                "descricao1": equipmentOptionDescription1,
                "descricao2": equipmentOptionDescription2,
                "descricao3": equipmentOptionDescription3,
                "descricao4": equipmentOptionDescription4,
                "descricao5": equipmentOptionDescription5,
                "descricao6": equipmentOptionDescription6,
                "descricao7": equipmentOptionDescription7,
                "descricao8": equipmentOptionDescription8,
                "descricao_geral": equipmentDescription,
                "disponibilidade": equipmentAvailability,
                "imagemDescricao1": equipmentOptionDescriptionImage1,
                "imagemDescricao2": equipmentOptionDescriptionImage2,
                "imagemDescricao3": equipmentOptionDescriptionImage3,
                "imagemDescricao4": equipmentOptionDescriptionImage4,
                "imagemDescricao5": equipmentOptionDescriptionImage5,
                "imagemDescricao6": equipmentOptionDescriptionImage6,
                "imagemDescricao7": equipmentOptionDescriptionImage7,
                "imagemDescricao8": equipmentOptionDescriptionImage8,
                "nome": equipmentName,
                "preço": equipmentPrice,
                "quantidade": equipmentQuantity,
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