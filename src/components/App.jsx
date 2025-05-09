import css from "./App.module.css";
// import { useState, useEffect } from 'react';
// import { useDebounce } from "use-debounce";
// import axios from "axios";
// import { ClipLoader } from "react-spinners";



export default function App() {

  
  return (
    <div className={css.container}>
      <ContactForm />
      <ErrorMessage />
      <ImageGallery />
      <ImageModal />
      <Loader />
      <LoadMoreBtn />
      <SearchBar />   

    </div>
  );
};