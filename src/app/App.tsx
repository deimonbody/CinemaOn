import { Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import Main from "../components/main/main";
import './style.scss';
import * as moviesActions from '../redux/movies/actions';
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import Footer from "../components/footer/footer";
import Movies from "../components/movies/movies";
import MovieInfo from "../components/movie-info/movie-info";
import { ReactNotifications } from "react-notifications-component";
import Follows from "../components/follows/follows";
import { lStorageGetInfo, lStorageHasId } from "../services/local-storage";

const App:React.FC = ()=>{
  const dispatch = useAppDispatch();
  const isHasFollowed = lStorageHasId({key:"followers"});

  useEffect(()=>{
    if(isHasFollowed){
      const followers = lStorageGetInfo({key:"followers"});
      dispatch(moviesActions.loadFollowsFromLocal(JSON.parse(followers as string)));
    }
    dispatch(moviesActions.fetchLoadPopularMovies());
    dispatch(moviesActions.fetchLoadUpComingMovies());
    dispatch(moviesActions.fetchLoadGeners());
    dispatch(moviesActions.fetchLatestMovies());
  },[])

    return(
      <>
        <Header></Header>
        <ReactNotifications />
        <Routes>
          <Route path={'/'} element={<Main />}/>        
          <Route path={'/movies'} element={<Movies />}/>        
          <Route path={'/movie-info/:id'} element={<MovieInfo /> } /> 
          <Route path={'/follows'} element={<Follows /> } /> 
        </Routes>
        <Footer></Footer>
      </>
    )
}
export default App;
