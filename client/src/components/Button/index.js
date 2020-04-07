import React from 'react'
import './index.css'

const ButtonB = ({disabled, label, onClick}) => {

    return(
    <button disabled={disabled} className='button-general' onClick={onClick}>{label}</button>
    )
}
export default ButtonB;
