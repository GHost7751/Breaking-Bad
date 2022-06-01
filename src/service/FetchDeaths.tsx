const fetchDeaths = () => {
    const data = fetch(`https://breakingbadapi.com/api/deaths`)
    .then((response) => response.json())
    .then((data) => data)
    return data;
}

export {fetchDeaths}