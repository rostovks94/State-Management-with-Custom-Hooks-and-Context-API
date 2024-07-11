// Import necessary modules from React
import React, { createContext, useState, useContext } from 'react';

// Create a context for managing contacts
const ContactContext = createContext();

// Create a provider component to wrap the app and provide context values
export const ContactProvider = ({ children }) => {
  // Initialize state for contacts with dummy data
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Michael', email: 'michael@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Kseniia', email: 'kseniia@example.com', phone: '987-654-3210' },
  ]);

  // Initialize state for the currently selected contact
  const [selectedContact, setSelectedContact] = useState(null);

  // Return the provider component with the context value
  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use the ContactContext
export const useContacts = () => useContext(ContactContext);