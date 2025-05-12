import css from "./App.module.css";
import { useState, useEffect } from 'react';
import axios from "axios";
// import { ClipLoader } from "react-spinners";
// import Modal from 'react-modal';

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./images-api";



export default function App() {
  const [images, setImages] = useState([]);

  

  const handleSearch = async (newTopic) => {
    try {
      const data = await fetchImages(newTopic)
      setImages(data)
    } catch (error) {}
  };

  
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      { images.length > 0 && <ImageGallery items={images} />}
      {/* <Loader />
      <ErrorMessage />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />    */}
    </div>
  );
};