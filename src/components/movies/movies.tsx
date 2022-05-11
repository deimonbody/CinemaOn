import { Spinner } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";
import Geners from "./components/geners/geners";
import Recomended from "./components/recomended/recomended";


const Movies:React.FC = ()=>{
    const latestMovies = useAppSelector((store)=>store.movies.latest);
    return(
        <>  
        <div className="position-relative flex-grow-1 flex-shrink-0">
        {latestMovies.length ? 
                <>
                <Geners />
                <Recomended />
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
export default Movies;