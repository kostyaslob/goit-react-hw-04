import css from "./App.module.css";
// import { useState, useEffect } from 'react';

// import { ClipLoader } from "react-spinners";



export default function App() {

  
  return (
    <div className={css.container}>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />   
    </div>
  );
};