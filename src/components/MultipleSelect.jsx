import React, { useState } from 'react';
import { InputLabel, MenuItem, Select as MuiSelect, FormControl } from '@mui/material';

const options = [
    { value: "op1", label: 'op1' },
    { value: "op2", label: 'op2' },
    { value: "op3", label: 'op3' },
]

const NativeSelect = (props) => {
    const [selectedOption, setSelectedOption] = useState([]);
    // console.log(selectedOption);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel>Choose options</InputLabel>
            <MuiSelect
                multiple
                // native={true}
                value={selectedOption}
                onChange={handleOptionChange}
            >
                {
                    options.map(item => (
                        <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                    ))
                }
            </MuiSelect>
        </FormControl>
    );
}

export default NativeSelect;
