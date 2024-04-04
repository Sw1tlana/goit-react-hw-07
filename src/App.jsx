import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
// import Loader from './components/Loader/Loader';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectLoading } from './redux/selectors';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts);
}, [dispatch]);
  
  return (
    <div className={css.formWrapper}>
    <h1 className={css.heroFormTitle}>Phonebook</h1>
    <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
    <ContactList />  
    </div>
  )
}

export default App