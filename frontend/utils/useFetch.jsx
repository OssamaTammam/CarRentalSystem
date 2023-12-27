import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3000";

const useFetch = (path) => {
  let url = baseUrl + path;
  let [data, setData] = useState([]);
  let [isPending, setIsPending] = useState(false);

  let fetchData = async (url) => {
    setIsPending(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setData(data);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setIsPending(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, setData, isPending];
};

export default useFetch;
