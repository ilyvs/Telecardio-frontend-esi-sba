import './Profile.css';
import React, { useState, useEffect   } from 'react';
import Profile_pic from './images/admin/doooc.jpg';
import Status from './images/admin/status_online.png';
import Faker from 'faker';


class Profile extends React.Component {
    state = {
        nom: '',
        prenom: '',
        nomComplet:'',
        role: ''
    }

    componentDidMount = () => {
        this.setState({
            nom: this.props.currentUser.nom,
            prenom: this.props.currentUser.prenom,
            nomComplet: this.props.currentUser.nom+' '+this.props.currentUser.prenom,
            role: this.props.currentUser.roles[0].slice(5)
        })
       
    }

    render() {
        return (
            <div className="profile">
                <div className="profile__informations">
                    <img src={Faker.image.avatar()} className="profile__picture"/>
                    <div className="profile__generals">
                        <span className="profile__name">{this.state.nomComplet}</span>
                        <span className="profile__profession">{this.state.role}</span>
                    </div>
                </div>
                    <div className="profile__status">
                        {/* <img src={Status} className='profile_statusImg'/> */}
                       
                    </div>
            </div>
        );
    }
} 

   


export default Profile;