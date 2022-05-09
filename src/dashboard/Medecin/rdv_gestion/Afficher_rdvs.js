import React from 'react';
import axios from 'axios';
import List_users from './List_user'
class Afficher_rdvs extends React.Component {
    // we will first of all get all the users using ComponentDidMount
    // then we will separate users by Role in 4 lists variables
 
    state = {
        divElementId: null,
        liste_approved: '',
        liste_disapproved: ''
    }
    
    list_app = [];
    list_disap = [];
    componentDidMount = () => {
            // here we will make an axios get request to get the approuved app  ! 
            const id_doc = JSON.parse(localStorage.getItem('currentUser')).id;
            console.log(id_doc)
            // get request to get all the approuved app
            axios.get('http://localhost:8084/get-new-appointment/'+id_doc)
                .then ( res => {
                    console.log('res disap : ', res.data)
                    this.setState({
                        ...this.state,
                        liste_disapproved: res.data
                    })
                })
            // get request to get all the disapprouved app
            axios.get('http://localhost:8084/get-approved-appointment/'+id_doc)
                .then ( res => {
                    console.log('res app : ', res.data)
                    this.setState({
                        ...this.state,
                        liste_approved: res.data
                    })
                })

            // console.log('app : ', this.list_app, ' disapp : ', this.list_disap)   
    }
  
    clickedElement = (event)=>{
        //remove the active class
        const divs = document.querySelectorAll('.switch__btn');
        divs.forEach(div => {
            div.classList.remove('active_')
        });
        this.setState({
            divElementId: event.target.id
        })
        const div = document.getElementById(event.target.id)
        div.classList.add('active_')
    }

    

    render() {
        const myState = this.state;
        console.log('mt state : ', myState)
        function getMeUsers(divElementId) {
            if(divElementId==1){
                return <List_users listUser = {myState.liste_disapproved} idDiv = {divElementId}/>
            }
            if(divElementId==0){
                return <List_users listUser = {myState.liste_approved } idDiv = {divElementId}/>
            }
           

        }

        return(
            
            <div className='View_users'>
                <div className='switch_buttons'>
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='0' onClick={this.clickedElement}>
                           approuver
                        </div>
                    
                  
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='1'  onClick={this.clickedElement}>
                            non approuver
                        </div>
              
                </div>
            
                <div className='view_Lists' id='viewLists'>
                   {getMeUsers(this.state.divElementId)} 
                </div>
            </div>
        );
    };
}

export default Afficher_rdvs;