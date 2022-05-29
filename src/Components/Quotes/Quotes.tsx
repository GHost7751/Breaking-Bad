/* eslint-disable react-hooks/exhaustive-deps */
import React, {  FC, useEffect, useState } from 'react';
import { QuoteCard } from './QuoteCard';
import Spinner from '../../Layout/Spinner/Spinner'
import { Search } from '../Search/Search';

const Quotes:FC = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [name,setName] = useState<string>('Walter White')

    const fetchAllQuotes = () => {
        setLoading(true)
        fetch(`https://breakingbadapi.com/api/quotes`)
        .then((response) => response.json())
        .then((data) => setValue(data))
    }

    const fetchQuote =  (name : string) => {
        setLoading(true)
        fetch(`https://breakingbadapi.com/api/quote?author=${name}`)
        .then((response) => response.json())
        .then((data) => setValue(data))
    }

    useEffect(() => {
        fetchAllQuotes()
    
    },[name])
    return (
        <div className='container content'>
            <br />
            <Search fetchQuotes={fetchQuote} />
            <br />
            <div className='movies'>

                {value.length ? (value
                    .map((quote) => <QuoteCard key={quote.id} {...quote} />)

                ) : (
                    <Spinner />
                )

                }
            </div>
        </div>
    );
};

export {Quotes};