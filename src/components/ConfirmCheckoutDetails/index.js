import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import FormInput from './../Forms/FormInput';
import LargeTextField from './../Forms/LargeTextField.js';
import Button from './../Forms/Button';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selectors';
import './../../styles/components/confirm_checkout.scss';
import { createStructuredSelector } from 'reselect';
import emailjs from "emailjs-com";
import RadioButtons from '../Forms/RadioButton';
import TermsOfService from '../TermsOfService';
import Checkbox from '../Forms/CheckBox'
import { clearCart } from '../../redux/Cart/cart.actions';


const initialConfirmDetailsState = {
    date1: '',
    date2: '',
    description: '',
    option1: '',
    option2: '',
    option3: ''
};

const mapStateUser = ({ user }) => ({
    currentUser: user.currentUser,
})

const mapState = createStructuredSelector({
    itemCount: selectCartItemsCount,
    cartItems: selectCartItems,
});



const ConfirmCheckoutDetails = () => {
    const [confirmDetails, setConfirmDetails] = useState({ ...initialConfirmDetailsState });
    const [isChecked, setIsChecked] = useState(false);
    const { itemCount, cartItems } = useSelector(mapState);
    const { currentUser } = useSelector(mapStateUser);
    const dispatch = useDispatch();
    const history = useHistory();



    const clear = () => {
        dispatch(clearCart())
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
        if (itemCount < 1) {
            history.push('/')
        }

    }, [itemCount])

    const handleConfirmation = e => {
        const { name, value } = e.target;
        setConfirmDetails({
            ...confirmDetails,
            [name]: value
        });
        console.log(initialConfirmDetailsState)
    };

    const typezão = cartItems[0].tipo;

    const handleFormSubmit = async e => {
        e.preventDefault();

        if (
            !confirmDetails.date1 ||
            !confirmDetails.date2 ||
            !confirmDetails.description ||
            !confirmDetails.option1 ||
            !confirmDetails.option2 ||
            !confirmDetails.option3 ||
            !isChecked

        ) {
            return;
        }


        const configOrder = {
            typezão: cartItems[0].tipo,
            orderItems: cartItems.map(item => {
                const { documentID, tipo, categoria, thumbnail, nome, quantity } = item;

                return {
                    documentID,
                    thumbnail,
                    nome,
                    quantity,
                    tipo,
                    categoria
                };
            })
        }

        const username = currentUser.displayName;
        const email = currentUser.email;
        const logo1 = "https://drive.google.com/uc?id=1Sl92euMupnaBV9EmG76qklN4iKoG4pBx"
        const logo2 = "https://drive.google.com/uc?id=1XgtCUkLHf-Gt8OvF2xRgvXOVjsfErQZt"

        const configEmail = {
            user_name: username,
            user_email: email,
            tipo: cartItems[0].tipo,
            nome: cartItems[0].nome,
            imagem: cartItems[0].thumbnail,
            categoria: cartItems[0].categoria,
            quantidade: cartItems[0].quantity,
            data_inicio: confirmDetails.date1,
            data_fim: confirmDetails.date2,
            data_descricao: confirmDetails.description,
            data_option1: confirmDetails.option1,
            data_option2: confirmDetails.option2,
            data_option3: confirmDetails.option3,
            logo_1: logo1,
            logo_2: logo2
        }

        emailjs.send('gmail', 'template_ljqoqos', configEmail, 'user_t8xqBjNgKVCzIZy8P90KT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        dispatch(
            saveOrderHistory(configOrder)
        );
        history.push('/')
    };

    console.log(currentUser)
    console.log(cartItems)

    return (
        <div className="container m-auto mt-36">
            <form onSubmit={handleFormSubmit}>
                <div className="container m-auto">

                    <h5 className="text-red font-bold mt-14 mb-6">
                        PERÍODO DE REQUISIÇÃO
                </h5>

                    < div className=" grid grid-cols-2 gap-2">
                        <FormInput
                            required
                            type="date"
                            name="date1"
                            value={confirmDetails.date1}
                            handleChange={e => handleConfirmation(e)}
                        />

                        <FormInput
                            required
                            type="date"
                            name="date2"
                            value={confirmDetails.date2}
                            handleChange={e => handleConfirmation(e)}
                        />
                    </div>


                    <div className="">
                        <h5 className="text-red font-bold mt-24 mb-6">
                            DESCRIÇÃO DO EVENTO
                            </h5>
                        <LargeTextField
                            required
                            placeholder="Descrição do Projeto"
                            name="description"
                            type="text"
                            value={confirmDetails.description}
                            handleChange={e => handleConfirmation(e)}
                        />
                    </div>
                </div>


                <div className="container m-auto grid grid-cols-3 gap-8 mt-14">
                    <div className="grid grid-cols-1 gap-3 flex">
                        <h5 className="text-red font-bold mt-14 mb-6">
                            TIPO DE EVENTO
                    </h5>
                        <RadioButtons style={{ marginLeft: "20px" }}
                            required
                            type="radio"
                            label="Público"
                            name="option1"
                            checked={confirmDetails.option1 === "Sim"}
                            value="Sim"
                            handleChange={e => handleConfirmation(e)}
                        />
                        <RadioButtons style={{ marginLeft: "18px" }}
                            required
                            type="radio"
                            label="Privado"
                            name="option1"
                            checked={confirmDetails.option1 === "Não"}
                            value="Não"
                            handleChange={e => handleConfirmation(e)}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-3 flex">
                        <h5 className="text-red font-bold mt-14 mb-6">
                            JÁ UTILIZOU O/A {cartItems[0].tipo.toUpperCase()}?
                    </h5>

                        <RadioButtons style={{ marginLeft: "20px" }}
                            required
                            type="radio"
                            label="Sim"
                            name="option2"
                            checked={confirmDetails.option2 === "Sim"}
                            value="Sim"
                            handleChange={e => handleConfirmation(e)}
                        />
                        <RadioButtons style={{ marginLeft: "18px" }}
                            required
                            type="radio"
                            label="Não"
                            name="option2"
                            checked={confirmDetails.option2 === "Não"}
                            value="Não"
                            handleChange={e => handleConfirmation(e)}
                        />
                    </div>


                    <div className="grid grid-cols-1 gap-3 flex">
                        <h5 className="text-red font-bold mt-14 mb-6">
                            NECESSITA DE APOIO TÉCNICO?
                        </h5>

                        <RadioButtons style={{ marginLeft: "20px" }}
                            required
                            type="radio"
                            label="Sim"
                            name="option3"
                            checked={confirmDetails.option3 === "Sim"}
                            value="Sim"
                            handleChange={e => handleConfirmation(e)}
                        />
                        <RadioButtons style={{ marginLeft: "18px" }}
                            required
                            type="radio"
                            label="Não"
                            name="option3"
                            checked={confirmDetails.option3 === "Não"}
                            value="Não"
                            handleChange={e => handleConfirmation(e)}
                        />
                    </div>
                </div>
                <div className="container m-auto">
                    <h5 className="text-red font-bold mt-14 mb-6">
                        TERMOS E CONDIÇÕES
                        </h5>
                    <div>
                        <TermsOfService />
                    </div>

                    <div className="grid grid-cols-2 gap-3 flex-wrap">
                        <Checkbox style={{ marginLeft: "20px" }}
                            required
                            type="checkbox"
                            name="checkbox"
                            label="Concordo com os termos de utilização"
                            checked={isChecked}
                            handleChange={(e) => { setIsChecked(e.target.checked) }}
                        />
                    </div>
                </div>
                <div className="container m-auto grid justify-items-end mb-56">
                    <div>
                        <Button type="submit">
                            Finalizar Requisição
                </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ConfirmCheckoutDetails;