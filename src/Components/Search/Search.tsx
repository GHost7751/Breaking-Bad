import React,{useState,FC} from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

interface ISearchProps {
    fetchQuotes: (name : string) => void
}

const Search:FC<ISearchProps> = (props) => {
    const {
        fetchQuotes = Function.prototype
    } = props;
    const [search,setSearch] = useState<string>('');
    ;
    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)}
                />
                <Button variant="outline-success"
                onClick={() =>
                    fetchQuotes(search)
                }>Search</Button>
            </Form>
        </div>
    );
};

export  {Search};