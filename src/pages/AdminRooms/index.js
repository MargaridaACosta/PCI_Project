import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClearCache } from 'react-clear-cache';
import {
    addSpaceStart,
    fetchSpacesStart,
    deleteSpaceStart,
    editSpaceStart
} from './../../redux/Spaces/spaces.actions';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import ModalAdd from './../../components/Modal';
import ModalEdit from './../../components/Modal/ModalEdit';
import FormInput from './../../components/Forms/FormInput';
import FormSelect from './../../components/Forms/FormSelect';
import Button from './../../components/Forms/Button';
import './../../styles/pages/admin.scss';

import { storage } from './../../firebase/utils';
import { spacesAdminIcons } from './../../utils/index';
import FotoUp from '../../assets/icons/fotoup.png';
import Addphoto from '../../assets/icons/addphoto.png';
import PhotoPlaced from '../../assets/icons/photoplaced.png';




const mapState = ({ spacesData }) => ({
    spaces: spacesData.spaces
})

const AdminSpaces = (props) => {
    const history = useHistory();
    const { spaces } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [modal, setModal] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [photoURL, setPhotoURL] = useState('');
    const [progress, setProgress] = useState(0);
    const [spaceAvailability, setSpaceAvailability] = useState('');
    const [spaceCategory, setSpaceCategory] = useState('');
    const [spaceName, setSpaceName] = useState('');
    const [spaceDescription, setSpaceDescription] = useState('');
    const [spaceCapacity, setSpaceCapacity] = useState(0);
    const [spaceAccessibility, setSpaceAccessibility] = useState('');
    const [spaceWifi, setSpaceWifi] = useState('');
    const [spaceSun, setSpaceSun] = useState('');
    const [spaceOptionDescription1, setSpaceOptionDescription1] = useState('');
    const [spaceOptionDescription2, setSpaceOptionDescription2] = useState('');
    const [spaceOptionDescription3, setSpaceOptionDescription3] = useState('');
    const [spaceOptionDescription4, setSpaceOptionDescription4] = useState('');
    const [spaceOptionDescription5, setSpaceOptionDescription5] = useState('');
    const [spaceOptionDescription6, setSpaceOptionDescription6] = useState('');
    const [spaceOptionDescriptionImage1, setSpaceOptionDescriptionImage1] = useState({ label: "none", value: "none" });
    const [spaceOptionDescriptionImage2, setSpaceOptionDescriptionImage2] = useState({ label: "none", value: "none" });
    const [spaceOptionDescriptionImage3, setSpaceOptionDescriptionImage3] = useState({ label: "none", value: "none" });
    const [spaceOptionDescriptionImage4, setSpaceOptionDescriptionImage4] = useState({ label: "none", value: "none" });
    const [spaceOptionDescriptionImage5, setSpaceOptionDescriptionImage5] = useState({ label: "none", value: "none" });
    const [spaceOptionDescriptionImage6, setSpaceOptionDescriptionImage6] = useState({ label: "none", value: "none" });


    useEffect(() => {
        dispatch(
            fetchSpacesStart()
        );

    }, []);

    const toggleModal = () => setHideModal(!hideModal);

    const configModal = {
        hideModal,
        toggleModal
    };

    const handleOnClick = (index) => {
        setModalOpen(true)
        setModal(index)
    }

    const handlePhoto = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`spaces/${image.name}`).put(image);
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
                    .ref("spaces")
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
        setSpaceCategory('');
        setSpaceName('');
        setSpaceAvailability('');
        setSpaceDescription('');
        setPhotoURL('');
        setSpaceCapacity(0);
        setSpaceAccessibility('');
        setSpaceWifi('');
        setSpaceSun('');
        setSpaceOptionDescription1('');
        setSpaceOptionDescription2('');
        setSpaceOptionDescription3('');
        setSpaceOptionDescription4('');
        setSpaceOptionDescription5('');
        setSpaceOptionDescription6('');
        setSpaceOptionDescriptionImage1({ label: "none", value: "none" });
        setSpaceOptionDescriptionImage2({ label: "none", value: "none" });
        setSpaceOptionDescriptionImage3({ label: "none", value: "none" });
        setSpaceOptionDescriptionImage4({ label: "none", value: "none" });
        setSpaceOptionDescriptionImage5({ label: "none", value: "none" });
        setSpaceOptionDescriptionImage6({ label: "none", value: "none" });

    }




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





    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };


    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            addSpaceStart(
                {
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
                })
        );
        resetForm();
    };

    const { isLatestVersion, emptyCacheStorage } = useClearCache();

    const result = spacesAdminIcons.filter(item => item.value === 'Aparafusadora')

    console.log(result)
    console.log(spaceOptionDescriptionImage1)

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
                </Button>
                        <div>
                            <ul>
                                <li>
                                    <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => toggleModal()}>
                                        Adicionar Espaço
                        </Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ModalAdd {...configModal}>

                        <div className="addNewProductForm">
                            <h1>
                                Adicionar Espaço
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
                                        value: "Espaços",
                                        name: "Espaços"
                                    }, {
                                        value: "Salas",
                                        name: "Salas"
                                    }, {
                                        value: "Espaços_de_Exposição",
                                        name: "Espaços de Exposição"
                                    }
                                    ]}
                                    handleChange={e => setSpaceCategory(e.target.value)}
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
                                    handleChange={e => setSpaceAvailability(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Nome"
                                    placeholder="Nome"
                                    type="text"
                                    value={spaceName}
                                    handleChange={e => setSpaceName(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Descrição Detalhada"
                                    placeholder="Descrição Detalhada"
                                    type="text"
                                    value={spaceDescription}
                                    handleChange={e => setSpaceDescription(e.target.value)}
                                />

                                <FormSelect
                                    required
                                    label="Acessibilidade"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Acessível",
                                        name: "Acessível"
                                    }, {
                                        value: "Não Acessível",
                                        name: "Não Acessível"
                                    }]}
                                    handleChange={e => setSpaceAccessibility(e.target.value)}
                                />

                                <FormSelect
                                    required
                                    label="Wifi"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Sem Wifi",
                                        name: "Sem Wifi"
                                    }, {
                                        value: "Com Wifi",
                                        name: "Com Wifi"
                                    }]}
                                    handleChange={e => setSpaceWifi(e.target.value)}
                                />
                                <FormSelect
                                    required
                                    label="Exposição Solar"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Sem Exposição Solar",
                                        name: "Sem Exposição Solar"
                                    }, {
                                        value: "Com Exposição Solar",
                                        name: "Com Exposição Solar"
                                    }]}
                                    handleChange={e => setSpaceSun(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Lotação"
                                    type="number"
                                    min="0"
                                    max="10000"
                                    step="1"
                                    value={spaceCapacity}
                                    handleChange={e => setSpaceCapacity(e.target.value)}
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
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 1"}
                                                onChange={setSpaceOptionDescriptionImage1}
                                            />
                                        </div>

                                        <FormInput
                                            label="Descrição 1"
                                            placeholder="Descrição 1"
                                            type="text"
                                            value={spaceOptionDescription1}
                                            handleChange={e => setSpaceOptionDescription1(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 2
                                        </p>
                                            <Select
                                                styles={customStyles}
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 2"}
                                                onChange={setSpaceOptionDescriptionImage2}
                                            />
                                        </div>

                                        <FormInput
                                            label="Descrição 2"
                                            placeholder="Descrição 2"
                                            type="text"
                                            value={spaceOptionDescription2}
                                            handleChange={e => setSpaceOptionDescription2(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 3
                                             </p>
                                            <Select
                                                styles={customStyles}
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 3"}
                                                onChange={setSpaceOptionDescriptionImage3}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 3"
                                            placeholder="Descrição 3"
                                            type="text"
                                            value={spaceOptionDescription3}
                                            handleChange={e => setSpaceOptionDescription3(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 4
                                            </p>
                                            <Select
                                                styles={customStyles}
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 4"}
                                                onChange={setSpaceOptionDescriptionImage4}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 4"
                                            placeholder="Descrição 4"
                                            type="text"
                                            value={spaceOptionDescription4}
                                            handleChange={e => setSpaceOptionDescription4(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 5
                                            </p>
                                            <Select
                                                styles={customStyles}
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 5"}
                                                onChange={setSpaceOptionDescriptionImage5}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 5"
                                            placeholder="Descrição 5"
                                            type="text"
                                            value={spaceOptionDescription5}
                                            handleChange={e => setSpaceOptionDescription5(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Ícone da Descrição 6
                                            </p>
                                            <Select
                                                styles={customStyles}
                                                options={spacesAdminIcons}
                                                placeholder={"Ícone da Descrição 6"}
                                                onChange={setSpaceOptionDescriptionImage6}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição 6"
                                            placeholder="Descrição 6"
                                            type="text"
                                            value={spaceOptionDescription6}
                                            handleChange={e => setSpaceOptionDescription6(e.target.value)}
                                        />
                                    </div>

                                    <Button type="submit" style={{ backgroundColor: "black", color: "white" }}>
                                        Adicionar Espaço
                                     </Button>
                                    <Button style={{ backgroundColor: "black", color: "white", marginBottom: "4rem" }} onClick={() => !toggleModal()}>
                                        Cancelar
                                     </Button>

                                </div>
                            </form>


                        </div>

                    </ModalAdd>

                    <div className="container m-auto pt-36 pb-24">

                        <div>
                            <div>
                                <h1 className="pb-14">Stock Existente</h1>
                                <div>
                                    <div>
                                        {spaces.map((space, index) => {
                                            const {
                                                categoria,
                                                capacidade,
                                                acessibilidade,
                                                wifi,
                                                sun,
                                                descricao1,
                                                descricao2,
                                                descricao3,
                                                descricao4,
                                                descricao5,
                                                descricao6,
                                                descricao_geral,
                                                disponibilidade,
                                                imagemDescricao1,
                                                imagemDescricao2,
                                                imagemDescricao3,
                                                imagemDescricao4,
                                                imagemDescricao5,
                                                imagemDescricao6,
                                                nome,
                                                thumbnail,
                                                documentID
                                            } = space;
                                            return (
                                                <>
                                                    <div className="card md:flex w-full h-full grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-items-center md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mb-24" key={index}>

                                                        <div className="w-full md:w-96 h-96 md:h-auto lg:h-auto xl:h-auto justify-self-auto pt-4 md:pt-4 lg:pt-0 xl:pt-0 bg-center flex-shrink-0 " style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt={nome}  ></div>

                                                        <div className="w-full flex-wrap justify-self-start col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 pl-8">

                                                            <h3 className="pt-4 pb-8"> {nome}</h3>

                                                            <h5 className="text-black font-bold mb-2 ">{disponibilidade}</h5>

                                                            <div className="flex justify-end">
                                                                <div className="mr-4 pb-4" >
                                                                    <Button style={{ marginRight: '0', marginLeft: '0', width: '120px', backgroundColor: "black", color: "white" }} onClick={() => handleOnClick(index)}>
                                                                        Editar
                                                                </Button>
                                                                </div>

                                                                <div className="mr-4 pb-4" >
                                                                    <Button style={{ marginRight: '0', marginLeft: '0', width: '120px', backgroundColor: "black", color: "white" }} onClick={() => dispatch(deleteSpaceStart(documentID))}>
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
                                                            Adicionar Espaço
                    </h1>
                                                        <img src={photoURL || "https://content.hostgator.com/img/weebly_image_sample.png"} alt="firebase-image" />
                                                        <input
                                                            type="file"
                                                            onChange={handlePhoto}
                                                        />
                                                        <Button onClick={handleUpload}>
                                                            Upload
                            </Button>

                                                        <form onSubmit={handleSubmit}>
                                                            <h1>
                                                                Campos Obrigatórios
                        </h1>
                                                            <FormSelect
                                                                label="Categoria"
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Espaços",
                                                                    name: "Espaços"
                                                                }, {
                                                                    value: "Salas",
                                                                    name: "Salas"
                                                                }, {
                                                                    value: "Espaços_de_Exposição",
                                                                    name: "Espaços de Esposição"
                                                                }
                                                                ]}
                                                                handleChange={e => setSpaceCategory(e.target.value)}
                                                            />

                                                            <FormSelect
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
                                                                handleChange={e => setSpaceAvailability(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Nome"
                                                                placeholder={spaces[modal].nome}
                                                                type="text"
                                                                value={spaceName}
                                                                handleChange={e => setSpaceName(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Descrição Detalhada"
                                                                placeholder={spaces[modal].descricao}
                                                                type="text"
                                                                value={spaceDescription}
                                                                handleChange={e => setSpaceDescription(e.target.value)}
                                                            />

                                                            <FormSelect
                                                                label="Acessibilidade"
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Acessível",
                                                                    name: "Acessível"
                                                                }, {
                                                                    value: "Não Acessível",
                                                                    name: "Não Acessível"
                                                                }]}
                                                                handleChange={e => setSpaceAccessibility(e.target.value)}
                                                            />

                                                            <FormSelect
                                                                label="Wifi"
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Sem Wifi",
                                                                    name: "Sem Wifi"
                                                                }, {
                                                                    value: "Com Wifi",
                                                                    name: "Com Wifi"
                                                                }]}
                                                                handleChange={e => setSpaceWifi(e.target.value)}
                                                            />
                                                            <FormSelect
                                                                label="Exposição Solar"
                                                                options={[{
                                                                    value: "",
                                                                    name: ""
                                                                }, {
                                                                    value: "Sem Exposição Solar",
                                                                    name: "Sem Exposição Solar"
                                                                }, {
                                                                    value: "Com Exposição Solar",
                                                                    name: "Com Exposição Solar"
                                                                }]}
                                                                handleChange={e => setSpaceSun(e.target.value)}
                                                            />

                                                            <FormInput
                                                                required
                                                                label="Lotação"
                                                                type="number"
                                                                min="0"
                                                                max="10000"
                                                                step="1"
                                                                value={spaceCapacity}
                                                                handleChange={e => setSpaceCapacity(e.target.value)}
                                                            />

                                                            <h1>
                                                                Campos Descrição
                                </h1>

                                                            <p>
                                                                Ícone da Descrição 1
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 1"}
                                                                onChange={setSpaceOptionDescriptionImage1}
                                                            />


                                                            <FormInput
                                                                placeholder="Descrição 1"
                                                                type="text"
                                                                value={spaceOptionDescription1}
                                                                handleChange={e => setSpaceOptionDescription1(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 2
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 2"}
                                                                onChange={setSpaceOptionDescriptionImage2}
                                                            />

                                                            <FormInput
                                                                label="Descrição 2"
                                                                placeholder="Descrição 2"
                                                                type="text"
                                                                value={spaceOptionDescription2}
                                                                handleChange={e => setSpaceOptionDescription2(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 3
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 3"}
                                                                onChange={setSpaceOptionDescriptionImage3}
                                                            />

                                                            <FormInput
                                                                label="Descrição 3"
                                                                placeholder="Descrição 3"
                                                                type="text"
                                                                value={spaceOptionDescription3}
                                                                handleChange={e => setSpaceOptionDescription3(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 4
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 4"}
                                                                onChange={setSpaceOptionDescriptionImage4}
                                                            />

                                                            <FormInput
                                                                label="Descrição 4"
                                                                placeholder="Descrição 4"
                                                                type="text"
                                                                value={spaceOptionDescription4}
                                                                handleChange={e => setSpaceOptionDescription4(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 5
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 5"}
                                                                onChange={setSpaceOptionDescriptionImage5}
                                                            />

                                                            <FormInput
                                                                label="Descrição 5"
                                                                placeholder="Descrição 5"
                                                                type="text"
                                                                value={spaceOptionDescription5}
                                                                handleChange={e => setSpaceOptionDescription5(e.target.value)}
                                                            />

                                                            <p>
                                                                Ícone da Descrição 6
                                </p>
                                                            <Select
                                                                options={spacesAdminIcons}
                                                                placeholder={"Ícone da Descrição 6"}
                                                                onChange={setSpaceOptionDescriptionImage6}
                                                            />

                                                            <FormInput
                                                                label="Descrição 6"
                                                                placeholder="Descrição 6"
                                                                type="text"
                                                                value={spaceOptionDescription6}
                                                                handleChange={e => setSpaceOptionDescription6(e.target.value)}
                                                            />


                                                            <Button type="submit" style={{ backgroundColor: "black", color: "white" }}

                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(editSpaceStart({
                                                                        documentID: spaces[modal].documentID,
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
                                                                    }))
                                                                    resetForm();
                                                                    setTimeout(() => {
                                                                        history.goBack();
                                                                    }, 3000);

                                                                }}>
                                                                Editar Espaço
                        </Button>
                                                            <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => !setModalOpen()}>
                                                                Cancelar
                        </Button>

                                                        </form>
                                                    </div >
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


export default AdminSpaces;
