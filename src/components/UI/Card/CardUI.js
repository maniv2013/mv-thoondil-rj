import React from 'react';
import cardClasses from './Card.css';
import { Card } from 'react-bootstrap';

const CardUI = (props) => {

    return (
        <Card style={{ width: '18rem' }}
            key={props.id}
            className={[cardClasses.card].join(' ')}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Img variant="top"
                    src={props.image}
                    bsPrefix="card-img"
                    className={[cardClasses.cardimgtop, cardClasses.cardImageSize].join(' ')} />
            <Card.Body>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardUI;