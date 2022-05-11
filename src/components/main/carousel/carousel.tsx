import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { imgSrc } from "../../../common/constants";
import { Movie } from "../../../redux/movies/common";
import moreInfoNavigate from "../../../services/more-info-navigate";

interface Props {
    popularMovies:Movie[];
}

const CarouselComponent:React.FC<Props> = ({ popularMovies })=>{
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const handleSelect = (selectedIndex:number) => {
        setIndex(selectedIndex);
     };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
                    {popularMovies.map((item)=>{
                        const currentImgSrc = `${imgSrc}${item.backdrop_path}`;
                        return  (
                                <Carousel.Item className="carousel-img">
                                <img
                                className=""
                                src={currentImgSrc}
                                alt="First slide"
                                />
                            <Carousel.Caption className="d-flex align-items-md-center flex-column flex-md-row align-items-start ">
                             <span className="gu-blue  fw-bold me-4 carousel-title  mb-3 mb-md-0">{item.title}</span>
                                <div className="d-flex align-items-start align-items-md-center">
                                <span className="carousel-view gu-white me-4 fw-bold mb-3 mb-md-0">2D</span>
                                <a className = "carousel__more-info-btn fw-bold  " onClick={()=>{
                                     moreInfoNavigate({id:item.id,navigate})
                                }}>More Info</a>
                            
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                            
                            
                        )
                    })}
                </Carousel>
    )
}

export default CarouselComponent;