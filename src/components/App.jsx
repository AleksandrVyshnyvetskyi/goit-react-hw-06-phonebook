import Phonebook from "./phonebook/Phonebook";
import PhonebookFilter from './phonebook/PhonebookFilter';
import PhonebookList from './phonebook/PhonebookList';
import './phonebook/Phonebook.css';

  export function App() {
    return (
      <>
      <h1>Phonebook</h1>
        <Phonebook/>
          <>
            <h2>Contacts :</h2>
            <PhonebookFilter />
            <PhonebookList/>
          </>
      </>
    );
   }
