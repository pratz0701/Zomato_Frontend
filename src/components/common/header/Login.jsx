import { Close } from '@mui/icons-material';
import { Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'


export const Login = ({open, close}) => {
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
      border: "none"
    };
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password : ""
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(loginDetails)
    }

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
          <TextField name="email" onChange={handleChange} placeholder="Email" />
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
          <Button
            sx={{ backgroundColor: "red", mt: "1rem" }}
            variant="contained"
            onClick = {handleSubmit}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
