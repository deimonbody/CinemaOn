import { NavigateFunction } from "react-router-dom";

interface Props {
    id:string | number;
    navigate:NavigateFunction;
}
const moreInfoNavigate = ( { id,navigate }:Props )=>{
    navigate(`/movie-info/${id}`);
}
export default moreInfoNavigate;