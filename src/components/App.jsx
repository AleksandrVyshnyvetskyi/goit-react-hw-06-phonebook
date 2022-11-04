import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from "./phonebook/Phonebook";
import {PhonebookFilter} from './phonebook/PhonebookFilter';
import {PhonebookList} from './phonebook/PhonebookList';
import './phonebook/Phonebook.css';

export function App(){
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('phone-list')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phone-list', JSON.stringify(contacts));
  }, [contacts]);
  

  useEffect(() => {
        return () => {
          localStorage.removeItem('phone-list');
        }
      }, []);

  const isDublicate = (contact) => {
        const result = contacts.find((item) => item.name === contact.name);
        return result;
      };

  const addContact = (data) => {
        if (isDublicate(data)) {
          return alert(`${data.name} уже существует в списке контактов 🤪 `);
        }
        const newContact = {
          ...data,
          id: nanoid(),
        }
        setContacts((prevState) => {
          return [...prevState, newContact];
        });
      };

      const removeContact = (id) => {
        setContacts((prevState) => {
          const newContacts = prevState.filter((item) => item.id !== id);
          return newContacts;
        })
      }

      const filterChange = (event) => {
        const { value } = event.target;
        setFilter(value);
      }

      const getFilter = () => {
        const filterNormolaze = filter.toLocaleLowerCase();
        if (!filter) {
          return contacts;
        }
        const filterContacts = contacts.filter(({ name }) => {
          const nameContactNormolaze = name.toLocaleLowerCase();
          const resultFilter = nameContactNormolaze.includes(filterNormolaze);
          return resultFilter;
        })
        return filterContacts;
      }

  return (
    <>
    <h1>Phonebook</h1>
      <Phonebook onAddContacs={addContact}/>
        <>
          <h2>Contacts :</h2>
          <PhonebookFilter onChange={filterChange} />
          <PhonebookList
            items={getFilter()}
            onRemove={removeContact}
          />
        </>
    </>
  );
}
