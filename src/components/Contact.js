// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <div className="list">
        <List
          className="contact-item"
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#bbdefb",
          }}
        >
          <ListItem sx={{ marginBottom: "0" }}>
            <Avatar>
              <ListItemAvatar>
                <img src={photo} alt="contact avatar"></img>
              </ListItemAvatar>
            </Avatar>
            <div className="contact-item-body">
              <ListItemText primary={name} />
              <ListItemText sx={{ color: "#546e7a" }} primary={phone} />
              <ListItemText sx={{ color: "#546e7a" }} primary={email} />
            </div>
          </ListItem>
          <Divider />
        </List>
      </div>
    </>
  );
};

export default Contact;
