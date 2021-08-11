import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors'
import { Link } from "react-router-dom";

import '../../styles/header/navbar.css';
import Dropdown from './Dropdown';
import Logo from '../../assets/logo/logo.png';
import Menu from '../../assets/logo/menu.png'
import { clearCart } from '../../redux/Cart/cart.actions';
import Shop from '../../assets/icons/shop.png';
import LogoutIcon from '../../assets/icons/logout.png';
import { checkUserIsAdmin } from './../../utils';
import AdminIcon from '../../assets/icons/admin.png'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
    // COM O MÉTODO DE BAIXO SÓ CONTA OS NÃO REPETITIVOS, COM OS DE CIMA CONTA OS REPETIDOS, QUE PENSO QUE NÃO VÁ SER NECESSÁRIO, PENSO QUE O DE BAIXO CHEGA XD
    //totalNumCartItems: state.cartData.cartItems.length
});

const Header = (props) => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);
    const [click, setClick] = useState(false);
    const [show, setShow] = useState(false);

    const isAdmin = checkUserIsAdmin(currentUser);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setShow(false);
        } else {
            setShow(false);
        }
    };

    const signOut = () => {
        dispatch(signOutUserStart())
        dispatch(clearCart())
    };

    return (
        <>
            <div className="bg-black">
                <div className='naveg container m-auto'>
                    <Link to='/' className='naveg-logo' onClick={closeMobileMenu}>
                        <img src={Logo} alt="logo" />
                        <i class='nab na-firstdraft' />
                    </Link>
                    <div className='naveg-icon' onClick={handleClick}>
                        <img src={Menu} width="100%" alt="logo" />
                        <i className={click ? 'nas na-times' : 'nas na-bars'} />
                    </div>

                    {currentUser && (
                        <ul className={click ? 'naveg-menu active' : 'naveg-menu'}>
                            <li
                                className='naveg-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link
                                    to='/DesignFactory'
                                    className='naveg-links naveg-link1'
                                    onClick={closeMobileMenu}
                                >
                                    Design Factory  <i className='nas na-caret-down' />
                                </Link>
                                {show && <Dropdown />}
                            </li>

                            <li className='naveg-item'>
                                <Link to='/Incubator' className='naveg-links naveg-link2' onClick={closeMobileMenu}>
                                    Incubadora
                                </Link>
                            </li>
                            <li className='naveg-item'>
                                <Link
                                    to='/InnovationSpace'
                                    className='naveg-links naveg-link3'
                                    onClick={closeMobileMenu}
                                >
                                    Espaço de Inovação
                                </Link>
                            </li>
                            <li className='naveg-item naveg-link3' src={Shop} alt="cart">
                                <Link
                                    to='/cart'
                                    className='naveg-links naveg-link3'
                                    onClick={closeMobileMenu}
                                >
                                    <div className='grid grid-cols-2 gap-1 '>
                                        <img className=" inline-block align-middle cursor-pointer md:place-self-end" src={Shop} alt="cart" /> <p className=" inline-block align-middle place-self-start ">{'('}{totalNumCartItems}{')'}</p></div>
                                </Link>
                            </li>
                            <li className='naveg-item'>
                                <Link
                                    to='/dashboard'
                                    className='naveg-links naveg-link3'
                                    onClick={closeMobileMenu}
                                >
                                    <div className="w-12 h-12 no-repeat rounded-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${currentUser.photoURL || "https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"})`, backgroundSize: 'cover' }} alt="firebase-image" ></div>

                                </Link>
                            </li>
                            <li className='naveg-item'>
                                <div className='m-auto'>
                                    <img className="inline-block align-middle cursor-pointer" src={LogoutIcon} alt="singout"
                                        onClick={() => signOut()} />
                                </div>
                            </li>
                        </ul>
                    )}

                    {currentUser && isAdmin && (

                        <li className='naveg-item'>
                            <Link
                                to="/admin"
                                className='naveg-links naveg-link3'
                                onClick={closeMobileMenu}
                            >
                                <img className="pt-1 inline-block align-middle cursor-pointer place-self-center naveg-links4 sm:mr-14 sm:w-8" src={AdminIcon} alt="admin" />
                            </Link>
                        </li>

                    )}

                    {!currentUser && (
                        <ul className={click ? 'naveg-menu active' : 'naveg-menu'}>
                            <li
                                className='naveg-item'
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link
                                    to='/DesignFactory'
                                    className='naveg-links naveg-link1'
                                    onClick={closeMobileMenu}
                                >
                                    Design Factory  <i className='nas na-caret-down' />
                                </Link>
                                {show && <Dropdown />}
                            </li>

                            <li className='naveg-item'>
                                <Link to='/Incubator' className='naveg-links naveg-link2' onClick={closeMobileMenu}>
                                    Incubadora
                        </Link>
                            </li>
                            <li className='naveg-item'>
                                <Link
                                    to='/InnovationSpace'
                                    className='naveg-links naveg-link3'
                                    onClick={closeMobileMenu}
                                >
                                    Espaço de Inovação
                        </Link>
                            </li>
                            <li className='naveg-item'>
                                <Link
                                    to='/Login'
                                    className='naveg-links naveg-link3'
                                    onClick={closeMobileMenu}
                                >
                                    Login
                            </Link>

                            </li>
                            <li className='naveg-item'>
                                <Link
                                    className='naveg-links naveg-link3'
                                    to="/registration"
                                >
                                    Register
                            </Link>
                            </li>

                        </ul>
                    )}
                    {/* <Button /> */}
                </div>
            </div>
        </>
    )
}

Header.defaultProps = {
    currentUser: null
}

export default Header;
