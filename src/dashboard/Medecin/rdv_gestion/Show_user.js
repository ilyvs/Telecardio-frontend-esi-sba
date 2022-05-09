import './Show_user.css';
import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Faker from 'faker';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Show_user extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reload: 'false'
        }
    }


    
    componentDidMount = ()=> {
        console.log('finaleee :',this.props)
    }


    approuverRdv = () => {
        console.log('approuvement ...')
        console.log(this.props.user)
        axios.put("http://localhost:8084/approve-rdv/"+this.props.user.appointment_id)
            .then((res)=>{
                console.log(res);
                alert('rdv approuvé')
                this.setState({
                    ...this.state,
                    reload: true
                })
                window.location.reload(false); 
            })
    }

    refuseRdv = () => {
        console.log('disapprouvement ...')
        console.log(this.props.user)
        axios.put("http://localhost:8084/refuse-rdv/"+this.props.user.appointment_id)
            .then((res)=>{
                console.log(res);
                alert('rdv disapprouvé')
                this.setState({
                    ...this.state,
                    reload: true
                })
                window.location.reload(false); 
            })
    }
    btnHelper =()=>{
      
        if(this.props.idDiv==1){
            return(
                <div className='action_buttons' >
                        <div className='btn btn-outline-success' onClick={this.approuverRdv}>
                            approuver
                        </div>
                        <div className='btn btn-outline-danger' onClick={this.refuseRdv}>
                            disapprouver
                        </div>
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