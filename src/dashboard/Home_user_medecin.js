import React from 'react';
import Header from './Header';
//admin
import Admin_dashboard from './Admin/dashboard/Admin_dashboard';
import Consulter_patient from './Medecin/consultation/Dossier';
import Examen_clinique from './Medecin/examenClinique/ExamenClinique';
import View_users from './Admin/View_users/View_users';
import Consulte_user from './Admin/View_users/Consulte_user'
import ConsultePatient from '../dashboard/Medecin/consultation/ConsultePatient'
import AllForPatient from '../dashboard/Medecin/consultation/AllForPatient'
import Dossier from './Medecin/consultation/Dossier';
import ExamenClinique from './Medecin/examenClinique/ExamenClinique'
import Ecg from './Medecin/examenClinique/parameteVitaux/Ecg';
import OrdEvaCer from './Medecin/examenClinique/OrdEvaCer'

//medecin 
import Medecin_nav from './Medecin_nav';
import Ordonnance from './Medecin/dashboard/Ordonnance'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Afficher_rdvs from './Medecin/rdv_gestion/Afficher_rdvs'

import './Home_user.css';
import Medecin_dashboard from './Medecin/dashboard/Medecin_dashboard';

class Home_user extends React.Component {


    render() {
        console.log('rani hna')
        const currentUser_information= JSON.parse(localStorage.getItem('currentUser'))
        return (
            <div className="Home_user">
                <Header />
                <div className="sections">
                    <div className="userLeft_section">
                        <Medecin_nav currentUser = {currentUser_information}/>
                    </div>
                    <div className="userRight_section">
                            <Switch>
                                <Route path='/medecin/dashboard'> <Medecin_dashboard /></Route>
                                <Route path='/medecin/consulter_patient'> <Consulter_patient /> </Route>
                                <Route path='/medecin/examen_clinique'> <Examen_clinique /> </Route>
                                <Route path='/medecin/ordonnance'> <Ordonnance /> </Route>
                                <Route path='/medecin/consulte_patient'>  <ConsultePatient/>  </Route>
                                <Route path='/medecin/mon_patient'>  <AllForPatient/>  </Route>
                                <Route path='/medecin/dossier_médical'>  <Dossier/>  </Route>
                                <Route path='/medecin/examen_clinique'>  <ExamenClinique/>  </Route>
                                <Route path='/medecin/paramètres_vitaux'>  <Ecg/>  </Route>
                                <Route path='/medecin/documents_médicaux'>  <OrdEvaCer/>  </Route>
                                <Route path='/medecin/afficher_rdvs'>  <Afficher_rdvs/>  </Route>
                            

                                
                                {/* <Route path='/admin/pdf'><Pdf_ordonnance/></Route> */}
                            </Switch>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home_user;