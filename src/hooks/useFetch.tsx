import React, { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading((prev) => !prev);

      try {
        let res = await fetch(url);
        let json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading((prev) => !prev);
      }
    };

    getData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
