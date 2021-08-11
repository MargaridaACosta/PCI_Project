import React from 'react';
import Button from '../../components/Forms/Button';
import { Link } from 'react-router-dom';



const NetworkPCI = () => {
    return (
        <>
    <div className="m-auto flex justify-center align-middle bg-black" style={{height: '100vh'}}>
            <div className="container align-middle m-auto bg-white justify-center pt-14 md:pt-36 lg:pt-40" style={{height: '50%'}}>
                <h1 className="text-black align-middle m-auto ">EQUIPA</h1>
                <Link to="/soon" >
                <Button 
                 style={{ backgroundColor: "black", color:  "white" }} >SABER MAIS</Button>
                 </Link>
            </div>
    </div>

        </>
    );
}

export default NetworkPCI;