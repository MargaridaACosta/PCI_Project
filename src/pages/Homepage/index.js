import React from 'react'
import Map from '../../components/Map';
import '../../styles/header/navbar.css';
import Footer from '../../components/Footer';
import AboutPCI from '../../components/HomepagePCI/aboutPCI.js';
import MissionPCI from '../../components/HomepagePCI/missionPCI.js';
/*import CarrosselPCI from '../../components/HomepagePCI/carrossel.js'; */
import DimentionPCI from '../../components/HomepagePCI/peopleDimentionPCI.js';
import Focus from '../../components/HomepagePCI/focus.js';
import NetworkPCI from '../../components/HomepagePCI/newtwork.js';
import PciLand from '../../assets/img/pciLand.png';
import ButtonsPCI from '../../components/Button/buttonsPCI.js';


import '../../styles/pages.scss'

const Homepage = () => {

    console.log('o sofrimento não é meu é nosso')
    
    return (
        <>
            <img src={PciLand} alt="sala" className="h-full w-full shadow-xl"/>
            <div className="container mx-auto flex-grow ">
            <ButtonsPCI />
            </div>
            <AboutPCI />
            <MissionPCI />
            <Focus />
            <DimentionPCI />
            <NetworkPCI />
            <div className="flex w-full">
            <Map />
            </div>
            <Footer className="absolute pt-0"/>
        </>
    )
}

export default Homepage



/*const Homepage = () => {
    return (
        <>
            <CarrosselPCI />
            <div style={{ paddingTop: '60vh'}}>
            <AboutPCI />
            </div>
            <MissionPCI />
            <Focus />
            <DimentionPCI />
            <NetworkPCI />
            <div className="flex w-full">
            <Map />
            </div>
            <Footer className="absolute"/>
        </>
    )
}

export default Homepage*/