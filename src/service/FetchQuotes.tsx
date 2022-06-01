const fetchQuotes = () => {
    const data =  fetch(`https://breakingbadapi.com/api/quotes`)
    .then((response) => response.json())
    .then((data) => data)
    return data;
}

const fetchSearchQoutes = (name: string) => {
    const data = fetch(`https://breakingbadapi.com/api/quote?author=${name}`)
    .then((response) => response.json())
    .then((data) => data)
    return data ;
}

export {fetchQuotes,fetchSearchQoutes}