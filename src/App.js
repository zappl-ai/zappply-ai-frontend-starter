import './App.css';
import {Box, Typography} from "@mui/material";
import ComponentExample from "./ComponentExample/ComponentExample";
import ComponentExampleLive from "./ComponentExampleLive/ComponentExampleLive";
import MockTaskComp from "./components/MockTaskComp/MockTaskComp";

function App() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                zappply ai starter kit
            </Typography>
            <ComponentExample/>
            <ComponentExampleLive/>
            <MockTaskComp/>

        </Box>
    );
}

export default App;
