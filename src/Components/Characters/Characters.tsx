
import React, { useEffect, useState, FC } from 'react';
import Spinner from '../../Layout/Spinner';
import {CardList} from './Card';

const Characters:FC = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);



    const fetchChar = () => {
        setLoading(true)
        fetch(`https://breakingbadapi.com/api/characters`)
        .then((response) => response.json())
        .then((data) => setValue(data))
    }
    useEffect(() => {
        fetchChar()
    },[])
    
    return (
        <div className='container content'>
            <div className='movies'>
                {value.length ? (
                    value.map((movie) => <CardList key={movie.id} {...movie} />)
                ) : (
                   <Spinner />
                )}
            </div>

        </div>
    );
};

export default Characters;