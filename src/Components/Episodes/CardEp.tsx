import React from 'react';
import CardPropsEp from '../../Types/type';
import {Card} from 'react-bootstrap'

const CardEp : React.FC<CardPropsEp> = (props) => {
const { episode_id : id,
    title,
    season,
    air_date,
    characters,
    series
} = props;

    const actor = characters.slice(0,7);
 
    return (
        <Card key={id} style={{ width: '18rem' , height: '330px' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Season : {season}</Card.Subtitle>
                <Card.Text>
                    <>
                    Date of release : {air_date}
                    <br />
                    Series : {series}
                    <br />
                    Characters : {actor.map((e) => <li>{e}</li>)}
                    <br />
                    </>
                </Card.Text>
                </Card.Body>
        </Card>
    );
};

export {CardEp};