import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/redux";
import { Movie } from "../../../../redux/movies/common";
import FilmComponent from "../../../film-component/film-component";
import { Geners } from "../../common";
import Tabs from "./tabs";

const GenersComponent:React.FC = ()=>{
    const [activeGener,setActiveGener] = useState(Geners.ALL);
    const latestMovies = useAppSelector((store)=>store.movies.latest);
    const [filmsByGener,setFilmsByGener] = useState<Movie[]>(latestMovies || []); 
    const [showAll,setShowAll] = useState(false);
    const geners = useAppSelector((store)=>store.geners);
    
    useEffect(()=>{
        setFilmsByGener(latestMovies);
    },[])
    
    useEffect(()=>{
        if(activeGener === 'All'){
            setFilmsByGener(latestMovies);
            return;
        }
        const generId = geners.find(item=>item.name === activeGener);
        const films = latestMovies.filter((item)=>item.genre_ids.some(value=>value === generId?.id));
       
        setFilmsByGener(films);
    },[activeGener])

    return(
        <> 
             <Tabs activeGener={activeGener} setActiveGener={setActiveGener}/>
                {latestMovies.length && geners && filmsByGener.length ?
                        <div className="container-md mt-5 flex-column d-flex">
                             <div className=" gener-movies-container ">
                        {filmsByGener.length > 7 && !showAll ? 
                            filmsByGener.slice(0,7).map((movie)=>{
                                return <FilmComponent movie={movie}/>
                            })
                          
                            :
                            filmsByGener.map((movie)=>{
                                return <FilmComponent movie={movie}/>
                            })
                        }
                            </div>
                            {filmsByGener.length > 7 ? 
                            <a className="gener-movies__btn mt-5" onClick={()=>{
                                setShowAll(!showAll)
                                
                            }}>
                                {showAll ? 'Hide Some' : 'Show More...'}
                            </a> 
                             : 
                            null}
                        </div>
                    :  
                    <div className="gu-white text-center fs-5 mt-4 ">
                        It`s Nothing Films By your Gener...
                    </div>
                }
           
            
            
        </>
    )   
}
export default GenersComponent;