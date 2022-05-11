import { useKeenSlider } from 'keen-slider/react';
import {  useState } from 'react';
import "../../../../../../node_modules/keen-slider/keen-slider.scss";
import { smallImgSrc } from '../../../../../common/constants';
import { Movie } from '../../../../../redux/movies/common';
import { ChevronRight,ChevronLeft } from 'react-bootstrap-icons';
import './style.scss';
import moreInfoNavigate from '../../../../../services/more-info-navigate';
import { useNavigate } from 'react-router-dom';

interface Props {
    collections:Movie[];
}
const WatchCarousel:React.FC<Props> = ({collections})=>{
    const [activeSlide,setActiveSlide] = useState(collections.length-1);
    const navigate = useNavigate();
    const [refCallback, slider] = useKeenSlider(
        {
          animationEnded(){
              setActiveSlide(slider.current?.track.details.rel as number)
            },
          loop:true,
          rtl:true,
          slides:{
            perView: 3,
            spacing: 10   
            },
          breakpoints:{
            '(max-width: 767px)': {
                slides:{
                    perView: 2,
                    spacing: 10   
                }    
            },
            '(max-width: 540px)':{
                slides:{
                    perView: 1,
                    spacing: 10,   
                } 
            }
          },
          initial:activeSlide,
        },
        [
        
        ]
      )
    const ownCounter = [collections.length-1]
    for(let i =0;i<=collections.length-2;i++){
        ownCounter.push(i);
    }
    
      return (
        <div ref={refCallback} className="keen-slider mt-5 position-relative" >
            <div className="position-absolute prev-icon" onClick={()=>{
                 slider.current?.next();
                 setActiveSlide(slider.current?.track.details.rel as number);
            }}>
                <ChevronLeft></ChevronLeft>
            </div>
            <div className="position-absolute next-icon" onClick={()=>{
                slider.current?.prev();
                setActiveSlide(slider.current?.track.details.rel as number);
            }}>
                <ChevronRight></ChevronRight>
            </div>
            {
                collections.map((item,index)=>{
                    const isActive = activeSlide === ownCounter[index] ? 'slide-active' : '';
                    const initialSrc = `${smallImgSrc}${item.poster_path}`;
                    return(
                        <div className={`keen-slider__slide number-slide${index} ${isActive}`}
                            key={index}
                        >
                            <div className="keen-slider__img">
                                <div className="active-bg"></div>
                                <img src={initialSrc}>
                                </img>
                            </div>
                                <a className="keen-slider__slide-btn" onClick={()=>{
                                    moreInfoNavigate({id:item.id,navigate})
                                }}>More info</a>
                          

                        </div>
                    )
                    
                })
            }
          
        </div>
      )
};

export default WatchCarousel;

