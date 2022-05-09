import React from 'react';
import Show_medecin from './Show_medecin'

class View_medecin extends React.Component {

    style = {
        'View_medecin':{
            padding: '20px',
            height: '100%',
            overflow: 'scroll',
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
    }

    render() {
        const list = this.props.users;
        const mylist = list.map((myItem, index) =>  
        <Show_medecin user={myItem} setMeIdAndName = {this.props.setMeId} id={index}/> )
        return(
            <div className='View_medecin' style={this.style.View_medecin}>
                {mylist}
            </div>
        )
    }
}

export default View_medecin;