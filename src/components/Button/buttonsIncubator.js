import React from 'react';
import { Link } from 'react-router-dom';
import EmpLogo from '../../assets/logo/incubatorButtons/empLogo.png';
import IncuatorLogo from '../../assets/logo/incubatorButtons/incubatorLogo.png';
import OffLogo from '../../assets/logo/incubatorButtons/offLogo.png';

const ButtonsIcubator = () => {


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-24 mb-24 items-center">
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={EmpLogo} alt="equipment" className="w-10/12 m-auto"/>

                    </div>
                </Link>
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={IncuatorLogo} alt="shop" className="w-10/12 m-auto" />

                    </div>
                </Link>
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={OffLogo} alt="spaces" className="w-10/12 m-auto" />

                    </div>
                </Link>
            </div>

        </>
    );
}

export default ButtonsIcubator