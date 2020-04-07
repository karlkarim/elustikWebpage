import React from 'react';
import './index.css';

const TextField = ({onchange, children, textPlaceholder}) => {

    return(
    <textarea onChange={onchange} placeholder={textPlaceholder}>{children}</textarea>
    )
}

export default TextField;