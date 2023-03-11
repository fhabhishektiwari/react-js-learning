import { InputAdornment, InputLabel, TextField } from '@mui/material';
import React from 'react'

const InputField = (props) => {
    const { label, type, name,display, value,variant, onChange, placeholder, startAdornment } = props;
    return (
        <>
            <InputLabel
                sx={{
                    display: `${display} !important`,
                }}
            >{label}</InputLabel>
            <TextField
                // label={label}
                type={type}
                variant={variant}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
                }}
                sx={{width:'100%'}}
            />
        </>
    )
}

export default InputField;
