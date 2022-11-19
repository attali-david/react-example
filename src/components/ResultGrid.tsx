import React, { useEffect, useState } from "react";
import Breed from "./Breed.tsx";
import "./stylesheet.css";
import Images from "./Images.tsx";
import Loading from "./Loading.tsx";
import useInitialBreeds from "../hooks/useInitialBreeds.tsx";
import { useSearchContext } from "../context/Provider.tsx";

const ResultGrid = () => {
  const [loadIMG, setLoadIMG] = useState<boolean>(false);
  const [images, setImages] = useState([]);
  const { breeds, loading } = useInitialBreeds();
  const filteredBreeds = useSearchContext();
  console.log(filteredBreeds);
  async function clickHandler(ref) {
    setLoadIMG((prev) => !prev);
    try {
      ref.current.focus();
      const res = await fetch(
        `https://dog.ceo/api/breed/${ref.current.name}/images`
      );
      const json = await res.json();
      setImages(json.message);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadIMG((prev) => !prev);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="resultGrid">
          {breeds.map((breed) => (
            <Breed breed={breed} key={breed.name} clickHandler={clickHandler} />
          ))}
        </section>
      )}
      {loadIMG ? (
        <Loading />
      ) : (
        <section>
          {images.map((url) => (
            <Images key={url} url={url} />
          ))}
        </section>
      )}
    </>
  );
};

export default ResultGrid;
