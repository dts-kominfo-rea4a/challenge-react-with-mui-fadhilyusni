import React from "react";
import "./App.css";
import Header from "./components/Header";

import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Grid from "@mui/material/Grid";
import contactJSON from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = React.useState(contactJSON);

  const addContact = (data) => {
    const newContacts = [...contacts, data];
    setContacts(newContacts);
  };
  return (
    <div className="App">
      <Header></Header>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <ContactForm fnAddNewData={addContact}></ContactForm>
        </Grid>
        <Grid xs={6}>
          {contacts.map((dt, i) => (
            <Contact data={dt} key={i}></Contact>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
