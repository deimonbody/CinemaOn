interface Props {
    key:string;
    info?:string;
}

export const lStorageSet = ({key,info}:Props)=>{
    localStorage.setItem(key,info as string);   
}

export const lStorageHasId = ({key}:Props)=>{
    if(localStorage.getItem(key)){
        return true
    }
    return false
    
}

export const lStorageGetInfo=({key}:Props)=>{
    return localStorage.getItem(key)
}

