import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";

function UseStateDemo(props) {
    const [age, setAge] = useState(21);

    const handleIncreaseAge = () => {
        setAge(age + 1);
    }


    return (

        <Box>
            <Typography
                variant={"h1"}
            >
                {age}
            </Typography>

            <Button
                onClick={handleIncreaseAge}
            >
                Increase Age
            </Button>
            <Button
                onClick={() => setAge(age - 1)}
            >
                Decrease Age
            </Button>
        </Box>

    );
}

export default UseStateDemo;
