import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import InterfaceQuoteProps from '../../Types/type'

const QuoteCard:FC<InterfaceQuoteProps> = (props) => {
    const {
        quote_id,
        quote,
        author, 
        series 
    } = props
    return (
        <Card key={quote_id} style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{series}</Card.Subtitle>
                <Card.Text>
                    {quote}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export  {QuoteCard};