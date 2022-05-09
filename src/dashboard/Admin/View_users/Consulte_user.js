import React from 'react';
import {useLocation} from 'react-router-dom';
import { useState, setState } from 'react';

const Consulte_user = () => {
    const location = useLocation();
    const id_user = location.state.id_user;

    delete id_user.password
    const [state, setState] = useState({
        ...id_user
    })
    console.log(state)

    const inputOnChange = (event)=>{
        
        setState({
            ...state,
            [event.target.name] : event.target.value
        })
    }
    console.log(state)

    const submitInformationsForm = (event)=>{
        event.preventDefault();
        console.log(state);
        // axios.post("http://localhost:8083/api/auth/signup", this.state)
        //     .then((result)=>{
        //         console.log(result)
        //     })
        //     .catch((err)=>{
        //         console.log({errorAdding: err})
        //     })
    }
    
    return(
        <div className='addMedecin_background'>
            <div className='Consulte_user'>
                <form onSubmit={submitInformationsForm}>
                    <div className='name'>
                        <div className='nom'>
                            <input type='text' placeholder='Nom de famille' name='nom' value={state.nom} onChange={inputOnChange}/>
                        </div>
                        <div className='prenom'>
                            <input type='text' placeholder='prenom' name='prenom' value={state.prenom} onChange={inputOnChange}/>
                        </div>        
                    </div>
                    <div className='naissance'>
                        <div className='date_naissance'>
                            <input type='date' name='dateNaissance'value={state.dateNaissance} onChange={inputOnChange}/>
                        </div>
                        <div className='lieu_naissance'>
                            <input type='text' placeholder='lieu de naissance' name='lieuNaissance'  value={state.lieuNaissance} onChange={inputOnChange}/>
                        </div>        
                    </div>
                    <div className="address">
                        <input type='text' name='adresse' placeholder='adresse' value={state.lieuNaissance} onChange={inputOnChange}/>
                    </div>
                    <div className="address">
                        <input type='text' name='numTelephone' placeholder='numTelephone' value={state.numTelephone} onChange={inputOnChange}/>
                    </div>
                    <div className="address">
                        <input type='text' name='numeroSecuriteSocial' placeholder='numeroSecuriteSocial'value={state.numeroSecuriteSocial} onChange={inputOnChange}/>
                    </div>

                    <div className='selectClass'>
                        <select className="sex" name="sex" value={state.sex} onChange={inputOnChange}>
                            <option disabled selected>sexe</option>
                            <option value='Homme' >homme</option>
                            <option value='FEMME'>femme</option>
                        </select>
                        <select className="groupeSanguin" name="groupeSanguin" value={state.groupeSanguin} onChange={inputOnChange}>
                            <option disabled selected>groupe sanguin</option>
                            <option value='O+' >O+</option>
                            <option value='A+' >A+</option>
                            <option value='B+' >B+</option>
                            <option value='O-' >O-</option>
                            <option value='A-' >A-</option>
                            <option value='AB+' >AB+</option>
                            <option value='B-' >B-</option>
                            <option value='AB-'>AB-</option>
                        </select>
                        <select className="role" name="role" value={state.roles[0].name} onChange={inputOnChange}>
                            <option disabled selected>role</option>
                            <option value='ROLE_Admin' >admin</option>
                            <option value='ROLE_Medecin'>medecin</option>
                            <option value='ROLE_Infermier'>infermier</option>
                        </select>
                    </div>
                    <div className='connexion_information'>
                        <div className='username'>
                            <input type='text' placeholder='username' name='username' value={state.username} onChange={inputOnChange}/>
                        </div>
                        <div className='email' onChange={inputOnChange}>
                            <input type='text' placeholder='email' name='email' value={state.email}/>
                        </div>
                    </div>
                    <div className='btn_actions'>
                        <button type="reset" className='reset_btn'>Reset</button>
                        <button type="submit" className='validate_btn'>Valider</button>
                    </div>
                </form>       
            </div>
        </div>
    )
}

export default Consulte_user;