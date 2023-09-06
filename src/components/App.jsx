import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [mount, setMount] = useState(true);

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  useEffect(() => {
    const contactsParsed = JSON.parse(localStorage.getItem('contacts'));
    if (!contactsParsed) {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
      return;
    }
    setContacts([...contactsParsed]);
  }, []);

  // componentDidMount() {
  //   const contactsParsed = JSON.parse(localStorage.getItem('contacts'));
  //   if (!contactsParsed) {
  //     return;
  //   }
  //   this.setState({ contacts: [...contactsParsed] });
  // }

  useEffect(() => {
    if (mount) {
      setMount(false);
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, mount]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const handleChange = e => {
    setFilter(e.currentTarget.value);
  };

  const handleSubmit = contact => {
    const isExist = contacts.find(
      ({ name }) =>
        name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    );
    if (isExist) {
      window.alert('This name is already in the list');
      return;
    } else {
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const removeItem = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const items = filteredContacts();

  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={items} removeItem={removeItem} />
    </Container>
  );
}
