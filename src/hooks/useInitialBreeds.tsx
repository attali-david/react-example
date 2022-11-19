import React from "react";
import convertsToJson from "../utils/convertsToJson.ts";
import useFetch from "./useFetch.tsx";

const useInitialBreeds = () => {
  let {
    data: breeds,
    error,
    loading,
  } = useFetch("https://dog.ceo/api/breeds/list/all");

  breeds = convertsToJson(breeds.message);

  return { breeds, error, loading };
};

export default useInitialBreeds;
