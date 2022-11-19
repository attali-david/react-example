import React, { useState, useMemo, useEffect } from "react";
import {
  useSearchUpdateContext,
  useBreedContext,
} from "../context/Provider.tsx";

const useSearch = () => {
  const breeds = useBreedContext();
  const [query, setQuery] = useState("");

  const filteredBreeds = useMemo(() => {
    return breeds.filter((breed) => {
      return breed.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, breeds]);

  useEffect(() => {
    console.log(filteredBreeds);
  }, [filteredBreeds]);

  const setFilteredBreeds = useSearchUpdateContext();
  setFilteredBreeds(filteredBreeds);

  return { query, setQuery };
};

export default useSearch;
