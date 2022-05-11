import Tabs from "./components/tabs/tabs";
import './style.scss';
import { Movie } from "../../../redux/movies/common";
import { useState } from "react";
import WatchSoon from "./components/watch-soon/watch-soon";
import WatchNow from "./components/watch-now/watch-now";

interface Props {
    upComingMovies:Movie[];
    popularMovies:Movie[];
}

const MainFilms:React.FC<Props> = ({ upComingMovies,popularMovies })=>{
    const [activeTabIndex,setActiveTabIndex] = useState(0);
    const tabs = ['Watch Soon','Watch Now'];
    console.log(activeTabIndex);
    return(
        <>
        <div className="mainFilms">
            <div className="container-md">
                <span className="gu-white fw-bold fs-2 mb-4 d-block">Fillms in CinemaOn</span>
                <Tabs tabs={tabs} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
                {activeTabIndex ? 
                    <WatchNow popularMovies={popularMovies}/>    
                    :
                    <WatchSoon upComingMovies={upComingMovies} />
                }
              
            </div>
        </div>
            
           
        </>
    )
}
export default MainFilms;