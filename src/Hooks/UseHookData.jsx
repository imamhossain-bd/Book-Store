import { useEffect, useState } from 'react';

const UseHookData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([true])

    useEffect(() => {
        const fakeData = async() =>{
            setLoading(true)
            const res = await fetch("/data.json")
            const data = await res.json();
            setData(data)
            setLoading(false)
        };

        fakeData();
    },[])
    return (
        {data,loading}
    );
};

export default UseHookData;