import { Movie } from "../../../../../redux/movies/common";
import WatchCarousel from "../watch-carousel/watch-carousel";

interface Props {
    upComingMovies:Movie[];
}

const WatchSoon:React.FC<Props> = ({upComingMovies})=>{
    return(
        <WatchCarousel collections={upComingMovies}/>
    )
};

export default WatchSoon;

