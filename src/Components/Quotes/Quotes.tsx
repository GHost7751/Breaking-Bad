/* eslint-disable react-hooks/exhaustive-deps */
import React, {  FC, useEffect, useState } from 'react';
import { QuoteCard } from './QuoteCard';
import Spinner from '../../Layout/Spinner/Spinner'
import { Search } from '../Search/Search';
import { fetchQuotes,fetchSearchQoutes } from '../../service/FetchQuotes';

const Quotes:FC = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [name,setName] = useState<string>('Walter White')

    const fetchAllQuotes = async () : Promise<void> => {
        setLoading(true)
        setValue(await fetchQuotes())
    }

    const fetchQuote =  async (name : string) : Promise<void> => {
        setLoading(true)
        setValue(await fetchSearchQoutes(name))
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