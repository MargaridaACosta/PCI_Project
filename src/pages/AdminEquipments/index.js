import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClearCache } from 'react-clear-cache';
import {
    addEquipmentStart,
    fetchEquipmentsStart,
    deleteEquipmentStart,
    editEquipmentStart
} from './../../redux/Equipments/equipments.actions';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import ModalAdd from './../../components/Modal';
import ModalEdit from './../../components/Modal/ModalEdit';
import FormInput from './../../components/Forms/FormInput';
import FormSelect from './../../components/Forms/FormSelect';
import Button from './../../components/Forms/Button';
import './../../styles/pages/admin.scss';

import { storage } from './../../firebase/utils';
import { equipmentsAdminIcons } from './../../utils/index';
import { editUserStart } from '../../redux/User/user.actions';
import FotoUp from '../../assets/icons/fotoup.png';
import Addphoto from '../../assets/icons/addphoto.png';
import PhotoPlaced from '../../assets/icons/photoplaced.png';

const mapState = ({ equipmentsData }) => ({
    equipments: equipmentsData.equipments
})



const AdminEquipments = (props) => {
    const history = useHistory();
    const { equipments } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [modal, setModal] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [equipmentCategory, setEquipmentCategory] = useState('');
    const [equipmentName, setEquipmentName] = useState('');
    const [equipmentPrice, setEquipmentPrice] = useState(0);
    const [equipmentAvailability, setEquipmentAvailability] = useState('');
    const [equipmentQuantity, setEquipmentQuantity] = useState(0);
    const [equipmentDescription, setEquipmentDescription] = useState('');
    const [equipmentVideo, setEquipmentVideo] = useState('');
    const [image, setImage] = useState(null);
    const [photoURL, setPhotoURL] = useState('');
    const [progress, setProgress] = useState(0);
    const [equipmentOptionDescription1, setEquipmentOptionDescription1] = useState('');
    const [equipmentOptionDescription2, setEquipmentOptionDescription2] = useState('');
    const [equipmentOptionDescription3, setEquipmentOptionDescription3] = useState('');
    const [equipmentOptionDescription4, setEquipmentOptionDescription4] = useState('');
    const [equipmentOptionDescription5, setEquipmentOptionDescription5] = useState('');
    const [equipmentOptionDescription6, setEquipmentOptionDescription6] = useState('');
    const [equipmentOptionDescription7, setEquipmentOptionDescription7] = useState('');
    const [equipmentOptionDescription8, setEquipmentOptionDescription8] = useState('');
    const [equipmentOptionDescriptionImage1, setEquipmentOptionDescriptionImage1] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage2, setEquipmentOptionDescriptionImage2] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage3, setEquipmentOptionDescriptionImage3] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage4, setEquipmentOptionDescriptionImage4] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage5, setEquipmentOptionDescriptionImage5] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage6, setEquipmentOptionDescriptionImage6] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage7, setEquipmentOptionDescriptionImage7] = useState({ label: "none", value: "none" });
    const [equipmentOptionDescriptionImage8, setEquipmentOptionDescriptionImage8] = useState({ label: "none", value: "none" });




    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };


    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#b8b8b8',
            borderRadius: '8px',
            minHeight: '55px',
            height: '55px',
            width: '90%',
            boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '30px',
            padding: '0px 10px 0px 10px',
            background: '#fff',
        }),

        input: (provided, state) => ({
            ...provided,
            margin: '0px',
            background: '#fff',
        }),

        option: (provided, state) => ({
            ...provided,
            margin: '0px',
            background: state.isFocused ? '#b8b8b8' : '#fff',
        }),

        dropdownIndicator: (provided, state) => ({
            ...provided,
            paddingTop: '30px',
        }),

        indicatorSeparator: state => ({
            display: 'none',
            background: '#fff',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '30px',
            background: '#fff',
        }),
    };


    useEffect(() => {
        dispatch(
            fetchEquipmentsStart()
        );

    }, []);

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    const ref = useRef();

    const onClickOutside = () => {
        setModalOpen(false)
    }

    const handleOnClick = (index) => {
        setModalOpen(true)
        setModal(index)
    }

    // useClickOutside(ref, onClickOutside)

    const handlePhoto = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`equipments/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("equipments")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setPhotoURL(url);
                    });
            }
        );
    };

    const resetForm = () => {
        setHideModal(true);
        setEquipmentCategory('');
        setEquipmentName('');
        setEquipmentPrice(0);
        setEquipmentAvailability('');
        setEquipmentDescription('');
        setEquipmentVideo('');
        setPhotoURL('');
        setEquipmentOptionDescription1('');
        setEquipmentOptionDescription2('');
        setEquipmentOptionDescription3('');
        setEquipmentOptionDescription4('');
        setEquipmentOptionDescription5('');
        setEquipmentOptionDescription6('');
        setEquipmentOptionDescription7('');
        setEquipmentOptionDescription8('');
        setEquipmentOptionDescriptionImage1({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage2({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage3({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage4({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage5({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage6({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage7({ label: "none", value: "none" });
        setEquipmentOptionDescriptionImage8({ label: "none", value: "none" });
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            addEquipmentStart(
                {
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
                })
        );
        resetForm();
    };

    const handleSubmitEdit = e => {
        e.preventDefault();

        dispatch(
            editEquipmentStart({
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
            })
        );
        resetForm();
    };

    const { isLatestVersion, emptyCacheStorage } = useClearCache();

    const result = equipmentsAdminIcons.filter(item => item.value === 'Aparafusadora')


    console.log(result)
    console.log(equipmentOptionDescriptionImage1)

    return (
        <div className="admin">
            {isLatestVersion && (
                <>
                    <div className="container m-auto ">
                        <Button style={{ backgroundColor: "black", color: "white" }} onClick={e => {
                            e.preventDefault();
                            emptyCacheStorage();
                        }}>
                            LIMPAR CACHE
                </Button >
                        <div>
                            <ul>
                                <li>
                                    <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => toggleModal()}>
                                        Adicionar Equipamento
                        </Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ModalAdd {...configModal}>

                        <div className="addNewProductForm">
                            <h1>
                                Adicionar Equipamento
                    </h1>
                            <div className="container m-auto justify-center flex pb-8 pt-8">
                                <div className="w-96 h-96 no-repeat bg-no-repeat bg-center" style={{ backgroundImage: `url(${photoURL || "https://www.balletx.org/wp-content/uploads/2020/10/placeholder-image-2.jpg"})`, backgroundSize: 'cover' }} alt="firebase-image" ></div></div>

                            <div className="flex container justify-end flex-wrap ">
                                {!image ? (
                                    <>
                                        <button className="block" onClick={handleClick}>
                                            <img className="w-14 h-auto" src={Addphoto} alt="uploadUserPhoto" />
                                        </button>
                                        <input className=" w-2/3 bg-red "
                                            style={{ display: 'none' }}
                                            type="file"
                                            ref={hiddenFileInput}
                                            onChange={handlePhoto}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <button className="block" onClick={handleClick}>
                                            <img className="w-14 h-auto" src={PhotoPlaced} alt="uploadUserPhoto" />
                                        </button>
                                        <input className=" w-2/3 text-green hidden"
                                            style={{ display: 'none' }}
                                            ref={hiddenFileInput}
                                            type="file"
                                            onChange={handlePhoto}
                                        />
                                    </>
                                )
                                }

                                <button className="block mr-24 md:mr-36 lg:mr-14 xl:mr-8" onClick={handleUpload}>
                                    <img className="w-18 h-auto" src={FotoUp} alt="uploadUserPhoto" />
                                </button>
                            </div>


                            <form onSubmit={handleSubmit}>
                                <h1>
                                    Campos Obrigatórios
                        </h1>
                                <FormSelect
                                    required
                                    label="Categoria"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Câmaras",
                                        name: "Câmaras"
                                    }, {
                                        value: "Drones",
                                        name: "Drones"
                                    }, {
                                        value: "Projetores",
                                        name: "Projetores"
                                    }, {
                                        value: "Som",
                                        name: "Som"
                                    }, {
                                        value: "Oficinas",
                                        name: "Oficinas"
                                    }, {
                                        value: "Oficinas_Gráficas",
                                        name: "Oficinas Gráficas"
                                    }
                                    ]}
                                    handleChange={e => setEquipmentCategory(e.target.value)}
                                />

                                <FormSelect
                                    required
                                    label="Disponibilidade"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Disponível",
                                        name: "Disponível"
                                    }, {
                                        value: "Não Disponível",
                                        name: "Não Disponível"
                                    }]}
                                    handleChange={e => setEquipmentAvailability(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Nome"
                                    placeholder="Nome"
                                    type="text"
                                    value={equipmentName}
                                    handleChange={e => setEquipmentName(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Descrição Detalhada"
                                    placeholder="Descrição Detalhada"
                                    type="text"
                                    value={equipmentDescription}
                                    handleChange={e => setEquipmentDescription(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Link de Vídeo (Youtube)"
                                    placeholder={"Link de Vídeo (Youtube)"}
                                    type="text"
                                    value={equipmentVideo}
                                    handleChange={e => setEquipmentVideo(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Quantidade"
                                    type="number"
                                    min="0"
                                    max="10000"
                                    step="1"
                                    value={equipmentQuantity}
                                    handleChange={e => setEquipmentQuantity(e.target.value)}
                                />

                                <FormInput
                                    label="Preço (€)"
                                    type="number"
                                    min="0.00"
                                    max="10000.00"
                                    step="0.01"
                                    value={equipmentPrice}
                                    handleChange={e => setEquipmentPrice(e.target.value)}
                                />



                                <div className="container m-auto ">
                                    <h1>
                                        Campos Descrição
                                </h1>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 1
                                        </p>

                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 1"}
                                                onChange={setEquipmentOptionDescriptionImage1}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 1"
                                            placeholder="Descrição 1"
                                            type="text"
                                            value={equipmentOptionDescription1}
                                            handleChange={e => setEquipmentOptionDescription1(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 2
                                        </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 2"}
                                                onChange={setEquipmentOptionDescriptionImage2}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 2"
                                            placeholder="Descrição 2"
                                            type="text"
                                            value={equipmentOptionDescription2}
                                            handleChange={e => setEquipmentOptionDescription2(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 3
                                        </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 3"}
                                                onChange={setEquipmentOptionDescriptionImage3}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 3"
                                            placeholder="Descrição 3"
                                            type="text"
                                            value={equipmentOptionDescription3}
                                            handleChange={e => setEquipmentOptionDescription3(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 4
                                                </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 4"}
                                                onChange={setEquipmentOptionDescriptionImage4}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 4"
                                            placeholder="Descrição 4"
                                            type="text"
                                            value={equipmentOptionDescription4}
                                            handleChange={e => setEquipmentOptionDescription4(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 5
                                                 </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 5"}
                                                onChange={setEquipmentOptionDescriptionImage5}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 5"
                                            placeholder="Descrição 5"
                                            type="text"
                                            value={equipmentOptionDescription5}
                                            handleChange={e => setEquipmentOptionDescription5(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 6
                                                </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 6"}
                                                onChange={setEquipmentOptionDescriptionImage6}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 6"
                                            placeholder="Descrição 6"
                                            type="text"
                                            value={equipmentOptionDescription6}
                                            handleChange={e => setEquipmentOptionDescription6(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 7
                                                 </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 7"}
                                                onChange={setEquipmentOptionDescriptionImage7}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 7"
                                            placeholder="Descrição 7"
                                            type="text"
                                            value={equipmentOptionDescription7}
                                            handleChange={e => setEquipmentOptionDescription7(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 8
                                                </p>
                                            <Select
                                                styles={customStyles}
                                                options={equipmentsAdminIcons}
                                                placeholder={"Ícone da Descrição 8"}
                                                onChange={setEquipmentOptionDescriptionImage8}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 8"
                                            placeholder="Descrição 8"
                                            type="text"
                                            value={equipmentOptionDescription8}
                                            handleChange={e => setEquipmentOptionDescription8(e.target.value)}
                                        />
                                    </div>

                                </div>
                                <Button type="submit" style={{ backgroundColor: "black", color: "white" }}>
                                    Adicionar Equipamento
                        </Button>
                                <Button style={{ backgroundColor: "black", color: "white", marginBottom: "4rem" }} onClick={() => !toggleModal()}>
                                    Cancelar
                        </Button>

                            </form>
                        </div>
                    </ModalAdd>

                    <div className="container m-auto pt-36 pb-24">

                        <div>
                            <div>
                                <h1 className="pb-14">Stock Existente</h1>
                                <div>
                                    <div>
                                        {equipments.map((equipment, index) => {
                                            const {
                                                categoria,
                                                video,
                                                descricao1,
                                                descricao2,
                                                descricao3,
                                                descricao4,
                                                descricao5,
                                                descricao6,
                                                descricao7,
                                                descricao8,
                                                disponibilidade,
                                                imagemDescricao1,
                                                imagemDescricao2,
                                                imagemDescricao3,
                                                imagemDescricao4,
                                                imagemDescricao5,
                                                imagemDescricao6,
                                                imagemDescricao7,
                                                imagemDescricao8,
                                                nome,
                                                preço,
                                                quantidade,
                                                thumbnail,
                                                documentID
                                            } = equipment;
                                            return (
                                                <>
                                                    <div className="card md:flex w-full h-full grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-items-center md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mb-24" key={index}>

                                                        <div className="w-full md:w-96 h-96 md:h-auto lg:h-auto xl:h-auto justify-self-auto pt-4 md:pt-4 lg:pt-0 xl:pt-0 bg-center flex-shrink-0 " style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt={nome}  ></div>

                                                        <div className="w-full flex-wrap justify-self-start col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 pl-8">

                                                            <h3 className="pt-4 pb-8"> {nome}</h3>

                                                            <h5 className="text-black font-bold mb-2 ">{disponibilidade}</h5>

                                                            <p className="pt-4 pb-8">{preço}€</p>

                                                            <div className="flex justify-end">
                                                                <div className="mr-4 pb-4" >
                                                                    <Button style={{ marginRight: '0', marginLeft: '0', width: '120px', backgroundColor: "black", color: "white" }} onClick={() => handleOnClick(index)}>
                                                                        Editar
                                                                </Button>
                                                                </div>

                                                                <div className="mr-4 pb-4" >
                                                                    <Button style={{ marginRight: '0', marginLeft: '0', width: '120px', backgroundColor: "black", color: "white" }} onClick={() => dispatch(deleteEquipmentStart(documentID))}>
                                                                        Apagar
                                                                </Button>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })}
                                        {
                                            isModalOpen && setModal != null ? (
                                                <ModalEdit
                                                    key={modal}
                                                >
                                                    <div className="addNewProductForm">
                                                        <h1>
                                                            Editar Equipamento
                    </h1>
                                                        <img src={photoURL || equipments[modal].thumbnail} alt="firebase-image" />
                                                        <input
                                                            type="file"
                                                            onChange={handlePhoto}
                                                        />
                                                        <Button onClick={handleUpload}>
                                                            Upload
                    </Button>

                                                        <form>
                                                            <h1>
                                                                Campos Obrigatórios
                        </h1>
                                                            <FormSelect
                                                                label="Categoria"
                                                                placeholder={equipments[modal].categoria}
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Câmaras",
                                                                    name: "Câmaras"
                                                                }, {
                                                                    value: "Drones",
                                                                    name: "Drones"
                                                                }, {
                                                                    value: "Projetores",
                                                                    name: "Projetores"
                                                                }, {
                                                                    value: "Som",
                                                                    name: "Som"
                                                                }, {
                                                                    value: "Oficinas",
                                                                    name: "Oficinas"
                                                                }, {
                                                                    value: "Oficinas_Gráficas",
                                                                    name: "Oficinas Gráficas"
                                                                }
                                                                ]}
                                                                handleChange={e => setEquipmentCategory(e.target.value)}
                                                            />

                                                            <FormSelect
                                                                label="Disponibilidade"
                                                                placeholder={equipments[modal].disponibilidade}
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Disponível",
                                                                    name: "Disponível"
                                                                }, {
                                                                    value: "Não Disponível",
                                                                    name: "Não Disponível"
                                                                }]}
                                                                handleChange={e => setEquipmentAvailability(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Nome"
                                                                placeholder={equipments[modal].nome}
                                                                type="text"
                                                                value={equipmentName}
                                                                handleChange={e => setEquipmentName(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Descrição Detalhada"
                                                                placeholder={equipments[modal].descricao}
                                                                type="text"
                                                                value={equipmentDescription}
                                                                handleChange={e => setEquipmentDescription(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Link de Vídeo (Youtube)"
                                                                placeholder={equipments[modal].video}
                                                                type="text"
                                                                value={equipmentVideo}
                                                                handleChange={e => setEquipmentVideo(e.target.value)}
                                                            />

                                                            <FormInput
                                                                placeholder={equipments[modal].quantidade}
                                                                label="Quantidade"
                                                                type="number"
                                                                min="0"
                                                                max="10000"
                                                                step="1"
                                                                value={equipmentQuantity}
                                                                handleChange={e => setEquipmentQuantity(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Preço (€)"
                                                                type="number"
                                                                min="0.00"
                                                                max="10000.00"
                                                                step="0.01"
                                                                placeholder={equipments[modal].preço}
                                                                value={equipmentPrice}
                                                                handleChange={e => setEquipmentPrice(e.target.value)}
                                                            />

                                                            <h1>
                                                                Campos Descrição
                                </h1>

                                                            <p>
                                                                Ícone da Descrição 1
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 1"}
                                                                options={equipmentsAdminIcons}
                                                                onChange={setEquipmentOptionDescriptionImage1}
                                                            />


                                                            <FormInput
                                                                label="Descrição 1"
                                                                placeholder="Descrição 1"
                                                                type="text"
                                                                value={equipmentOptionDescription1}
                                                                handleChange={e => setEquipmentOptionDescription1(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 2
                                </p>
                                                            <Select

                                                                options={equipmentsAdminIcons}
                                                                placeholder={"Ícone Descrição 2"}
                                                                onChange={setEquipmentOptionDescriptionImage2}
                                                            />

                                                            <FormInput
                                                                label="Descrição 2"
                                                                placeholder="Descrição 2"
                                                                type="text"
                                                                value={equipmentOptionDescription2}
                                                                handleChange={e => setEquipmentOptionDescription2(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 3
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 3"}
                                                                options={equipmentsAdminIcons}

                                                                onChange={setEquipmentOptionDescriptionImage3}
                                                            />

                                                            <FormInput
                                                                label="Descrição 3"
                                                                placeholder="Descrição 3"
                                                                type="text"
                                                                value={equipmentOptionDescription3}
                                                                handleChange={e => setEquipmentOptionDescription3(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 4
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 4"}
                                                                options={equipmentsAdminIcons}

                                                                onChange={setEquipmentOptionDescriptionImage4}
                                                            />

                                                            <FormInput
                                                                label="Descrição 4"
                                                                placeholder="Descrição 4"
                                                                type="text"
                                                                value={equipmentOptionDescription4}
                                                                handleChange={e => setEquipmentOptionDescription4(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 5
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 5"}
                                                                options={equipmentsAdminIcons}

                                                                onChange={setEquipmentOptionDescriptionImage5}
                                                            />

                                                            <FormInput
                                                                label="Descrição 5"
                                                                placeholder="Descrição 5"
                                                                type="text"
                                                                value={equipmentOptionDescription5}
                                                                handleChange={e => setEquipmentOptionDescription5(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 6
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 6"}
                                                                options={equipmentsAdminIcons}

                                                                onChange={setEquipmentOptionDescriptionImage6}
                                                            />

                                                            <FormInput
                                                                label="Descrição 6"
                                                                placeholder="Descrição 6"
                                                                type="text"
                                                                value={equipmentOptionDescription6}
                                                                handleChange={e => setEquipmentOptionDescription6(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 7
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 7"}
                                                                options={equipmentsAdminIcons}

                                                                onChange={setEquipmentOptionDescriptionImage7}
                                                            />

                                                            <FormInput
                                                                label="Descrição 7"
                                                                placeholder="Descrição 7"
                                                                type="text"
                                                                value={equipmentOptionDescription7}
                                                                handleChange={e => setEquipmentOptionDescription7(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 8
                                </p>
                                                            <Select
                                                                placeholder={"Ícone Descrição 8"}
                                                                options={equipmentsAdminIcons}
                                                                onChange={setEquipmentOptionDescriptionImage8}
                                                            />

                                                            <FormInput
                                                                label="Descrição 8"
                                                                placeholder="Descrição 8"
                                                                type="text"
                                                                value={equipmentOptionDescription8}
                                                                handleChange={e => setEquipmentOptionDescription8(e.target.value)}
                                                            />

                                                            <Button type="submit" style={{ backgroundColor: "black", color: "white" }}

                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(editEquipmentStart({
                                                                        documentID: equipments[modal].documentID,
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
                                                                    }))
                                                                    resetForm();
                                                                    setTimeout(() => {
                                                                        history.goBack();
                                                                    }, 3000);

                                                                }}>
                                                                Editar Equipamento
                        </Button>
                                                            <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => !setModalOpen()}>
                                                                Cancelar
                        </Button>

                                                        </form>
                                                    </div>
                                                </ModalEdit>
                                            ) : (
                                                ""
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
};


export default AdminEquipments;
