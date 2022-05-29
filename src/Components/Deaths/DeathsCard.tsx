import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import IDeathsProps from '../../Types/type'

const DeathsCard:FC<IDeathsProps> = (props) => {
    const {
        death_id,
        death,
        cause,
        responsible,
        last_words,
        season,
        episode
    } = props


    return (
        <div>
            <Card key={death_id} style={{ width: '16rem', height: '300px' }}>
                <Card.Body>
                    <Card.Title>{death}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Season : {season}</Card.Subtitle>
                    <Card.Text>
                        <>
                            Date of cause : {cause}
                            <br />
                            Responsible : {responsible}
                            <br />
                            Last Words : {last_words}
                            <br />
                            Episode : {episode}
                            <br />

                        </>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export  {DeathsCard};