export default interface CardPropsCh {
    char_id : string,
    name : string,
    birthday : string,
    img : string,
    status : string,
    nickname : string,
    category : string
}

export default interface CardPropsEp {
         episode_id: number,
         title: string,
         season: string ,
         air_date : string,
         characters : Array<any>,
         episode : string,
         series : string,
}

export default interface InterfaceProps {
    prevPage: () => void,
    setPage: (page: number) => void,
    page: number;
    nextPage: () => void;
}

export default interface InterfaceQuoteProps{
    quote : string,
    author : string,
    series : string
}
