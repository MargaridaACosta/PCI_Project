import React from 'react';
import '../../../styles/acordition/acordition.scss';
import More from '../../../assets/icons/more.png';




const ProgramsDF = () => {
    return (
        <>
    <div className=" bg-red como" style={{height: '50vh', justifyContent: 'center'}}>
    <div className="donslide text-white">
    <div className="item">
        <h2 className="donslide-title">DESIGN E<br></br> INVESTIGAÇÃO</h2>
        <p className="aqui  pt-48" >Projeto liderado pela Universidade de Aveiro em 2009, mobilizou os agentes da Região de Aveiro para a constituição de um espaço que promovesse a economia do conhecimento.
            O PCI · Creative Science Park – Aveiro Region é membro efetivo da IASP – International Association of Science Parks and Areas of Innovation</p>
        <img src={More} alt="more" className="iconmore pt-52 pr-20"/>
    </div>
    <div className="item ">
        <h2 className="donslide-title">DESIGN E<br></br> CAPACITAÇÃO</h2>
        <p className="aqui  pt-48">Criação, desenvolvimento, apoio e implementação de ações de capacitação individuais e coletivas para a aquisição e consolidação de competências em processos de inovação orientados pelo design (design-led).</p>
            <img src={More} alt="more" className="iconmore pt-52 pr-20"/>
    </div>
    <div className="item">
        <h2 className="donslide-title">DESIGN E<br></br> COMUNICAÇÃO</h2>
        <p className="aqui pt-48">Criação, desenvolvimento e implementação de estratégias, canais e meios de comunicação entre a DFA, a Universidade de Aveiro, ou outras entidades do sistema científico e tecnológico, o tecido económico social e cultural e a sociedade.</p>
            <img src={More} alt="more" className="iconmore pt-52 pr-20"/>
    </div>
</div>
    </div>

    <div className="mini bg-red text-white" style={{height: '100%', justifyContent: 'center'}}>
        <div className="container m-auto pt-8 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-14">
        <h5 className="special  w-64">DESIGN E<br></br> INVESTIGAÇÃO</h5>
   
        <p className="col-span-2" >Projeto liderado pela Universidade de Aveiro em 2009, mobilizou os agentes da Região de Aveiro para a constituição de um espaço que promovesse a economia do conhecimento.
            O PCI · Creative Science Park – Aveiro Region é membro efetivo da IASP – International Association of Science Parks and Areas of Innovation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-14">
        <h5 className="special w-64 ">DESIGN E<br></br> CAPACITAÇÃO</h5>
    
        <p className="col-span-2">Criação, desenvolvimento, apoio e implementação de ações de capacitação individuais e coletivas para a aquisição e consolidação de competências em processos de inovação orientados pelo design (design-led).</p>
            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <h5 className="special w-64">DESIGN E<br></br> COMUNICAÇÃO</h5>

        <p className="col-span-2">Criação, desenvolvimento e implementação de estratégias, canais e meios de comunicação entre a DFA, a Universidade de Aveiro, ou outras entidades do sistema científico e tecnológico, o tecido económico social e cultural e a sociedade.</p>
            </div>
            </div>
    </div>
   
    

        </>
    );
}

export default ProgramsDF;