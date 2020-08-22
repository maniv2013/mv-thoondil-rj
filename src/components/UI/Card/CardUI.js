import React from 'react';
import classes from './Card.css';
import { Card } from 'react-bootstrap';

const CardUI = (props) => (
    <Card style={{ width: '18rem' }} key={props.id} className={classes.card}>
        <Card.Img variant="top" 
            src="holder.js/100px180" 
            src={props.image} 
            className={[classes.cardimgtop,classes.cardImageSize].join(' ')}/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default CardUI;