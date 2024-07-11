// Import necessary modules from React and the custom components
import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

// Define the main App component
const App = () => {
  // Wrap the components with the ContactProvider to provide context
  return (
    <ContactProvider>
      <div>
        <h1>Contact Management App</h1>
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;