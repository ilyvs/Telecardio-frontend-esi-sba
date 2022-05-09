import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Service = ({srcName, cardTitle, cardDescription,}) => {
    const mystyle = {
        width: '18rem',
        height:'12rem'
      }; 
 
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={srcName} style={mystyle} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardDescription}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Service;