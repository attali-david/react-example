import React, { useContext, createContext, useState } from "react";

const ImageContext = createContext();
const ImageUpdateContext = createContext();
const SearchContext = createContext();
const SearchUpdateContext = createContext();
const BreedContext = createContext();
const BreedUpdateContext = createContext();

export function useImageContext() {
  return useContext(ImageContext);
}

export function useImageUpdateContext() {
  return useContext(ImageUpdateContext);
}

export function useSearchContext() {
  return useContext(SearchContext);
}

export function useSearchUpdateContext() {
  return useContext(SearchUpdateContext);
}

export function useBreedContext() {
  return useContext(BreedContext);
}

export function useBreedUpdateContext() {
  return useContext(BreedUpdateContext);
}

export const Context = ({ children }) => {
  const [images, setImages] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);

  return (
    <ImageContext.Provider value={images}>
      <ImageUpdateContext.Provider value={setImages}>
        <SearchContext.Provider value={filteredBreeds}>
          <SearchUpdateContext.Provider value={setFilteredBreeds}>
            <BreedContext.Provider value={breeds}>
              <BreedUpdateContext.Provider value={setBreeds}>
                {children}
              </BreedUpdateContext.Provider>
            </BreedContext.Provider>
          </SearchUpdateContext.Provider>
        </SearchContext.Provider>
      </ImageUpdateContext.Provider>
    </ImageContext.Provider>
  );
};
