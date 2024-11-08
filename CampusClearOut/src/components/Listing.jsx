import React from "react";
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap components
import '../App.css';

function Listing(props) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="listing">
      {props.image && <Card.Img variant="top" src={props.image} alt={props.title} />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${props.price}</Card.Text>
        <Button variant="primary">View Listing</Button>
      </Card.Body>
    </Card>
  );
}

export default Listing;
