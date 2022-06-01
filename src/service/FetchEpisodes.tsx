const fetchEpisodes = () => {
    const data = fetch(`https://breakingbadapi.com/api/episodes`)
    .then((response) => response.json())
    .then((data) => data)
    return data;
}

export {fetchEpisodes}