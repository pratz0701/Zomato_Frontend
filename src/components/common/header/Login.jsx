import { Close } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const Login = ({ open, close, setUser }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 4,
    border: "none",
  };
  const [loginDetails, setLoginDetails] = useState({
    username:"",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
    console.log(loginDetails)
  };

  const handleSubmit = () => {
    const options = {
      method: "POST",
      body: JSON.stringify(loginDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    setLoading(true);
    try {
      fetch("http://3.111.196.246/main/login/", options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.localStorage.setItem("id", data.id);
          window.localStorage.setItem("email", data.email);
          window.localStorage.setItem("username", data.username);
          setLoading(false);
          setUser(data);
          close();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack
          alignItems={"center"}
          direction="row"
          justifyContent={"space-between"}
        >
          <Typography variant="h4">Log in</Typography>

          <Close onClick={close} style={{ color: "red", cursor: "pointer" }} />
        </Stack>
        <Stack spacing={2} sx={{ mt: "2rem" }}>
          <TextField name="username" onChange={handleChange} placeholder="Username" />
          <TextField name="email" onChange={handleChange} placeholder="Email" />
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
          <Button
            loading={true}
            sx={{ mt: "1rem" }}
            color="error"
            variant="contained"
            onClick={handleSubmit}
          >
            {loading ? <CircularProgress color="inherit" size={23} /> : "Login"}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

// tere bina mere dil nahi lgta yaarrr
