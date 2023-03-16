import { useEffect, useState } from "react";

const FetchGenres = (url) => {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const abort = new AbortController();

    fetch(url, { signal: abort.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Data was not obtained");
        }
        return res.json();
      })
      .then((data) => {
        setGenres(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => abort.abort;
  }, [url]);

  return { genres };
};

export default FetchGenres;
