import React from 'react';
import { Link } from 'react-router-dom';
import LabsLogo from '../../assets/logo/inovastionButtons/labsLogo.png';
import ServiceLogo from '../../assets/logo/inovastionButtons/serviceLogo.png';
import TerLogo from '../../assets/logo/inovastionButtons/terLogo.png';

const ButtonsInova = () => {


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-24 mb-24 items-center">
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={LabsLogo} alt="equipment" className="w-10/12 m-auto" style={{width: '86%'}}/>

                    </div>
                </Link>
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={ServiceLogo} alt="shop" className="w-9/12 m-auto" />

                    </div>
                </Link>
                <Link to="/soon">
                    <div className="flex justify-center">
                        <img src={TerLogo} alt="spaces" className="w-9/12 m-auto" />

                    </div>
                </Link>
            </div>

        </>
    );
}

export default ButtonsInova