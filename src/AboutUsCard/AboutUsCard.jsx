import React from 'react';
import {Box, Typography} from "@mui/material";

function AboutUsCard(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
            }}
        >
            <Box>
                <Typography>
                    We get to know you
                </Typography>
            </Box>
            <Box>
                <Typography>
                    We get to know you
                </Typography>
            </Box>
            <Box>
                <Typography>
                    We get to know you
                </Typography>
            </Box>
        </Box>
    );
}

export default AboutUsCard;
