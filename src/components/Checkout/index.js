import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import Button from './../Forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const Checkout = () => {
    const history = useHistory();
    const { cartItems, total } = useSelector(mapState);
    console.log(cartItems)
    return (
        <div className="container m-auto ">
            <h1 className="text-red pt-24 pb-24">
                LISTA DE REQUISIÇÕES
            </h1>
            {cartItems.length > 0 ? (
                <div>
                    <h3 className="pb-14">{cartItems[0].tipo}</h3>

                    {cartItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <Item {...item} />
                                </div>
                            </div>
                        )
                    })}


                    <div>
                        <div className="grid grid-cols-2 gap-10 flex pb-36 pt-24">
                            <div>
                                <Button style={{ marginLeft: '0', marginRight: '0', width: '170px' }} onClick={() => history.goBack()}>
                                    Voltar
                                            </Button>
                            </div>
                            <div className="flex justify-end">
                                <Button style={{ marginRight: '0', marginLeft: '0', width: '170px' }} onClick={() => history.push('/confirm_checkout')}>
                                    Requisitar
                                            </Button>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                    <h1 className="text-red">
                        CARRINHO VAZIO
                    </h1>
                )}
        </div>
    )
}

export default Checkout
