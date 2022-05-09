import './Show_user.css';
import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Faker from 'faker';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Consulte_user from './Consulte_user';

class Show_user extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            reload: 'false'
        }
    }


    componentDidMount = ()=> {
        console.log(this.props.user)
    }

    //delete
    deleteMeUser = ()=> {
        const userId = this.props.user.id;
        const token = JSON.parse(localStorage.getItem('currentUser')).token;
        const config = {
            headers:{
                ContentType:'application/json',
                Authorization:'Bearer '+token,
            }
        }
        axios.get('http://localhost:8083/api/auth/delete/'+userId, config)
            .then((response)=>{
                console.log(response);
                window.location.reload(false); 
            })
            .catch((err)=>{
                console.log({
                    errDeleting: err
                })
            })
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
                                            {this.props.user.username}
                                        </Row>
                                        <Row className='user_nss'>
                                            {this.props.user.numeroSecuriteSocial}
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                <div className='action_buttons'>
                                    <Link to={{
                                        pathname:'/admin/consulte_user', 
                                        state: {
                                            id_user:this.props.user
                                        }
                                        }
                                        }>
                                        <div className='btn btn-outline-success'>
                                            visualiser
                                        </div>
                                    </Link>
                                    <div className='btn btn-outline-primary'>
                                        editer
                                    </div>
                                    <div className='btn btn-outline-danger' onClick={this.deleteMeUser}>
                                        supprimer
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default Show_user;