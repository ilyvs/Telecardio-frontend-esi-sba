import './Admin_dashboard.css';
import React from 'react';
import Add_card from './Add_card';
import Statistics from './Statistics';
import Feedback from './Feedback';

class Admin_dashboard extends React.Component {
    render() {
        return(
            <div className="Admin_dashboard">
                <Add_card />
                <Statistics />
                <div className='feedbackTitle'>
                    FeedBacks
                </div>
                <div className="feedback_list">
                    <Feedback />
                    <Feedback />
                    <Feedback />
                </div>
            </div>
        );
    };
};

export default Admin_dashboard;