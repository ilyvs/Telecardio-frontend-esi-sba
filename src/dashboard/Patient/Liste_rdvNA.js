import React from 'react';
import axios from 'axios';
import List_users from './List_user';
class Liste_rdvNA extends React.Component{
    // we will first of all get all the users using ComponentDidMount
    // then we will separate users by Role in 4 lists variables
 
    state = {
        divElementId: null,
        listeRdv_approuver: '',
        listeRdv_disapprouver: ''

    }
    
    list_app = [];
    list_disap = [];

    componentDidMount = () => {
            // here we will make an axios get request to get the approuved app  ! 
            const id_patient = JSON.parse(localStorage.getItem('currentUser')).id;
            console.log(id_patient)
            // get request to get all the appoinements
            axios.get('http://localhost:8084/consult-my-appointments/'+id_patient)
                .then ( res => {
                    console.log('res disap : ', res.data)
                    this.list_app = res.data.filter((item)=> item.cas == 'approved')
                    this.list_disap = res.data.filter((item)=> item.cas == '')
                    console.log('ma liste approuvée : ', this.list_app)
                    console.log('ma liste disapprouved : ', this.list_disap)
                    this.setState({
                        ...this.state,
                        listeRdv_approuver: this.list_app,
                        listeRdv_disapprouver: this.list_disap
                    })
                })
          

            // console.log('app : ', this.list_app, ' disapp : ', this.list_disap)   
    }
  
    clickedElement = (event)=>{
        //remove the active class
        const divs = document.querySelectorAll('.switch__btn');
        divs.forEach(div => {
            div.style.backgroundColor='white';
            div.style.color='black'
        });
        this.setState({
            divElementId: event.target.id
        })
        const div = document.getElementById(event.target.id)
        div.style.backgroundColor='#1d2951';
        div.style.color='white'
    }

    

    render() {
        const myState = this.state;
        console.log('my state : ', myState)
        function getMeUsers(divElementId) {
            if(divElementId==1){
                return <List_users liste_rdv = {myState.listeRdv_disapprouver} idDiv = {divElementId}/>
            }
            if(divElementId==0){
                return <List_users liste_rdv = {myState.listeRdv_approuver } idDiv = {divElementId}/>
            }
           

        }

        return(
            
            <div className='View_users'>
                <div className='switch_buttons'>
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='0' onClick={this.clickedElement}>
                           historique
                        </div>
                    
                  
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='1'  onClick={this.clickedElement}>
                            rdv non approuver
                        </div>
              
                </div>
            
                <div className='view_Lists' id='viewLists'>
                    {getMeUsers(this.state.divElementId)}  
                </div>
            </div>
        );
    };
}

export default Liste_rdvNA;
