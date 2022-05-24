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
         season: string | number | Array<any>,
         air_date : string,
         characters : Array<any>,
         episode : string,
         series : string,
}