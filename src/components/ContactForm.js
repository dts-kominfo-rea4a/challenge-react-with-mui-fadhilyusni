// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const ContactForm = (props) => {
  let [name, setName] = React.useState("");
  let [phone, setPhone] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [photo, setPhoto] = React.useState("");

  const onChangeName = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const onChangePhone = (e) => {
    let value = e.target.value;
    setPhone(value);
  };
  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const onChangePhoto = (e) => {
    let value = e.target.value;
    setPhoto(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      phone: phone,
      email: email,
      photo: photo,
    };
    props.fnAddNewData(contact);
    clearInput();
  };

  const clearInput = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPhoto("");
  };
  return (
    <>
      <Card className="form-input" sx={{ maxWidth: 400 }}>
        <CardContent>
          <form onSubmit={onSubmitHandler}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Named"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={onChangeName}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              margin="normal"
              value={phone}
              onChange={onChangePhone}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={onChangeEmail}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Photo Url"
              variant="outlined"
              margin="normal"
              value={photo}
              onChange={onChangePhoto}
            />
            <CardActions>
              <Button type="submit" color="success" size="small">
                submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </>
  );
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
};

export default ContactForm;
