import { useEffect, useState } from "react";
import { getSharks } from "../api/sharkApi";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const data = getSharks();
        console.log(data);
    }, []);
}
 
export default useFetch;