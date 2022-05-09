import './Add_card.css';
import React from 'react';
import dooc from '../../images/admin/dooc.jpg';
import {Link} from 'react-router-dom';

class Add_card extends React.Component {
    render() {
        return(
            <div className="Add_card">
                <div className="addCard_picture">
                    <img src={dooc} alt="this is addCard picture" className="addCard_background"/>
                    <div className="addCard_text">
                        <p>AJOUTER UN MEDECIN
                            FACILEMENT, RAPIDEMENT
                            ET SANS EFFORT ! </p>
                    </div>
                </div>
                <div className="addCard_buttons">
                    <Link to='/admin/view_users' className="view_btn">
                        Consulter la liste
                    </Link>
                    
                    <Link to='/admin/add_medecin' className="create_btn">
                        Creons-en un !
                    </Link>
                </div>
            </div>
        );
    };
};

export default Add_card;

