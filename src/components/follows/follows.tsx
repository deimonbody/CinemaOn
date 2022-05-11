import { useState } from "react";
import { useAppSelector } from "../../hooks/redux"
import FilmComponent from "../film-component/film-component";
import './style.scss';

const Follows: React.FC = () => {
    const followsMovies = useAppSelector((store) => store.movies.followers);
    const [showAll, setShowAll] = useState(false);

    return (
        <>
      
            <div className="container-md flex-column d-flex follows flex-grow-1 flex-shrink-0">
                <div className="gu-white follow__title mb-4">
                    <span className="follow__title-text">
                        Favorites
                    </span>
                </div>
                {followsMovies.length ? 
                <>
                    <div className=" follow-movies-container ">
                    {followsMovies.length > 7 && !showAll ?
                        followsMovies.slice(0, 7).map((movie) => {
                            return <FilmComponent movie={movie} />
                        })

                        :
                        followsMovies.map((movie) => {
                            return <FilmComponent movie={movie} />
                        })
                    }
                    </div>
                {followsMovies.length > 7 ?
                    <a className="follow-movies__btn mt-5" onClick={() => {
                        setShowAll(!showAll)
                    }}>
                        {showAll ? 'Hide Some' : 'Show More...'}
                    </a>
                    :
                    null}
                </>
                :
                <div className="gu-white text-center fs-4">
                    There is no followers movies...Try to add some.
                </div>
                }
                
            </div>
        </>
    )
}
export default Follows;