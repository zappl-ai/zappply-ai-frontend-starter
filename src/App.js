import './App.css';
import {Box, Typography} from "@mui/material";
import ComponentExample from "./ComponentExample/ComponentExample";

function App() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        zappply ai starter kit
      </Typography>
        <ComponentExample />
    </Box>
  );
}

export default App;
