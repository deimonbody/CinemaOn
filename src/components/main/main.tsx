import { Spinner } from "react-bootstrap"
import { useAppSelector } from "../../hooks/redux";
import CarouselComponent from "./carousel/carousel";
import MainFilms from "./main-films/main-films";
import './style.scss';
const Main: React.FC = () => {
    const popularMovies = useAppSelector((store)=>store.movies.populars);
    const upComingMovies = useAppSelector((store)=>store.movies.upcoming);

    return (
        <>
            <div className="position-relative main-wrapper">
            {
                popularMovies.length && upComingMovies.length ?
                <>
                    <CarouselComponent popularMovies={popularMovies}/>
                    <MainFilms popularMovies={popularMovies} upComingMovies={upComingMovies}/>
                    
                </>
                
            :    
            <Spinner animation="border" role="status" className="spinner">
                <span className="visually-hidden ">Loading...</span>
            </Spinner>
            }
            </div>
        </>
    )
}

export default Main;