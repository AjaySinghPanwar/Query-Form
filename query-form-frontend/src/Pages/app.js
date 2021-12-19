import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ChatIcon from '@mui/icons-material/Chat';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './copyright';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

function QueryForm(props) {
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userMobile, setUserMobile] = React.useState("");
  const [userCity, setUserCity] = React.useState("");
  const [userQuery, setUserQuery] = React.useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setUserName(event.target.value);
    }
    if (event.target.name === "email") {
      setUserEmail(event.target.value);
    }
    if (event.target.name === "phone") {
      setUserMobile(event.target.value);
    }
    if (event.target.name === "city") {
      setUserCity(event.target.value);
    }
    if (event.target.name === "query") {
      setUserQuery(event.target.value);
    }
  }

  async function handleSubmit(event){
    event.preventDefault();

    // const data = new FormData(event.currentTarget);

    // // console.log(data.get('name'));

    // if (data.get('name') === "" || data.get('email') === "" || data.get('query') === "") {
    //   alert("Please fill all the fields correctly");
    // }


    //Sending the post request
    axios.post('http://localhost:9000/submit', {
      userName,
      userEmail,
      userMobile,
      userCity,
      userQuery,
    })
      .then(function (response) {
        console.log(response);

        //Clearing the field values
        setUserName("");
        setUserEmail("");
        setUserMobile("");
        setUserCity("");
        setUserQuery("");

        //Navigating to the thankyou page
        navigate("/thankyou");
      })
      .catch(function (error) {
        console.log(error);
        navigate("/error");
      });
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fef7ff' }}>
      <Box
        sx={{
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ChatIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ask Your Query
        </Typography>
        <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 1 }}>
          <TextField
            required
            margin="normal"
            fullWidth
            name="name"
            id="name"
            label="Enter Your Name"
            value={userName}
            onChange={handleChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            name="email"
            id="email"
            label="Enter Your Email"
            autoComplete="email"
            value={userEmail}
            onChange={handleChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            name="phone"
            id="phone"
            label="Enter Your Mobile No."
            type="tel"
            value={userMobile}
            onChange={handleChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="city"
            name="city"
            label="Enter Your City"
            type="text"
            value={userCity}
            onChange={handleChange}
          />
          <TextField
            required
            margin="normal"
            fullWidth
            id="query"
            name="query"
            label="Enter Your Query"
            type="text"
            value={userQuery}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default QueryForm;
