import { Dispatch, SetStateAction } from "react";

interface Props{
    tabs:string[];
    activeTabIndex:number;
    setActiveTabIndex:Dispatch<SetStateAction<number>>
}

const Tabs:React.FC<Props> = ({tabs,activeTabIndex,setActiveTabIndex})=>{
    
    return(
        <>
            {tabs.map((title,index)=>{
                return (
                    <span key={index} className={` fw-bold fs-5 me-4 tab-films
                    ${index === activeTabIndex ? 'tab-films-active' : '' }
                    `}
                     onClick={()=>setActiveTabIndex(index)}
                    >{title}</span>
                )
            })}
        </>
    )
}

export default Tabs;