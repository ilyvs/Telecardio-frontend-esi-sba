import './css/home.css'
import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import Service from './Service'
import Contact from './Contact';
import adnImage from '../images/carousel/adn.jpg';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    
    render() {
        return(
            <div className="home-container_homepage">
                <Nav />
                <div className="background-image_homepage">
                    <img src={adnImage} alt="background" />
                    <div className="header_homepage">
                        <h1>Bienvenue sur notre plateforme</h1>
                        <h2>TELECARDIO</h2>
                        <Link to="/signup" className="create-doc-patient_homepage">
                            <a className="create-doc-patient-btn_homepage">Créer son propre dossier médical</a>
                        </Link>
                        
                    </div>
                </div>
                <div className="ourServices_homepage">
                    <div className="title_homepage">
                        <p>Nos Services</p>
                    </div>
                    <div className="services-items_homepage">
                        <Service 
                            srcName="../images/services/service1.jpeg"
                            cardTitle="Numerisation des dossiers medicaux" 
                            cardDescription="cela est une toute petite description de notre service 1, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                        <Service 
                            srcName="../images/services/service2.jpg"
                            cardTitle="Examen clinique et parametres vitaux" 
                            cardDescription="cela est une toute petite description de notre service 2, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                        <Service 
                            srcName="../images/services/service3.jpg"
                            cardTitle="Le bien-etre de nos patients" 
                            cardDescription="cela est une toute petite description de notre service 3, merci de cliquer sur savoir plus pour encore plus d'informations"
                        />
                    </div>
                </div>

                <div className="contact_homepage">
                    <div className="title_homepage">
                        <p>Nous contacter</p>
                    </div>
                    <Contact />
                </div>
                <Footer />
            </div>
        );
    };
};


export default HomePage;