import React from 'react';
import './index.css';

const InputField = ({inputValue, inputType, inputPlaceH, onchange}) => {

    return(
        <input 
        type={inputType}
        className='email-input'
        value={inputValue}
        placeholder={inputPlaceH}
        onChange={onchange}
        />
    )
}

export default InputField;