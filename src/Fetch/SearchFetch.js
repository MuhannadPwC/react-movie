import { useEffect, useState } from "react";
import { api_key, url } from "../Global";

const SearchFetch = (search, year = '', page = 1) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();


  useEffect(() => {
    const abort = new AbortController();

    fetch(`${url}/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=${page}&year=${year}`)
    .then((res) => {
      if(!res.ok) {
        throw Error('Data was not obtained');
      } 
      return res.json()
    })
    .then((data) => {
      setIsLoading(false);
      setError(null);
      setData(data);
    })
    .catch((err) => {
      if(err.name === "AbortError") {
        console.log(err);
      } else {
        setIsLoading(false);
        setError(err.message);
      }
    })

    return () => abort.abort;
  });

  return { data, error, isLoading };
}
 
export default SearchFetch;