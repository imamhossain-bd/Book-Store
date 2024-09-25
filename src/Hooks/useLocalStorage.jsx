import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/LocalStorage";


const useLocalStorage = (key) => {
    const [localData, setLocalData] = useState([]);
    useEffect(() =>{
        setLocalData(getFromLocalStorage(key))
    },[key])
    return {localData};
};

export default useLocalStorage;