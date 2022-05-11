import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './style.scss';
import {ChevronDown,ChevronRight} from 'react-bootstrap-icons'
import { Geners, GenerType } from '../../common';

interface Props {
    activeGener:string;
    setActiveGener:Dispatch<SetStateAction<Geners>>
}
const Tabs:React.FC<Props> = ({activeGener,setActiveGener})=>{
  
      
    const generItems:Array<GenerType> = Object.keys(Geners).map((key) => key as keyof typeof Geners);
    const [isOpen,setIsOpen] = useState(false);
    
    useEffect(()=>{
        const closeHandler = ()=>{
            setIsOpen(false);
        }
        document.body.addEventListener('click',closeHandler);
        return ()=>{
            document.body.removeEventListener('click',closeHandler);
        }
    },[])
    
    return(
        <div className='container-md d-flex flex-column movies-tabs'>
            <div className="gu-white geners__title mb-4">
                    <span className="geners__title-text">
                    Geners
                    </span>
                </div>
            <Menu className="movies__menu" menuButton={
                <MenuButton className="gener__button d-flex aling-items-center" onClick={(e)=>{
                    e.stopPropagation();
                    setIsOpen(!isOpen)
                }}>
                    {activeGener} 
                    <div className="ms-4">
                        {isOpen ? <ChevronDown/> : <ChevronRight />}
                    </div>
                    
                </MenuButton>
            
            }>
            {
                generItems.map((gener)=>{
                    return(
                        <MenuItem onClick={(e)=>{
                            e.stopPropagation=true;
                            setActiveGener(Geners[gener]);
                            setIsOpen(false);
                        }}>{Geners[gener]}</MenuItem>
                    )
                })
            }
            </Menu>
        </div>
        
    )
}

export default Tabs;