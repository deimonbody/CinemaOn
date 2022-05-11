export interface Movies {
    populars:Movie[];
    upcoming:Movie[];
    recomended:Movie[];
    followers:Movie[];
    latest:Movie[];
    details:IDetailMovie[];
}

export interface IDetailMovie extends Movie{
    overview:string;
    release_date:string;
    vote_average:number;
}

export interface Movie {
    title:string;
    poster_path:string;
    id:number;
    backdrop_path:string;
    genre_ids:number[];
}
export interface Gener{
    id:number;
    name:string;
}

export interface State {
    movies:Movies;
    geners:Gener[];
}
enum MoviesActions {
    LOAD_POPULAR_MOVIES = 'fetchLoadPopularMovies',
    LOAD_UP_COMING_MOVIES = 'fetchLoadUpComingMovies',
    LOAD_GENERS = 'fetchLoadGeners',
    LOAD_LATEST = 'fetchLatestMovies',
    GET_MOVIE_INFO = 'fetchMovieInfo',
    FOLLOW_MOVIE = 'followMovie',
    UNFOLLOW_MOVIE = 'unFollowMovie',
    UPDATE_RECOMENDED = 'updateRecomended',
    LOAD_FOLLOWED_LOCAL = 'loadFollowedMoviesFromLocal',
}

export default MoviesActions;