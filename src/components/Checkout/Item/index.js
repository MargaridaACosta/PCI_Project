import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addItem, reduceCartItem } from './../../../redux/Cart/cart.actions';
import More from '../../../assets/icons/more.png';
import './../../../styles/components/checkout.scss';
import Remove from '../../../assets/icons/delete.png';
import Minus from '../../../assets/icons/menos.png'

const Item = (equipment) => {
    const dispatch = useDispatch();
    const {
        nome,
        thumbnail,
        quantity,
        documentID,
        descricao_geral,
        tipo
    } = equipment;

    const handleRemoveCartItem = (documentID) => {
        dispatch(
            removeCartItem({
                documentID
            })
        );
    }

    const handleAddEquipment = (equipment) => {
        dispatch(
            addItem(equipment)
        )
    }

    const handleReduceItem = (equipment) => {
        dispatch(
            reduceCartItem(equipment)
        )
    }

    return (
        <div className="card md:flex w-full h-full grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-items-center md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mb-14">

            <div className="w-full md:w-96 h-96 md:h-auto lg:h-auto xl:h-auto justify-self-auto pt-4 md:pt-4 lg:pt-0 xl:pt-0 bg-center flex-shrink-0 " style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt={nome}  ></div>

            <div className="w-full flex-wrap justify-self-start col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 pl-8">
                <div className="remove flex justify-end pt-8 pr-8" onClick={() => handleRemoveCartItem(documentID)}><img src={Remove} /></div>
                <h3 className="text-black font-bold mb-2 ">{nome}</h3>

                {equipment.tipo === "Equipamento" &&
                    <>
                        <div style={{ width: '50px' }} className="align-middle inline-block" onClick={() => handleReduceItem(equipment)}>
                            <img src={Minus} />
                        </div >
                        <div style={{ width: '30px', fontSize: '25px' }} className="inline-block" >{quantity}</div>

                        <div style={{ width: '50px' }} className=" align-middle inline-block" onClick={() => handleAddEquipment(equipment)}>
                            <img src={More} />
                        </div>
                    </>
                }

                <p className="pr-0 md:pr-14">{descricao_geral}</p>


                <div className=" pt-8 pb-8">

                </div>
            </div>
        </div>


    )
}

export default Item;


/*<img className="w-auto h-full flex-none justify-self-auto pt-4 md:pt-0 lg:pt-0 xl:pt-0" src={thumbnail} alt={nome} />*/