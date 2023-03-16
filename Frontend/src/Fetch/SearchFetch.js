import { useEffect, useState } from "react";

const SearchFetch = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();


  useEffect(() => {
    const abort = new AbortController();

    fetch(url)
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
  }, [url]);

  return { data, error, isLoading };
}
 
export default SearchFetch;