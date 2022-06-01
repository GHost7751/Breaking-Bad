const fetchCharacters = () => {
    const data = fetch(`https://breakingbadapi.com/api/characters`)
    .then((response) => response.json())
    .then((data) => data)
    return data;
}

export {fetchCharacters}