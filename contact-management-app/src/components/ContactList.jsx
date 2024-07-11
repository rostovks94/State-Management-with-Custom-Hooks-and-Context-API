// Import necessary modules from React and the custom hook
import React from 'react';
import { useContacts } from '../context/ContactContext';

// Define the ContactList component
const ContactList = () => {
  // Consume the context to get contacts and the function to set the selected contact
  const { contacts, setSelectedContact } = useContacts();

  // Render the list of contacts
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          // Each contact is clickable and sets the selected contact when clicked
          <li key={contact.id} onClick={() => setSelectedContact(contact)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;