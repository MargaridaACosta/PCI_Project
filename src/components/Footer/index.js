import React from 'react'
import Centro from '../../assets/logo/CENTRO 2020 1.png';
import Europa from '../../assets/logo/europa.png';
import DoisMil from '../../assets/logo/doismil.png';
import Insta from '../../assets/logo/insta.png'
import Facebook from '../../assets/logo/facebook.png';
import Mail from '../../assets/logo/mail.png';
import Twitter from '../../assets/logo/whatsapp.png';
import Linkedin from '../../assets/logo/linkedin.png';
import '../../styles/app.scss'



const Footer = () => {
    return (
        <>
            <div className="bg-black text-white space md:mt-0 lg:mt-0 xl:mt-0">
                <div className=" container mx-auto pt-10">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4">
                        <div className="pt-8 md:pt-0 lg:pt-0 xl:pt-0" >
                            <h6 className="pb-4 font-bold ">COFINANCIAMENTO</h6>
                            <div className="flex space-x-1">
                                <a href="http://www.centro.portugal2020.pt"><img src={Centro} alt="centro_portugal" /></a>
                                <a href="https://europa.eu/european-union/index_pt"><img src={Europa} alt="uniao_europeia" /></a>
                            </div>
                            <a href="https://www.portugal2020.pt"><img src={DoisMil} alt="portugal2020" /></a>

                        </div>

                        <div className="side-footer3 pt-8 md:pt-0 lg:pt-0 xl:pt-0">
                            <h6 className="pb-4 font-bold ">LOCALIZAÇÃO</h6>
                            <p className="text-base">PCI · Creative Science Park Aveiro Region
                            Via do Conhecimento, Edifício Central
                            3830-352 Ílhavo, Portugal
                            </p>
                        </div>

                        <div className="side-footer pt-8 md:pt-0 lg:pt-0 xl:pt-0" >
                            <h6 className="pb-4 font-bold">CONTACTOS</h6>
                            <p className="text-base">+351 234 243 750</p>
                            <p className="text-base">creative.science.park@gmail.com</p>
                        </div>
                        <div className="side-footer3 pt-8 md:pt-0 lg:pt-0 xl:pt-0">
                            <h6 className="pb-4 font-bold ">REDES SOCIAIS</h6>
                            <div className="flex space-x-4" >
                                <div><a className="social-footer" href="creative.science.park@gmail.com"><img src={Mail} alt="mail" /></a></div>
                                <div><a className="social-footer" href="https://www.instagram.com/designfactory_aveiro/?hl=pt"><img src={Insta} alt="instagram" /></a></div>
                                <div><a className="social-footer" href="https://twitter.com/ua_incubator"><img src={Twitter} alt="Twitter" /></a></div>
                                <div><a className="social-footer" href="https://www.linkedin.com/company/design-factory-aveiro/"><img src={Linkedin} alt="linkedin" /></a></div>
                                <div><a className="social-footer" href="https://www.facebook.com/pci.creativesciencepark"><img src={Facebook} alt="facebook" /></a></div>
                            </div>
                        </div>
                    </div >
                    <div className="pt-8 pb-5 text-center pt-8 md:pt-0 lg:pt-0 xl:pt-0">
                        <p className="text-base"> &copy;{new Date().getFullYear()} UA Team 6 DeCA - All Rights Reserved</p>
                    </div>

                </div>
            </div  >

        </>

    )

}




export default Footer;