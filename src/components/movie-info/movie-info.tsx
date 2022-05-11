import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import * as moviesActions from '../../redux/movies/actions';
import { IDetailMovie, Movie } from "../../redux/movies/common";
import {Heart,HeartFill,StarFill,Calendar} from 'react-bootstrap-icons';
import './style.scss';
import { smallImgSrc } from "../../common/constants";
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import { lStorageSet } from "../../services/local-storage";

const MovieInfo:React.FC = ()=>{
    const { id } = useParams();
    const [movie,setMovie] = useState<IDetailMovie | undefined>(undefined); 
    const dispatch= useAppDispatch();
    const followed = useAppSelector((store)=>store.movies.followers);
    const details = useAppSelector((store)=>store.movies.details);
    const [isFollowed,setIsFollowed] = useState(false);

    useEffect(()=>{
        if(id){
            const isHasMovieDetail = details.find((item)=>item.id === +id);
            isHasMovieDetail ?  
            setMovie(isHasMovieDetail)
            :
            dispatch(moviesActions.fetchMovieInfo(id))
            .unwrap()
            .then((movieInfo)=>{
                setMovie(movieInfo);
            })
            
            const isFollowedMovie = followed.find((item)=>item.id === +id);
            isFollowedMovie ? setIsFollowed(true) : setIsFollowed(false);
        }
    },[])
    
    useEffect(()=>{
            
            lStorageSet({key:"followers",info:JSON.stringify(followed)});
            const followedIds = followed.map(item=>item.id);
            dispatch(moviesActions.updateRecomended(followedIds));
    },[followed])
    
    const followHandler = ()=>{
        if(isFollowed && movie){
            dispatch(moviesActions.unFollowMovie(movie.id ));
            setIsFollowed(false);
            Store.addNotification({
                insert: "top",
                type:"danger",
                container: "top-right",
                title:"The Film was removed from your followed list",
                animationIn: ["animate__animated animate__fadeIn"],
                animationOut: ["animate__animated animate__fadeOut"],
                slidingEnter:{
                    duration: 800,
                    timingFunction: 'ease-out',
                    delay: 0
                },
                dismiss: {
                    duration: 2500,
                } 
            })
        }else{
            dispatch(moviesActions.followMovie(movie as Movie));
            setIsFollowed(true);
            Store.addNotification({
                insert: "top",
                type:"success",
                container: "top-right",
              title:"The Film was added in your followed list",
                animationIn: ["animate__animated animate__fadeIn"],
                animationOut: ["animate__animated animate__fadeOut"],
                slidingEnter:{
                    duration: 800,
                    timingFunction: 'ease-out',
                    delay: 0
                },
                dismiss: {
                    duration: 2500,
                } 
            
            
        });
        }
    }
    return( 
        <>
            {movie && id ? 
                <div className="container-md movie-info-container d-flex flex-column flex-md-row">
                    <div className="movie-info-img-block me-0 me-md-4 mb-5 mb-md-0 align-self-center">
                        <img src={`${smallImgSrc}${movie.poster_path}`} />
                    </div>
                    <div className="d-flex flex-column flex-grow-1">
                        <div className="movie-info__header d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="gu-white fw-bold fs-4 d-block mb-2">{movie.title}</span>
                                <span className="text-end movie-follow" onClick={followHandler}>
                                    {
                                    isFollowed ? <HeartFill className="movie-follow-full"/> : <Heart className="movie-follow-empty"/>
                                    }
                                </span>   
                            </div>
                        
                            
                            <div className="d-flex align-items-center ">
                                <span className="gu-white me-3 fs-6 movie-info-icon movie-info-calendar d-flex-align-items-center">
                                    <Calendar className="me-2"/>
                                    {movie.release_date}
                                </span>
                                <span className="gu-white fs-6 flex-grow-1 movie-info-icon movie-info-avarage d-flex align-items-center">
                                    {movie.vote_average}
                                    <StarFill className="ms-2"/>
                                </span>
                                
                            </div>
                            
                        </div>
                        <div className="gu-white fs-6 mt-5">
                                {movie.overview}
                        </div>
                    </div>
                </div>
            :
            <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden ">Loading...</span>
            </Spinner>
            }
        </>
    )
}
export default MovieInfo;