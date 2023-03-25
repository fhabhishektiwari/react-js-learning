import { useState } from 'react';
import './App.css';

import {Box, Switch, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Main from './components/Main';
import { makeStyles } from '@mui/styles';
import Button from './components/Button/Button';

const useStyles=makeStyles(theme=>({
  para:{
    fontSize:'8px !important',
  }
}))



function App() {
  const [darkMode, setdarkMode] = useState(false);
  
  const classes=useStyles();



  const handleChange = () => {
    setdarkMode(!darkMode)
  }

  
  return (
    <div className="App">
        <Main/>
        {/*<label>{darkTheme.palette.mode} mode</label>*/}
        {<Switch
          checked={darkMode}
          color='success'
          onChange={handleChange} />}
        <Box>
          <Typography variant='body4' className={classes.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis architecto dolorem qui voluptate placeat, est laborum ea accusamus voluptas sequi.</Typography>
        </Box>
        <Button
          text="Button"
          color="primary"
        />
        <Button
          text="Button"
          color="secondary"
        />
    </div>
  );
}

export default App;
