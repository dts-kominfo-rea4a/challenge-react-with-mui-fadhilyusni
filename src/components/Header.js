// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Divider from "@mui/material/Divider";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>call a friend</h1>
        <Divider>your friendly contact app</Divider>
      </div>
    </>
  );
};

export default Header;
