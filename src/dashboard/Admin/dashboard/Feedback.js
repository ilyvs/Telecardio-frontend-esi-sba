import './Feedback.css';
import React from 'react';
import Faker from 'faker';

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="userImage">
                <img src={Faker.image.avatar()} alt="user pic"/>
            </div>    
            <div className="userInforamtions">
                <p className="userInformation_email">ha_menaa@esi.dz</p>
                <p className="userInformation_feedback">Super plateforme, je vous souhaite tout le bonheur du monde. merci,</p>
            </div>
        </div>
    )
}

export default Feedback;