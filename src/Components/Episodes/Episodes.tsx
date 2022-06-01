import React, { FC, useEffect, useState } from 'react';
import {CardEp} from './CardEp';
import Spinner from '../../Layout/Spinner/Spinner';
import { usePagination } from '../Pagination/usePagintain';
import { Button } from 'react-bootstrap';
import { fetchEpisodes } from '../../service/FetchEpisodes';

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

    const fetchChar = async () : Promise<void> => {
        setLoading(true)
        setValue(await fetchEpisodes())
    }


    useEffect(() => {
        fetchChar()
    },[])
    console.log(value)
    return (
        <div className='container content'>
            <br />
            <div className='movies'>
                {value.length ? (value
                    .slice(firstContentIndex, lastContentIndex)
                    .map((episodes) => <CardEp key={episodes.id} {...episodes} />)

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