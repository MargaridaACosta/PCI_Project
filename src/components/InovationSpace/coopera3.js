import React from 'react';
import Button from '../../components/Forms/Button';
import { Link } from 'react-router-dom';



const CooperMore = () => {
    return (
        <>
    <div className="container m-auto flex justify-center align-middle screen/2 text-yellow" style={{height: '50vh', justifyContent: 'center'}}>
            <div className="align-middle m-auto">
                <h1>PARA MAIS INFORMAÇÕES <br></br> CONSULTE A PÁGINA  DA <br></br> UACOOPERA</h1>
                <Link to="/soon" >
                <Button 
                 style={{ backgroundColor: "#FDA607", color:  "white" }} >SABER MAIS</Button>
                 </Link>
            </div>
    </div>

        </>
    );
}

export default CooperMore;