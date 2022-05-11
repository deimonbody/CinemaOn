import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { moviesActions } from "../../../../redux/movies";
import { lStorageHasId, lStorageSet } from "../../../../services/local-storage";
import FilmComponent from "../../../film-component/film-component";
import './style.scss';

const Recomended: React.FC = () => {
    const recomended = useAppSelector((store) => store.movies.recomended)
    const [showAll, setShowAll] = useState(false);
    const followed = useAppSelector((store)=>store.movies.followers);
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
        const isHasFollowed = lStorageHasId({key:"followers"});
        if(isHasFollowed && followed){
            
            const followedIds = followed.map(item=>item.id);
            dispatch(moviesActions.updateRecomended(followedIds));
        }        
       
    },[followed])

    return (
        <>
            <div className="container-md recomended-wrapper">
            <div className="gu-white recomended__title mb-4">
                    <span className="recomended__title-text">
                        Recomended
                    </span>
                </div>
                {recomended.length ?
                    <div className=" mt-5 flex-column d-flex">
                        <div className=" recomended-movies-container ">
                            {recomended.length > 7 && !showAll ?
                                recomended.slice(0, 7).map((movie) => {
                                    return <FilmComponent movie={movie} />
                                })
                                :
                                recomended.map((movie) => {
                                    return <FilmComponent movie={movie} />
                                })
                            }
                        </div>
                        {recomended.length > 7 ?
                            <a className="gener-movies__btn mt-5" onClick={() => {
                                setShowAll(!showAll)

                            }}>
                                {showAll ? 'Hide Some' : 'Show More...'}
                            </a>
                            :
                            null}
                    </div>
                    :
                    <div className="gu-white fs-5 mt-5 text-center">
                        There is no recomended films to you...Follow some.
                    </div>
                }
            </div>

        </>
    )
}
export default Recomended;