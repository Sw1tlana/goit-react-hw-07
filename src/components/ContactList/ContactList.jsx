import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const сontacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactsList}>
        {сontacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact}
            name={contact.name} 
            number={contact.number}
          />
        ))} 
      </ul>
    </div>
  )
}

export default ContactList;