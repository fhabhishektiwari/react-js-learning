import React from 'react';
import {Button as MuiButton} from '@mui/material';
import useStyles from './styles';

function Button(props) {
    const {text,width}=props;
    const classes=useStyles(props);
    return <MuiButton
        className={classes.button}
        width={width}
    >
        {text}
    </MuiButton>
}

export default Button
