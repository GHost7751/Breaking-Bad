import React, { useEffect, useState } from 'react';
import {CardEp} from './CardEp';

const Characters = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);


    const fetchChar = () => {
        setLoading(true)
        fetch(`https://breakingbadapi.com/api/episodes`)
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
                    value.map((movie) => <CardEp key={movie.id} {...movie} />)
                ) : (
                    <h4>Nothing found</h4>
                )}
            </div>

        </div>
    );
};

export default Characters;