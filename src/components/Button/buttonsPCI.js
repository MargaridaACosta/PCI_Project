import React from 'react';
import { Link } from 'react-router-dom';
import IcubatorLogo from '../../assets/logo/incubatorLogo.png';
import DesignFactoryLogo from '../../assets/logo/designFactoryLogo.png'
import PciLogo from '../../assets/logo/pciLogo.png';

const ButtonsDF = () => {


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-28 mb-28 items-center">
                <Link to="/Incubator">
                    <div className="flex justify-center">
                        <img src={IcubatorLogo} alt="equipment" className="w-10/12 m-auto" style={{width: '87%'}}/>

                    </div>
                </Link>
                <Link to="/Designfactory">
                    <div className="flex justify-center">
                        <img src={DesignFactoryLogo} alt="shop" className="w-9/12 m-auto" />

                    </div>
                </Link>
                <Link to="/InnovationSpace">
                    <div className="flex justify-center">
                        <img src={PciLogo} alt="spaces" className="w-9/12 m-auto" />

                    </div>
                </Link>
            </div>
        </>
    );
}

export default ButtonsDF