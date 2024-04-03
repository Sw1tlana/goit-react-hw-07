import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import Loader from './components/Loader/Loader';
import css from './App.module.css';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);
  
  return (
    <div className={css.formWrapper}>
    <h1 className={css.heroFormTitle}>Phonebook</h1>
    <Loader/>
    <ContactForm />
    <SearchBox />
    <ContactList />  
    </div>
  )
}

export default App