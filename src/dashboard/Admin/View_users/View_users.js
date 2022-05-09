import './View_users.css'
import React from 'react';
import axios from 'axios';
import List_users from './List_user';
import Nav from 'react-bootstrap/Nav';

class View_users extends React.Component{
    // we will first of all get all the users using ComponentDidMount
    // then we will separate users by Role in 4 lists variables
    cons
    state = {
        divElementId: null,
        listAdmins:'',
        listMedecins:'',
        listPatients:'',
        listInfermiers:'',
    }

    list_admin = [];
    list_patient = [];
    list_medecin = [];
    list_infermier = [];

    componentDidMount = () => {
        // here we will make an axios get request to get all the users ! 
        

        axios.get("http://localhost:8090/gestion-compte-service/api/auth/users")
            .then((response)=>{
                response.data.forEach(user => {
                    switch (user.roles[0].name) {
                        case 'ROLE_Medecin':
                            this.list_medecin.push(user);
                            break;
                        case 'ROLE_Patient':
                            this.list_patient.push(user);
                            break;
                    case 'ROLE_Admin':
                            this.list_admin.push(user);
                            break;     
                        case 'ROLE_Infermier':
                            this.list_infermier.push(user);
                            break;                       
                    
                        default:
                            break;
                    }
                    console.log('this is my user : ',user)
                });
            })
            .catch((err)=>{
                console.log({
                    errorGettingAllUsers : err
                })
            })

            // console.log('response : ', response.data[2].roles[0].name)
            //     list_medecin.push(response.data[2]);
            //     console.log('fuck off :', list_medecin)

            
            this.setState({
                divElementId: null,
                listAdmins:this.list_admin,
                listMedecins:this.list_medecin,
                listPatients:this.list_patient,
                listInfermiers:this.list_infermier,
            })
    }
    
    componentDidUpdate = ()=>{
        console.log(this.state)
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
        console.log('my state',myState)
        function getMeUsers(divElementId) {
            if(divElementId==0){
                return <List_users listUser = {myState.listAdmins}/>
            }
            if(divElementId==1){
                return <List_users listUser = {myState.listMedecins}/>
            }
            if(divElementId==2){
                return <List_users listUser = {myState.listInfermiers}/>
            }
            if(divElementId==3){
                return <List_users listUser = {myState.listPatients}/>
            }

        }

        return(
            
            <div className='View_users'>
                <div className='switch_buttons'>
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='0' onClick={this.clickedElement}>
                            Admins
                        </div>
                    
                  
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='1'  onClick={this.clickedElement}>
                            Medecins
                        </div>
                   
                   
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='2' onClick={this.clickedElement}>
                            Infermiers
                        </div>
            
                    
                        <div className='switch__btn btn btn-outline-secondary rounded-0' id='3' onClick={this.clickedElement}>
                            Patients
                        </div>
              
                </div>
            
                <div className='view_Lists' id='viewLists'>
                   {getMeUsers(this.state.divElementId)}
                </div>
            </div>
        );
    };
};

export default View_users;
