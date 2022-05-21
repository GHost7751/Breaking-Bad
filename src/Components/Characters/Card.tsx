import React from 'react';
import CardProps from '../../Types/type';
import {CardGroup} from 'react-bootstrap'
import {Card} from 'react-bootstrap'

const CardList : React.FC<CardProps> = (props) => {
const { char_id : id,
        name,
        birthday,
        img,
        status,
        nickname,
        category,
} = props;
   
    return (
        <CardGroup>
            <Card id={id}>
                <Card.Img style={{height: '400px'}} variant="bottom" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {birthday}
                       {status}
                       {nickname}
                       {category}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export {CardList};