
import React, { useEffect, useState, FC } from 'react';
import Spinner from '../../Layout/Spinner/Spinner';
import {CardList} from './Card';
import { usePagination } from '../Pagination/usePagintain';
import { Button } from 'react-bootstrap';

const Characters:FC = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);
    

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
      } = usePagination({
        contentPerPage: 10,
        count: value.length,
      });

    const fetchChar =  () => {
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
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .slice(firstContentIndex, lastContentIndex)
                    .map((movie) => <CardList key={movie.id} {...movie} />)

                ) : (
                    <Spinner />
                )
                   
                }

             </div>
                <div className="pagination">
                    <Button onClick={prevPage} className="page">
                        &larr;
                    </Button>
                    <br />
                    {/* @ts-ignore */}
                    {[...Array(totalPages).keys()].map((el) => (
                        <Button
                            onClick={() => setPage(el + 1)}
                            key={el}
                            className={`page ${page === el + 1 ? "active" : ""}`}
                        >
                            {el + 1}
                        </Button>
                    ))}
                    <br />
                    <Button onClick={nextPage} className="page">
                        &rarr;
                    </Button>
                </div>
        </div>
    );
};

export default Characters;