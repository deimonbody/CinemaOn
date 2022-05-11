import { Carousel } from "react-bootstrap";
import { imgSrc } from "../../common/constants";
import { Movie } from "../../redux/movies/common";

interface Props {
    popularMovie:Movie;
}

const MovieCarouselItem:React.FC<Props> = ({ popularMovie })=>{
    const currentImgSrc = `${imgSrc}${popularMovie.poster_path}`;
    
    return(
        <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={currentImgSrc}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{popularMovie.title}</h3>
                    </Carousel.Caption>
            </Carousel.Item>
    )
}

export default MovieCarouselItem;