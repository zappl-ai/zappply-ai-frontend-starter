import React from 'react';
import {Typography} from "@mui/material";

function ComponentExampleLive(props) {
    return (
        <Typography
            sx={{
                color: 'red',
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
            }}
        >
            This comp was made live for the demo video
        </Typography>
    );
}

export default ComponentExampleLive;
