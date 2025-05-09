import css from "./App.module.css";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import initialContacts from "../contacts.json";

import { useState, useEffect } from 'react';

import { useDebounce } from "use-debounce";


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("key");
    if (savedContacts !== null) {
        return JSON.parse(savedContacts)
    }
    return initialContacts;
    
  });

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(contacts));
  }, [contacts]);


  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact]
    })
  }
  
  const deleteContact = (contactId) => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    }) 
  } 

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(debouncedSearch.toLowerCase()));

  
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  );
};