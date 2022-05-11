import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import * as actions from './actions';
import {  State } from './common';

const opportunityReducer = (builder: ActionReducerMapBuilder<State>): void => {
    builder.addCase(actions.fetchLoadPopularMovies.fulfilled,(state,payload)=>{
        if(state.movies){
            state.movies.populars = payload.payload;
        }
    })
    builder.addCase(actions.fetchLoadUpComingMovies.fulfilled,(state,payload)=>{
        if(state.movies){
            state.movies.upcoming = payload.payload;
        }
    })
    builder.addCase(actions.fetchLoadGeners.fulfilled,(state,payload)=>{
        if(state.geners){
            state.geners = payload.payload;
        }
    })
    builder.addCase(actions.fetchLatestMovies.fulfilled,(state,payload)=>{
        if(state.movies){
            state.movies.latest = payload.payload ;
        }
    })
    builder.addCase(actions.fetchMovieInfo.fulfilled,(state,payload)=>{
        if(state.movies){
            state.movies.details.push(payload.payload);
        }
    })
    builder.addCase(actions.followMovie,(state,payload)=>{
        if(state.movies){
            state.movies.followers.push(payload.payload.movie);
        }
    })
    builder.addCase(actions.unFollowMovie,(state,payload)=>{
        if(state.movies){
            const index = state.movies.followers.findIndex((item)=>item.id === payload.payload.id);
            state.movies.followers.splice(index,1);
        }
    })
    builder.addCase(actions.updateRecomended.fulfilled,(state,payload)=>{
        if(state.movies){
            state.movies.recomended = payload.payload;
        }
    })
    builder.addCase(actions.loadFollowsFromLocal,(state,payload)=>{
        if(state.movies){
            state.movies.followers = payload.payload.data;
        }
    })
};
export default opportunityReducer;
