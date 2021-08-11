import React from 'react';
import EquipmentButton from '../../assets/icons/DesignFactory/equipamentosCustom.png';
import ShopButton from '../../assets/icons/DesignFactory/oficinasCustom.png';
import SpacesButton from '../../assets/icons/DesignFactory/espacosCustom.png';
import { Link } from 'react-router-dom';


const ButtonsDF = () => {



    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-24 mb-24 items-center">
                <Link to="/equipments">
                    <div className="flex justify-center">
                        <img src={EquipmentButton} alt="equipment" className="w-10/12 m-auto lg:w-10/12" style={{width: '85%'}} />

                    </div>
                </Link>
                <Link to="/workshops">
                    <div className="flex justify-center">
                        <img src={ShopButton} alt="shop" className="w-9/12 m-auto" />

                    </div>
                </Link>
                <Link to="/spaces">
                    <div className="flex justify-center">
                        <img src={SpacesButton} alt="spaces" className="w-9/12 m-auto" />

                    </div>
                </Link>
            </div>

        </>
    );
}

export default ButtonsDF





/*return(
    <>
    <div className="grid grid-cols-3 gap-4 mt-24 mb-24 items-center">
        <Link to="/Equipment">
        <div className="flex relative justify-center">
        <img src={EquipmentButton} alt="equipment" className="w-1/3 m-auto absolute"/>
        <img src={EquipmentL} alt="equipmentl" className="w-2/3 m-auto opacity-0" />
        </div>
        </Link>
        <Link>
        <div className="flex relative justify-center">
        <img src={ShopButton} alt="shop" className="w-1/3 m-auto absolute" />
        <img src={ShopL} alt="equipmentl" className="w-2/3 m-auto opacity-0"/>
        </div>
        </Link>
        <Link to="Spaces">
        <div className="flex relative justify-center">
        <img src={SpacesButton} alt="spaces" className="w-1/3 m-auto absolute"/>
        <img src={SpaceL} alt="equipmentl" className="w-2/3 m-auto opacity-0"/>
        </div>
        </Link>
    </div>

    </>
);
}

export default ButtonsDF*/