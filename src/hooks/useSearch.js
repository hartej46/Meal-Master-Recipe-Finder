import { useState, useEffect } from "react";

function useSearch({parameter, value}){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMeal() {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${parameter}=${value}}`);
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMeal();
    }, []);

    return { data, loading, error };
}

export default useSearch;