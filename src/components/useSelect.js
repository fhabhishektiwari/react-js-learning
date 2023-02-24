import React from 'react';

export default function Select(props) {
    const {children,onChange,value} = props;
  return (
    <select 
        multiple
        onChange={onChange}
        // value={value}
    >
      {children}
    </select>
  )
}
