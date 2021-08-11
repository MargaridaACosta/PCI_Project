import React from 'react';
import '../../styles/acordition/acordition.scss';
import MoreIncubator from '../../assets/icons/moreIncubator.png'



const ProgramsIncubator = () => {
    return (
        <>
     <div className=" bg-green como" style={{height: '50vh', justifyContent: 'center'}}>
        <div className="donslide text-white">
        <div className="item">
        <h2 className="donslide-title">START:<br></br> LANÇAMENTO</h2>
        <p className="aqui  pt-48" >Aquisição de competências e recursos para prototipar, testar e lançar o seu projeto no mercado.</p>
        <img src={MoreIncubator} alt="MoreIncubator" className="iconmore pt-52 pr-20"/>
        </div>
        <div className="item ">
        <h2 className="donslide-title">START UP:<br></br> CRESCIMENTO</h2>
        <p className="aqui  pt-48">Obter rendimentos pela comercialização do produto/serviço, crescer a rede de clientes e melhorar a proposta de valor.</p>
            <img src={MoreIncubator} alt="MoreIncubator" className="iconmore pt-52 pr-20"/>
        </div>
        <div className="item">
        <h2 className="donslide-title">START GO:<br></br> ESCALABILIDADE</h2>
        <p className="aqui pt-48">Ganhar escalabilidade: expandir para novos mercados (internacionalização); criar um novo produto/serviço; ou conquistar novos segmentos no mercado atual.</p>
            <img src={MoreIncubator} alt="MoreIncubator" className="iconmore pt-52 pr-20"/>
    </div>
    </div>
    </div>

    

    





    <div className="mini bg-green text-white" style={{height: '100%', justifyContent: 'center'}}>
        <div className="container m-auto pt-8 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-14">
        <h5 className="special  w-64">START:<br></br> LANÇAMENTO</h5>
   
        <p className="col-span-2" >Aquisição de competências e recursos para prototipar, testar e lançar o seu projeto no mercado.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-14">
        <h5 className="special w-64 ">START UP:<br></br> CRESCIMENTO</h5>
    
        <p className="col-span-2">Obter rendimentos pela comercialização do produto/serviço, crescer a rede de clientes e melhorar a proposta de valor.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <h5 className="special w-64">START GO:<br></br> ESCALABILIDADE</h5>

        <p className="col-span-2">Ganhar escalabilidade: expandir para novos mercados (internacionalização); criar um novo produto/serviço; ou conquistar novos segmentos no mercado atual.</p>
            </div>
            </div>
    </div>

        </>
    );
}

export default ProgramsIncubator;