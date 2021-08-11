import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClearCache } from 'react-clear-cache';
import {
    addWorkshopStart,
    fetchWorkshopsStart,
    deleteWorkshopStart,
    editWorkshopStart
} from './../../redux/Workshops/workshops.actions';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import ModalAdd from './../../components/Modal';
import ModalEdit from './../../components/Modal/ModalEdit';
import FormInput from './../../components/Forms/FormInput';
import FormSelect from './../../components/Forms/FormSelect';
import Button from './../../components/Forms/Button';
import './../../styles/pages/admin.scss';

import { storage } from './../../firebase/utils';
import { workshopsAdminIcons } from './../../utils/index';
import FotoUp from '../../assets/icons/fotoup.png';
import Addphoto from '../../assets/icons/addphoto.png';
import PhotoPlaced from '../../assets/icons/photoplaced.png';



const mapState = ({ workshopsData }) => ({
    workshops: workshopsData.workshops
})

const AdminWorkshops = (props) => {
    const history = useHistory();
    const { workshops } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [modal, setModal] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [photoURL, setPhotoURL] = useState('');
    const [progress, setProgress] = useState(0);
    const [workshopAvailability, setWorkshopAvailability] = useState('');
    const [workshopCategory, setWorkshopCategory] = useState('');
    const [workshopName, setWorkshopName] = useState('');
    const [workshopDescription, setWorkshopDescription] = useState('');
    const [workshopCapacity, setWorkshopCapacity] = useState(0);
    const [workshopAccessibility, setWorkshopAccessibility] = useState('');
    const [workshopWifi, setWorkshopWifi] = useState('');
    const [workshopSun, setWorkshopSun] = useState('');
    const [workshopOptionDescription1, setWorkshopOptionDescription1] = useState('');
    const [workshopOptionDescription2, setWorkshopOptionDescription2] = useState('');
    const [workshopOptionDescription3, setWorkshopOptionDescription3] = useState('');
    const [workshopOptionDescription4, setWorkshopOptionDescription4] = useState('');
    const [workshopOptionDescription5, setWorkshopOptionDescription5] = useState('');
    const [workshopOptionDescription6, setWorkshopOptionDescription6] = useState('');
    const [workshopOptionDescriptionImage1, setWorkshopOptionDescriptionImage1] = useState({ label: "none", value: "none" });
    const [workshopOptionDescriptionImage2, setWorkshopOptionDescriptionImage2] = useState({ label: "none", value: "none" });
    const [workshopOptionDescriptionImage3, setWorkshopOptionDescriptionImage3] = useState({ label: "none", value: "none" });
    const [workshopOptionDescriptionImage4, setWorkshopOptionDescriptionImage4] = useState({ label: "none", value: "none" });
    const [workshopOptionDescriptionImage5, setWorkshopOptionDescriptionImage5] = useState({ label: "none", value: "none" });
    const [workshopOptionDescriptionImage6, setWorkshopOptionDescriptionImage6] = useState({ label: "none", value: "none" });



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
            fetchWorkshopsStart()
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
        const uploadTask = storage.ref(`workshops/${image.name}`).put(image);
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
                    .ref("workshops")
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
        setWorkshopCategory('');
        setWorkshopName('');
        setWorkshopAvailability('');
        setWorkshopDescription('');
        setPhotoURL('');
        setWorkshopCapacity(0);
        setWorkshopAccessibility('');
        setWorkshopWifi('');
        setWorkshopSun('');
        setWorkshopOptionDescription1('');
        setWorkshopOptionDescription2('');
        setWorkshopOptionDescription3('');
        setWorkshopOptionDescription4('');
        setWorkshopOptionDescription5('');
        setWorkshopOptionDescription6('');
        setWorkshopOptionDescriptionImage1({ label: "none", value: "none" });
        setWorkshopOptionDescriptionImage2({ label: "none", value: "none" });
        setWorkshopOptionDescriptionImage3({ label: "none", value: "none" });
        setWorkshopOptionDescriptionImage4({ label: "none", value: "none" });
        setWorkshopOptionDescriptionImage5({ label: "none", value: "none" });
        setWorkshopOptionDescriptionImage6({ label: "none", value: "none" });

    }

    const hiddenFileInput = useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };


    const handleSubmit = e => {
        e.preventDefault();

        dispatch(
            addWorkshopStart(
                {
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
                })
        );
        resetForm();
    };

    const { isLatestVersion, emptyCacheStorage } = useClearCache();

    const result = workshopsAdminIcons.filter(item => item.value === 'Aparafusadora')

    console.log(result)
    console.log(workshopOptionDescriptionImage1)

    return (
        <div className="admin">
            {isLatestVersion && (
                <>
                    <div className="container m-auto">
                        <Button style={{ backgroundColor: 'black', color: 'white' }} onClick={e => {
                            e.preventDefault();
                            emptyCacheStorage();
                        }}>
                            LIMPAR CACHE
                </Button>
                        <div className="">
                            <ul>
                                <li>
                                    <Button style={{ backgroundColor: "black", color: "white" }} onClick={() => toggleModal()}>
                                        Adicionar Oficina
                        </Button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ModalAdd {...configModal}>

                        <div className="addNewProductForm">
                            <h1>
                                Adicionar Oficina
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
                                <h3>
                                    Campos Obrigatórios
                        </h3>
                                <FormSelect
                                    required
                                    label="Categoria"
                                    options={[{
                                        value: "",
                                        name: ""
                                    }, {
                                        value: "Oficinas",
                                        name: "Oficinas"
                                    }, {
                                        value: "Oficinas_em_Construção",
                                        name: "Oficinas em Construção"
                                    }
                                    ]}
                                    handleChange={e => setWorkshopCategory(e.target.value)}
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
                                    handleChange={e => setWorkshopAvailability(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Nome"
                                    placeholder="Nome"
                                    type="text"
                                    value={workshopName}
                                    handleChange={e => setWorkshopName(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Descrição Detalhada"
                                    placeholder="Descrição Detalhada"
                                    type="text"
                                    value={workshopDescription}
                                    handleChange={e => setWorkshopDescription(e.target.value)}
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
                                    handleChange={e => setWorkshopAccessibility(e.target.value)}
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
                                    handleChange={e => setWorkshopWifi(e.target.value)}
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
                                    handleChange={e => setWorkshopSun(e.target.value)}
                                />

                                <FormInput
                                    required
                                    label="Lotação"
                                    type="number"
                                    min="0"
                                    max="10000"
                                    step="1"
                                    value={workshopCapacity}
                                    handleChange={e => setWorkshopCapacity(e.target.value)}
                                />




                                <h3 className="pt-8">
                                    Campos Descrição
                                    </h3>

                                <h3 className="pl-24 pt-8">
                                    Máquinas da Oficina
                                    </h3>
                                <div className="container m-auto ">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Máquina 1
                                            </p>

                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone da Máquina 1"}
                                                onChange={setWorkshopOptionDescriptionImage1}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Máquina 1"
                                            placeholder="Descrição Máquina 1"
                                            type="text"
                                            value={workshopOptionDescription1}
                                            handleChange={e => setWorkshopOptionDescription1(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Máquina 2
                                            </p>

                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone da Máquina 2"}
                                                onChange={setWorkshopOptionDescriptionImage2}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Máquina 2"
                                            placeholder="Descrição Máquina 2"
                                            type="text"
                                            value={workshopOptionDescription2}
                                            handleChange={e => setWorkshopOptionDescription2(e.target.value)}
                                        />
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>

                                            <p className="pt-6 pb-3">
                                                Máquina 3
                                            </p>

                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone da Máquina 3"}
                                                onChange={setWorkshopOptionDescriptionImage3}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Máquina 3"
                                            placeholder="Descrição Máquina 3"
                                            type="text"
                                            value={workshopOptionDescription3}
                                            handleChange={e => setWorkshopOptionDescription3(e.target.value)}
                                        />
                                    </div>




                                    <h3 className="pt-8">
                                        Ferramentas da Oficina
                                        </h3>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ferramenta 1
                                        </p>
                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone Ferramenta 1"}
                                                onChange={setWorkshopOptionDescriptionImage4}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Ferramenta 1"
                                            placeholder="Descrição Ferramenta 1"
                                            type="text"
                                            value={workshopOptionDescription4}
                                            handleChange={e => setWorkshopOptionDescription4(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ferramenta 2
                                            </p>
                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone Ferramenta 2"}
                                                onChange={setWorkshopOptionDescriptionImage5}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Ferramenta 2"
                                            placeholder="Descrição Ferramenta 2"
                                            type="text"
                                            value={workshopOptionDescription5}
                                            handleChange={e => setWorkshopOptionDescription5(e.target.value)}
                                        />
                                    </div>


                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex items-center">
                                        <div>
                                            <p className="pt-6 pb-3">
                                                Ferramenta 3
                                        </p>
                                            <Select
                                                styles={customStyles}
                                                options={workshopsAdminIcons}
                                                placeholder={"Ícone Ferramenta 3"}
                                                onChange={setWorkshopOptionDescriptionImage6}
                                            />
                                        </div>
                                        <FormInput
                                            label="Descrição Ferramenta 3"
                                            placeholder="Descrição Ferramenta 3"
                                            type="text"
                                            value={workshopOptionDescription6}
                                            handleChange={e => setWorkshopOptionDescription6(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" style={{ backgroundColor: "black", color: "white" }}>
                                    Adicionar Oficina
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
                                        {workshops.map((workshop, index) => {
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
                                            } = workshop;
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
                                                                    <Button style={{ marginRight: '0', marginLeft: '0', width: '120px', backgroundColor: "black", color: "white" }} onClick={() => dispatch(deleteWorkshopStart(documentID))}>
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
                                                            Adicionar Oficina
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
                                                                    value: "Oficinas",
                                                                    name: "Oficinas"
                                                                }, {
                                                                    value: "Oficinas_em_Construção",
                                                                    name: "Oficinas em Construção"
                                                                }
                                                                ]}
                                                                handleChange={e => setWorkshopCategory(e.target.value)}
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
                                                                handleChange={e => setWorkshopAvailability(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Nome"
                                                                placeholder={workshops[modal].nome}
                                                                type="text"
                                                                value={workshopName}
                                                                handleChange={e => setWorkshopName(e.target.value)}
                                                            />

                                                            <FormInput
                                                                label="Descrição Detalhada"
                                                                placeholder={workshops[modal].descricao}
                                                                type="text"
                                                                value={workshopDescription}
                                                                handleChange={e => setWorkshopDescription(e.target.value)}
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
                                                                handleChange={e => setWorkshopAccessibility(e.target.value)}
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
                                                                handleChange={e => setWorkshopWifi(e.target.value)}
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
                                                                    value: "Exposição Solar",
                                                                    name: "Exposição Solar"
                                                                }]}
                                                                handleChange={e => setWorkshopSun(e.target.value)}
                                                            />

                                                            <FormInput
                                                                required
                                                                label="Lotação"
                                                                type="number"
                                                                min="0"
                                                                max="10000"
                                                                step="1"
                                                                value={workshopCapacity}
                                                                handleChange={e => setWorkshopCapacity(e.target.value)}
                                                            />

                                                            <h1>
                                                                Máquinas da Oficina
                                </h1>

                                                            <p>
                                                                Máquina 1
                                </p>


                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone da Máquina 1"}
                                                                onChange={setWorkshopOptionDescriptionImage1}
                                                            />


                                                            <FormInput
                                                                label="Descrição Máquina 1"
                                                                placeholder="Descrição Máquina 1"
                                                                type="text"
                                                                value={workshopOptionDescription1}
                                                                handleChange={e => setWorkshopOptionDescription1(e.target.value)}
                                                            />

                                                            <p>
                                                                Máquina 2
                                </p>
                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone Máquina 2"}
                                                                onChange={setWorkshopOptionDescriptionImage2}
                                                            />

                                                            <FormInput
                                                                label="Descrição Máquina 2"
                                                                placeholder="Descrição Máquina 2"
                                                                type="text"
                                                                value={workshopOptionDescription2}
                                                                handleChange={e => setWorkshopOptionDescription2(e.target.value)}
                                                            />

                                                            <p>
                                                                Máquina 3
                                </p>
                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone da Máquina 3"}
                                                                onChange={setWorkshopOptionDescriptionImage3}
                                                            />

                                                            <FormInput
                                                                label="Descrição Máquina 3"
                                                                placeholder="Descrição Máquina 3"
                                                                type="text"
                                                                value={workshopOptionDescription3}
                                                                handleChange={e => setWorkshopOptionDescription3(e.target.value)}
                                                            />

                                                            <h1>
                                                                Ferramentas da Oficina
                                </h1>

                                                            <p>
                                                                Ferramenta 1
                                </p>
                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone da Ferramenta 1"}
                                                                onChange={setWorkshopOptionDescriptionImage4}
                                                            />

                                                            <FormInput
                                                                label="Descrição Ferramenta 1"
                                                                placeholder="Descrição Ferramenta 1"
                                                                type="text"
                                                                value={workshopOptionDescription4}
                                                                handleChange={e => setWorkshopOptionDescription4(e.target.value)}
                                                            />

                                                            <p>
                                                                Ferramenta 2
                                </p>
                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone Ferramenta 2"}
                                                                onChange={setWorkshopOptionDescriptionImage5}
                                                            />

                                                            <FormInput
                                                                label="Descrição Ferramenta 2"
                                                                placeholder="Descrição Ferramenta 2"
                                                                type="text"
                                                                value={workshopOptionDescription5}
                                                                handleChange={e => setWorkshopOptionDescription5(e.target.value)}
                                                            />

                                                            <p>
                                                                Ferramenta 3
                                </p>
                                                            <Select
                                                                options={workshopsAdminIcons}
                                                                placeholder={"Ícone Ferramenta 3"}
                                                                onChange={setWorkshopOptionDescriptionImage6}
                                                            />

                                                            <FormInput
                                                                label="Descrição Ferramenta 3"
                                                                placeholder="Descrição Ferramenta 3"
                                                                type="text"
                                                                value={workshopOptionDescription6}
                                                                handleChange={e => setWorkshopOptionDescription6(e.target.value)}
                                                            />


                                                            <Button type="submit" style={{ backgroundColor: "black", color: "white" }}

                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    dispatch(editWorkshopStart({
                                                                        documentID: workshops[modal].documentID,
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
                                                                    }))
                                                                    resetForm();
                                                                    setTimeout(() => {
                                                                        history.goBack();
                                                                    }, 3000);

                                                                }}>
                                                                Editar Oficina
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


export default AdminWorkshops;
