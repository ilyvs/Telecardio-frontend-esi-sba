import React from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Verify extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            verifyUrl: '',
            status:'',
            redirect:''
        }
    }
    componentDidMount = (props) => {
        // let's build the url 
        console.log(this.props.location.search)
        const url = "http://localhost:8083/api/auth/verify"+this.props.location.search;
        this.setState({verifyUrl : url});
    }

    onClickVerification = async () => {
        const response = await axios.get(this.state.verifyUrl);
        if (response.data) {
            // this.setState({status : response.data});
            console.log(response.data)
            alert('votre email a été bien verifié.')
        }        
    }

    componentDidUpdate = () => {
        console.log(this.state.status)
        if(this.state.status === "verify_success") {
            this.setState({redirect: true})
        } 
        
        if(this.state.status === "verify_fail"){
            this.setState({redirect: false})
        }
    }

    render() {
        if(this.state.redirect===true) {
            alert("votre email a été vérifier.");
            return <Redirect to="/signin" />
        } 
        if(this.state.redirect===false){
            alert('erreur lors de la validation de votre email.');
            return <Redirect to="/home" />
        }
        return (
            <Card className="text-center">
            <Card.Header>Verification process</Card.Header>
            <Card.Body>
                <Card.Title>une toute derniere etape !!</Card.Title>
                <Card.Text>
                    veuillez cliquer sur le button ci-dessous pour verifier votre email.
                </Card.Text>
                <Button variant="primary" onClick={this.onClickVerification}>Continuer...</Button>
            </Card.Body>
            </Card>
        )
    };
};

export default Verify;   