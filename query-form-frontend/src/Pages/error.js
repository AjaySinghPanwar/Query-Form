import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './copyright';

function Error() {
    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#fef7ff' }}>
            <Box
                sx={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sorry!!! Server Is Busy Right Now
                </Typography>
                <br />
                <Typography component="h1" variant="h5">
                    Hang Tight!!!
                </Typography>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}

export default Error;