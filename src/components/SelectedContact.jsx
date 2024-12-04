import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);
  console.log(contact);

  useEffect(() => {
    async function fetchSelected() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        console.log(result);

        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelected();
  }, []);

  return (
    <>
    {contact &&    <ContactCard contact={contact} setSelectedContactId={setSelectedContactId} />}
    </>
  );
};

export default SelectedContact;
