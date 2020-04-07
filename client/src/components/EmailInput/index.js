import React from 'react';
import './index.css';

const InputField = ({inputValue, inputType, inputPlaceH, onchange, inputName}) => {

    return(
        <input 
        type={inputType}
        className='email-input'
        value={inputValue}
        placeholder={inputPlaceH}
        name={inputName}
        onChange={onchange}
        />
    )
}

export default InputField;