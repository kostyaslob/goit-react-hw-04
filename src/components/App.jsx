import css from "./App.module.css";
import { useState, useEffect } from 'react';
import { fetchImages } from "./images-api";

import toast, { Toaster } from 'react-hot-toast';
// import Modal from 'react-modal';


import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage"
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn"

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  
  const [topic, setTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (newTopic) => {
    setTopic(newTopic);
    setCurrentPage(1);
    setImages([]);  
  };

  const incrementPage = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    if (topic === "") {
      return
    }

    async function fetchData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(topic, currentPage);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        })
          setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
        toast.error("Something went wrong. Please try later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    }, [topic, currentPage])

  
  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage/>}
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={incrementPage} />}
    </div>
  );
};
