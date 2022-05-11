export enum Geners {
    ALL = 'All' ,
    COMEDY = 'Comedy',
    HORROR = 'Horror',
    MILITARY = 'War',
    DOCUMENTARY = 'Documentary',
    ACTIVON_MOVIE = 'Action',
    HISTORICAL = 'History',
    ADVENTURES = 'Adventure',
    FANTASY = 'Fantasy',
    DRAMA = 'Drama',
    ANIMATION = 'Animation',
    CRIME = 'Crime'
}

export type GenerType = keyof typeof Geners;
