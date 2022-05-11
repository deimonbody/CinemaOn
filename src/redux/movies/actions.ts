import { createAsyncThunk,createAction } from "@reduxjs/toolkit";
import  MoviesActions, { Gener, Movie }  from './common';

const fetchLoadPopularMovies = createAsyncThunk<Movie[]>(
    MoviesActions.LOAD_POPULAR_MOVIES,
  async (_) => {
    try{
        const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=abddd9821131bd64f255ccc171554771&language=en-US&page=1");
        const response = await request.json();

        const results = response.results.map((item:any)=>{
          return {
            id:item.id,
            poster_path:item.poster_path,
            title:item.title,
            backdrop_path:item.backdrop_path,
            genre_ids:item.genre_ids,
          }
        })
        
        return results;
    }catch(e){
        throw new Error('Some error with the load of Popular Movies');
    }
  },
);
const fetchLoadUpComingMovies = createAsyncThunk<Movie[]>(
    MoviesActions.LOAD_UP_COMING_MOVIES,
  async (_) => {
    try{
        const request = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=abddd9821131bd64f255ccc171554771&language=en-US&page=1");
        const response = await request.json();

        const results = response.results.map((item:any)=>{
          return {
            id:item.id,
            poster_path:item.poster_path,
            title:item.title,
            backdrop_path:item.backdrop_path,
            genre_ids:item.genre_ids,
          }
        })
        return results;
    }catch(e){
        throw new Error('Some error with the load of upComing Movies');
    }
  },
);

const fetchLoadGeners = createAsyncThunk<Gener[]>(
  MoviesActions.LOAD_GENERS,
async (_) => {
  try{
      const request = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=abddd9821131bd64f255ccc171554771&language=en-US");
      const response = await request.json();
  
      const results = response.genres.map((item:any)=>{
        return {
          id:item.id,
          name:item.name,
        }
      })
      return results;
  }catch(e){
      throw new Error('Some error with the load of Geners Movies');
  }
},
);

const fetchLatestMovies = createAsyncThunk<Movie[]>(
  MoviesActions.LOAD_LATEST,
async (_) => {
  try{
      const request = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=abddd9821131bd64f255ccc171554771&language=en-US&page=1");
      const response = await request.json();
    
      const firstResults = response.results.map((item:any)=>{
        return {
          id:item.id,
          poster_path:item.poster_path,
          title:item.title,
          backdrop_path:item.backdrop_path,
          genre_ids:item.genre_ids,
        }
      })
      const requestSecond = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=abddd9821131bd64f255ccc171554771&language=en-US&page=2");
      const responseSecond = await requestSecond.json();
    
      const secondResults = responseSecond.results.map((item:any)=>{
        return {
          id:item.id,
          poster_path:item.poster_path,
          title:item.title,
          backdrop_path:item.backdrop_path,
          genre_ids:item.genre_ids,
        }
      })
      return [...firstResults,...secondResults];
  }catch(e){
      throw new Error('Some error with the load of Latest Movies');
  }
},
);

const fetchMovieInfo = createAsyncThunk(
  MoviesActions.GET_MOVIE_INFO,
  async (id:string) => {
  try{
      const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=abddd9821131bd64f255ccc171554771&language=en-US`);
      const response = await request.json();
      
      return {
        id:response.id,
        overview:response.overview,
        release_date:response.release_date,
        vote_average:response.vote_average,
        title:response.title,
        poster_path:response.poster_path,
        backdrop_path:response.backdrop_path,
        genre_ids:response.genre_ids,
      }
  }catch(e){
      throw new Error('Some error with the load of Movie Info :(');
  }
},
);

const followMovie = createAction(MoviesActions.FOLLOW_MOVIE, (movie:Movie)=> {
  return {
    payload: {
      movie,
    },
  }
})

const unFollowMovie = createAction(MoviesActions.UNFOLLOW_MOVIE, (id:number)=> {
  return {
    payload: {
      id,
    },
  }
})

const updateRecomended = createAsyncThunk(
  MoviesActions.UPDATE_RECOMENDED,
  async (followedIds:number[]) => {
  try{
      if(followedIds.length){
        const results:Movie[] = [];
        for(let i=0;i<followedIds.length;i++){
        const request = await fetch(`https://api.themoviedb.org/3/movie/${followedIds[i]}/recommendations?api_key=abddd9821131bd64f255ccc171554771&language=en-US&page=1`);
        const response = await request.json();
        response.results.map((movie:any)=>{
          results.push({
            id:movie.id,
            poster_path:movie.poster_path,
            title:movie.title,
            backdrop_path:movie.backdrop_path,
            genre_ids:movie.genre_ids,
          })
        })
       
        } 
        return results;
      }
      return [];
  }catch(e){
      throw new Error('Some error with the load of Recomended Movies ');
  }
},
);

const loadFollowsFromLocal = createAction(MoviesActions.LOAD_FOLLOWED_LOCAL, (data:Movie[])=> {
  return {
    payload: {
      data,
    },
  }
})

export {
    fetchLoadPopularMovies,
    fetchLoadUpComingMovies,
    fetchLoadGeners,
    fetchLatestMovies,
    fetchMovieInfo,
    followMovie,
    unFollowMovie,
    updateRecomended,
    loadFollowsFromLocal,
}

