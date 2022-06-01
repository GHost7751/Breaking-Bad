import React,{FC,useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Spinner from '../../Layout/Spinner/Spinner';
import { usePagination } from '../Pagination/usePagintain';
import { DeathsCard } from './DeathsCard';
import { fetchDeaths } from '../../service/FetchDeaths';

const Deaths:FC = () => {
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

      const fetch = async () : Promise<void> => {
        setLoading(true)
        setValue(await fetchDeaths())
        
      }

      useEffect(() => {
                fetch()
      },[])

    return (
        <div className='container content'>
        <br />
        <div className='movies'>
            
            {value.length ? (value
                .slice(firstContentIndex, lastContentIndex)
                .map((deaths) => <DeathsCard key={deaths.id} {...deaths} />)

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

export  {Deaths};