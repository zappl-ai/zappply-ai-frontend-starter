import React from 'react';
import {Box, Button} from "@mui/material";

function MockTaskComp(props) {
    return (
        <div>
            <Box sx={{
                display : 'flex',
                justifyContent: 'space-around',

            }
            }>

            <p>
                Share your preferences and non-negotiables with us, and we'll connect you with the perfect job that aligns with your criteria.
            </p>
            <p>
                Discover comprehensive insights into company benefits, culture, values, and beyond.
            </p>
            <p>
                Empower your job applications with our assistance in creating customized, high-quality applications for each position you pursue.
            </p>

            </Box>
            <Box sx={{
                display : 'flex',
                justifyContent: 'center'
            }}>

            <Button variant="contained" color="success">
                Success
            </Button>

            </Box>
        </div>
    );
}

export default MockTaskComp;