import css from "./App.module.css";
import { useState, useEffect } from 'react';
import { useDebounce } from "use-debounce";


export default function App() {

  
  return (
    <div className={css.container}>
      <ContactForm />
    </div>
  );
};