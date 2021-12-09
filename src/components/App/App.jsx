import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addDataApp = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  normalizeName = name =>
    name
      .split(' ')
      .map(word => {
        const firstUpCaseLetter = word.charAt(0).toUpperCase();
        const anoterLetter = word.substring(1);
        return `${firstUpCaseLetter}${anoterLetter}`;
      })
      .join(' ');

  addContacts = (e, obj) => {
    e.preventDefault();

    const isHaveName = this.state.contacts.some(
      ({ name }) => name === obj.name,
    );

    if (isHaveName) {
      return alert(`${this.normalizeName(obj.name)} is alredy in contacts.`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, obj],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  filterContacts = filterName =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterName.toLowerCase()),
    );

  render() {
    const { filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContacts} />

        <h2>Contacts</h2>
        <Filter onChangeDate={this.addDataApp} value={filter} />

        <ContactList
          normalizeName={this.normalizeName}
          onClickBtn={this.deleteContact}
          filterContacts={this.filterContacts}
          filterName={filter}
        />
      </div>
    );
  }
}

export default App;

// deleteContact = () => {
//   const id = e.target.parentElement.id;
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(item => item.id !== id),
//   }));
// };
