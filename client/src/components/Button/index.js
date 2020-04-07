import React from 'react'
import './index.css'

const ButtonB = ({label, onClick}) => {

    return(
    <button className='button-general' onClick={onClick}>{label}</button>
    )
}
export default ButtonB;
