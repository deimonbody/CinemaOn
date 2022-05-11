import { Movie } from "../../../../../redux/movies/common";
import WatchCarousel from "../watch-carousel/watch-carousel";

interface Props {
    popularMovies:Movie[];
}

const WatchNow:React.FC<Props> = ({popularMovies})=>{
    return (
        <WatchCarousel collections={popularMovies}/>  
    )
};

export default WatchNow;