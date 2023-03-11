import React from 'react';
import './myStyles.css';

const Stylesheet = (props) => {
    const className=props.primary?'primary':'';
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
