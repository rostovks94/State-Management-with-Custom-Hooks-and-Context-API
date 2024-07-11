// Import necessary modules from React and the custom hook
import React from 'react';
import { useContacts } from '../context/ContactContext';

// Define the ContactDetails component
const ContactDetails = () => {
  // Consume the context to get the selected contact
  const { selectedContact } = useContacts();

  // If no contact is selected, display a message
  if (!selectedContact) return <div>Select a contact to see details</div>;

  // Render the details of the selected contact
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetails;