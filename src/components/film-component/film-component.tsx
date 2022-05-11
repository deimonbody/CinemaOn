import { useNavigate } from "react-router-dom";
import { smallImgSrc } from "../../common/constants";
import { Movie } from "../../redux/movies/common";
import moreInfoNavigate from "../../services/more-info-navigate";
import './style.scss';
interface Props {
    movie:Movie;
}

const FilmComponent:React.FC<Props> = ({movie})=>{
    const absoluteSrc = `${smallImgSrc}${movie.poster_path}`;
    const navigate = useNavigate();
    return(
        <div className="film-component">
            <img src={absoluteSrc} />
            <span className="film-component__view gu-white fw-bold">2D</span>
            <span className="film-component__info gu-white" onClick={()=>{
               moreInfoNavigate({id:movie.id,navigate})
            }}>More Info</span>
        </div>
    )
}
export default FilmComponent;