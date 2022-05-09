import './Show_user.css';
import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Faker from 'faker';
import axios from 'axios';
import EditRdv from './EditRdv';
import { Redirect, Link } from 'react-router-dom';


class Show_user extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            edit_btn_clicked: false,
            reload: 'false'
        }
    }


    
    componentDidMount = ()=> {
        console.log('finaleee :',this.props)
    }

    //delete
 

    editRdv = () => {
        // here we will edit the rdv
        alert('you clicked the edit btn'+this.props.user.appointment_id);

        this.setState({
            ...this.state,
            edit_btn_clicked: true,
        })
    }
    btnHelper =()=>{
        console.log('my fucking props', this.props)
        if(this.props.idDiv==1){
            return(
                <div className='action_buttons' >
                    <Link to={{
                        pathname:'/patient/editer_rdv',
                        state: {
                            rdvInfo: this.props.user
                        }
                    }}>
                        <div className='btn btn-outline-primary' >
                            edit
                        </div>
                    </Link>
                        
                </div>
            )
        } 
    }

    //visualisation
  
    render() {
        
        
        return(
            <div className='Show_user'>
                <ListGroup.Item as="li"className='one_user_container'>
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={3}>
                                        <Image src={Faker.image.avatar()} roundedCircle className='w-80 h-50'/>
                                    </Col>
                                    <Col sm={9}>
                                        <Row className='user_username'>
                                            {this.props.user.doc_name}
                                        </Row>
                                        <Row className='user_nss'>
                                            {this.props.user.date}
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                {this.btnHelper()}
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default Show_user;