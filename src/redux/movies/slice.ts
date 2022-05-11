import { createSlice } from '@reduxjs/toolkit';
import { State } from './common';
import opportunityReducer from './reducer';

const initialState:State = {
  movies:{
    populars:[],
    upcoming:[],
    recomended:[],
    followers:[],
    latest:[],
    details:[],
  },
  geners:[]
};

const { reducer, actions } = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
  extraReducers: opportunityReducer,
});

export { reducer, actions };
