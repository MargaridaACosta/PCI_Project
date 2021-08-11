import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from './../redux/User/user.actions';
import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';
import NikonD810 from '../assets/img/nikond810.png';
import Sala from '../assets/img/sala.png';
import Oficinas from '../assets/img/Oficina.png'

const AdminLayout = props => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <div >
            <Header {...props} />
            <div>
                <VerticalNav>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">

                        <div className="shadow-lg card flex mx-auto md:flex-shrink-0 flex-wrap mt-8 ">
                            <Link to="/admin_equipments">
                                <div className="h-96 w-96 sm:w-96 lg:w-96 xl:w-96object-cover md:w-96 flex-shrink-0" style={{ backgroundImage: `url(${NikonD810})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                                <div className="w-full">
                                    <h5 className="text-red pt-5 pb-5 pl-5">EQUIPAMENTOS</h5>
                                </div>
                            </Link>
                        </div>

                        <div className=" shadow-lg card flex mx-auto md:flex-shrink-0 flex-wrap mt-8 ">

                            <Link to="/admin_rooms">
                                <div className="h-96 w-96 sm:w-96 lg:w-96 xl:w-96 object-cover md:w-96 flex-shrink-0" style={{ backgroundImage: `url(${Sala})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                                <div className="w-full">
                                    <h5 className="text-red pt-5 pb-5 pl-5">ESPAÇOS</h5>
                                </div>
                            </Link>
                        </div>

                        <div className=" shadow-lg card flex mx-auto md:flex-shrink-0 flex-wrap mt-8 ">
                            <Link to="/admin_workshops">
                                <div className="h-96 w-96 sm:w-96 lg:w-96 xl:w-96 object-cover md:w-96 flex-shrink-0" style={{ backgroundImage: `url(${Oficinas})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} ></div>
                                <div className="w-full">
                                    <h5 className="text-red pt-5 pb-5 pl-5">OFICINAS</h5>
                                </div>
                            </Link>
                        </div>
                    </div>

                </VerticalNav>
            </div>
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;