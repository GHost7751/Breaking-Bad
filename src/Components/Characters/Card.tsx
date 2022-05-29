import React from 'react';
import CardPropsCh from '../../Types/type';
import {Button, CardGroup} from 'react-bootstrap'
import {Card} from 'react-bootstrap'


const CardList : React.FC<CardPropsCh> = (props) => {
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
            <Card key={id}>
                <Card.Img style={{height: '350px'}} variant="bottom" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       Birthday : {birthday}
                       <br/>
                       Status : {status}
                       <br/>
                       Nickname : {nickname}
                       <br/>
                       Category : {category}
                    </Card.Text>
                
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export {CardList};